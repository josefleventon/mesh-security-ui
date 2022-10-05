/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { InstantiateMsg, ExecuteMsg, Uint128, SudoMsg, Coin, QueryMsg, Addr, AllDelegationsResponse, Delegation, Decimal, AllValidatorsResponse, Validator, ConsumerInfo, ConsumersResponse, DelegationResponse, FullDelegation } from "./MetaStaking.types";
export interface MetaStakingMessage {
  contractAddress: string;
  sender: string;
  delegate: ({
    amount,
    validator
  }: {
    amount: Uint128;
    validator: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  undelegate: ({
    amount,
    validator
  }: {
    amount: Uint128;
    validator: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  withdrawDelegatorReward: ({
    validator
  }: {
    validator: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  sudo: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class MetaStakingMessageComposer implements MetaStakingMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.delegate = this.delegate.bind(this);
    this.undelegate = this.undelegate.bind(this);
    this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
    this.sudo = this.sudo.bind(this);
  }

  delegate = ({
    amount,
    validator
  }: {
    amount: Uint128;
    validator: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          delegate: {
            amount,
            validator
          }
        })),
        funds
      })
    };
  };
  undelegate = ({
    amount,
    validator
  }: {
    amount: Uint128;
    validator: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          undelegate: {
            amount,
            validator
          }
        })),
        funds
      })
    };
  };
  withdrawDelegatorReward = ({
    validator
  }: {
    validator: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          withdraw_delegator_reward: {
            validator
          }
        })),
        funds
      })
    };
  };
  sudo = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          sudo: {}
        })),
        funds
      })
    };
  };
}