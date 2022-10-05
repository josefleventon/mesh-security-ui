import { useEffect, useState, useMemo } from 'react';
import { useWallet } from '@cosmos-kit/react';
import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';

import {
  Box,
  Divider,
  Grid,
  Heading,
  Text,
  Stack,
  Container,
  Link,
  Button,
  Flex,
  Icon,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { osmoContracts } from '../config';

import { WalletStatus } from '@cosmos-kit/core';
import { Product, Dependency, WalletSection } from '../components';
import Head from 'next/head';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { Coin } from "cosmwasm";

import { BalanceResponse } from '../codegen/MeshLockup.types';
import { MeshLockupClient } from '../codegen/MeshLockup.client';
import { ValidatorResponse } from '../codegen/MeshProvider.types';
import { MeshProviderClient } from '../codegen/MeshProvider.client';

const chainName = 'osmosistestnet';
const denom = 'uosmo';

const chainassets: AssetList = assets.find(
  (chain) => chain.chain_name === chainName
) as AssetList;
const coin: Asset = chainassets.assets.find(
  (asset) => asset.base === denom
) as Asset;

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const {
    getStargateClient,
    getCosmWasmClient,
    address,
    setCurrentChain,
    currentWallet,
    walletStatus
  } = useWallet();

  useEffect(() => {
    console.log(`current: ${chainName}`);
    setCurrentChain(chainName);
  }, [setCurrentChain]);

  const color = useColorModeValue('primary.500', 'primary.200');

  // get cw20 balance
  const [client, setClient] = useState<SigningCosmWasmClient | null>(
    null
  );

  useEffect(() => {
    getCosmWasmClient().then((cosmwasmClient) => {
      if (!cosmwasmClient || !address) {
        console.error('cosmwasmClient undefined or address undefined.');
        return;
      }
      setClient(cosmwasmClient);
    });
  }, [address, getCosmWasmClient]);
  const [bal, setBal] = useState<Coin | null>(null);
  useEffect(() => {
    if (client && address) {
      client
        .getBalance(address, denom)
        .then((b) => setBal(b));
    }
  }, [client, address]);

  const [bonded, setBonded] = useState<BalanceResponse | null>(null);
  useEffect(() => {
    if (client && address) { updateBond(client, address); }
  }, [client, address]);
  const updateBond = async (client: SigningCosmWasmClient, address: string) => {
    const lockupClient = new MeshLockupClient(client, address, osmoContracts.meshLockupAddr);
    try {
      const b = await lockupClient.balance({account: address});
      setBonded(b);
    } catch (e) {
      setBonded({
        bonded: "0",
        free: "0",
        claims: [],
      });
    }
  }

  const [vals, setVals] = useState<ValidatorResponse[]>([]);
  useEffect(() => {
    if (client && address) { 
      const updateVals = async () => {
        const providerClient = new MeshProviderClient(client, address, osmoContracts.meshProviderAddr);
        const { validators } = await providerClient.listValidators({});
        setVals(validators);
      }
      updateVals();
    }
  }, [client, address]);



  const doBond = async () => {
    if (!client || !address) {
      console.error('client or address undefined.');
      return;
    }
    const lockupClient = new MeshLockupClient(client, address, osmoContracts.meshLockupAddr);
    await lockupClient.bond("auto", undefined, [{amount: "1000000", denom: "uosmo"}]);
    await updateBond(client, address);
  }

  const doStake = async (validator: string) => {
    if (!client || !address) {
      console.error('client or address undefined.');
      return;
    }
    console.log(`Staking to ${validator}`);
    const stakeTokens = async () => {
      const lockupClient = new MeshLockupClient(client, address, osmoContracts.meshLockupAddr);
      await lockupClient.grantClaim({amount: "1000000", leinholder: osmoContracts.meshProviderAddr, validator}, "auto");
      await updateBond(client, address);
    }
    stakeTokens();
  }

  const doUnstake = async (validator: string) => {
    if (!client || !address) {
      console.error('client or address undefined.');
      return;
    }
    console.log(`Unstaking from ${validator}`);
    const unstakeTokens = async () => {
      const providerClient = new MeshProviderClient(client, address, osmoContracts.meshProviderAddr);
      await providerClient.unstake({validator, amount: "900000"});
    }
    unstakeTokens();
  }

  return (
    <Container maxW="5xl" py={10}>
      <Head>
        <title>Osmosis Provider - Mesh Security</title>
        <meta name="description" content="Generated by create cosmos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justifyContent="end" mb={4}>
        <Button variant="outline" px={0} onClick={toggleColorMode}>
          <Icon
            as={colorMode === 'light' ? BsFillMoonStarsFill : BsFillSunFill}
          />
        </Button>
      </Flex>
      <Box textAlign="center">
        <Heading
          as="h1"
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
          fontWeight="extrabold"
          mb={3}
        >
          Osmosis Provider
        </Heading>
        <Heading
          as="h1"
          fontWeight="bold"
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        >
        </Heading>
      </Box>
      <WalletSection chainName={chainName} />

        {walletStatus === WalletStatus.Disconnected && (
        <Box textAlign="center">
        <Heading
            as="h3"
            fontSize={{ base: '1xl', sm: '2xl', md: '2xl' }}
            fontWeight="extrabold"
            m={30}
        >
            Connect your wallet!
        </Heading>
        </Box>
        )}

        {walletStatus !== WalletStatus.Disconnected && (
          <div>
                <div>
                Available Balance:{' '}
                 {bal?.amount ?? 'loading...'} {denom} 
                </div>
                <div>
                Lockup: {bonded ? `${bonded.free} free / ${bonded.bonded} bonded ${denom}`: 'loading...'}
                </div>
                <Button onClick={doBond}>
                  Bond 1 OSMO
                </Button>
          </div>
        )}

        <div>
          <p>Select a validator:</p>
          <ul>
            { vals.map((v, i) => (<li key={i}>{v.address}: {client ? <Button onClick={() => doStake(v.address)}>Stake 1 OSMO</Button> : ""} {client ? <Button onClick={() => doUnstake(v.address)}>Unstake 0.9 OSMO</Button> : ""}</li>))}
          </ul>
        </div>



    </Container>
  );
}
