/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Uint128, Logo, EmbeddedLogo, Binary, InstantiateMsg, Cw20Coin, InstantiateMarketingInfo, MinterResponse, ExecuteMsg, Expiration, Timestamp, Uint64, QueryMsg, AllAccountsResponse, AllAllowancesResponse, AllowanceInfo, AllSpenderAllowancesResponse, SpenderAllowanceInfo, AllowanceResponse, BalanceResponse, DownloadLogoResponse, LogoInfo, Addr, MarketingInfoResponse, TokenInfoResponse } from "./HackCw20.types";
export interface HackCw20Message {
  contractAddress: string;
  sender: string;
  transfer: ({
    amount,
    recipient
  }: {
    amount: Uint128;
    recipient: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  burn: ({
    amount
  }: {
    amount: Uint128;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  send: ({
    amount,
    contract,
    msg
  }: {
    amount: Uint128;
    contract: string;
    msg: Binary;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  increaseAllowance: ({
    amount,
    expires,
    spender
  }: {
    amount: Uint128;
    expires?: Expiration;
    spender: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  decreaseAllowance: ({
    amount,
    expires,
    spender
  }: {
    amount: Uint128;
    expires?: Expiration;
    spender: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  transferFrom: ({
    amount,
    owner,
    recipient
  }: {
    amount: Uint128;
    owner: string;
    recipient: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  sendFrom: ({
    amount,
    contract,
    msg,
    owner
  }: {
    amount: Uint128;
    contract: string;
    msg: Binary;
    owner: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  burnFrom: ({
    amount,
    owner
  }: {
    amount: Uint128;
    owner: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  mint: ({
    amount,
    recipient
  }: {
    amount: Uint128;
    recipient: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateMinter: ({
    newMinter
  }: {
    newMinter?: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateMarketing: ({
    description,
    marketing,
    project
  }: {
    description?: string;
    marketing?: string;
    project?: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  uploadLogo: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class HackCw20MessageComposer implements HackCw20Message {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.transfer = this.transfer.bind(this);
    this.burn = this.burn.bind(this);
    this.send = this.send.bind(this);
    this.increaseAllowance = this.increaseAllowance.bind(this);
    this.decreaseAllowance = this.decreaseAllowance.bind(this);
    this.transferFrom = this.transferFrom.bind(this);
    this.sendFrom = this.sendFrom.bind(this);
    this.burnFrom = this.burnFrom.bind(this);
    this.mint = this.mint.bind(this);
    this.updateMinter = this.updateMinter.bind(this);
    this.updateMarketing = this.updateMarketing.bind(this);
    this.uploadLogo = this.uploadLogo.bind(this);
  }

  transfer = ({
    amount,
    recipient
  }: {
    amount: Uint128;
    recipient: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          transfer: {
            amount,
            recipient
          }
        })),
        funds
      })
    };
  };
  burn = ({
    amount
  }: {
    amount: Uint128;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          burn: {
            amount
          }
        })),
        funds
      })
    };
  };
  send = ({
    amount,
    contract,
    msg
  }: {
    amount: Uint128;
    contract: string;
    msg: Binary;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          send: {
            amount,
            contract,
            msg
          }
        })),
        funds
      })
    };
  };
  increaseAllowance = ({
    amount,
    expires,
    spender
  }: {
    amount: Uint128;
    expires?: Expiration;
    spender: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          increase_allowance: {
            amount,
            expires,
            spender
          }
        })),
        funds
      })
    };
  };
  decreaseAllowance = ({
    amount,
    expires,
    spender
  }: {
    amount: Uint128;
    expires?: Expiration;
    spender: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          decrease_allowance: {
            amount,
            expires,
            spender
          }
        })),
        funds
      })
    };
  };
  transferFrom = ({
    amount,
    owner,
    recipient
  }: {
    amount: Uint128;
    owner: string;
    recipient: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          transfer_from: {
            amount,
            owner,
            recipient
          }
        })),
        funds
      })
    };
  };
  sendFrom = ({
    amount,
    contract,
    msg,
    owner
  }: {
    amount: Uint128;
    contract: string;
    msg: Binary;
    owner: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          send_from: {
            amount,
            contract,
            msg,
            owner
          }
        })),
        funds
      })
    };
  };
  burnFrom = ({
    amount,
    owner
  }: {
    amount: Uint128;
    owner: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          burn_from: {
            amount,
            owner
          }
        })),
        funds
      })
    };
  };
  mint = ({
    amount,
    recipient
  }: {
    amount: Uint128;
    recipient: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint: {
            amount,
            recipient
          }
        })),
        funds
      })
    };
  };
  updateMinter = ({
    newMinter
  }: {
    newMinter?: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_minter: {
            new_minter: newMinter
          }
        })),
        funds
      })
    };
  };
  updateMarketing = ({
    description,
    marketing,
    project
  }: {
    description?: string;
    marketing?: string;
    project?: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_marketing: {
            description,
            marketing,
            project
          }
        })),
        funds
      })
    };
  };
  uploadLogo = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          upload_logo: {}
        })),
        funds
      })
    };
  };
}