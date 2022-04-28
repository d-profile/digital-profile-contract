import Web3 from "web3"
import IdentityFactoryAbi from "../abis/identity_factory.abi"
import { AbiItem } from "web3-utils";
import { Contract } from "web3-eth-contract";

const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-2-s1.binance.org:8545"))
const IdentityFactoryContract: Contract = new web3.eth.Contract(IdentityFactoryAbi as AbiItem[], "0x782a764DcBDAA1A649FCE3b11feD7F55366D2cd0")

export class IdentityFactoryService {
  static async getIdentityAddress(owner: string, salt: number): Promise<string> {
    const address = await IdentityFactoryContract.methods.getAddress(owner, [], [], salt).call()

    return address
  }

  static getContractAddress(): string {
    return "0x782a764DcBDAA1A649FCE3b11feD7F55366D2cd0"
  }

  static getDeployIdentityData(owner: string, salt: number): string {
    const data = IdentityFactoryContract.methods.deploy(owner, [], [], salt).encodeABI()

    return data
  }

}
