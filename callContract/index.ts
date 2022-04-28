import Web3 from "web3"
import IdentityFactoryAbi from "./abis/identity_factory.abi"
import IdentityAbi from "./abis/identity.abi"
import { WalletService } from "./services/wallet.service"
import { AbiItem, soliditySha3 } from "web3-utils";
import { Contract } from "web3-eth-contract";

const IDENTITY_FACTORY = "0xD23B3e816dfC9F2d523ef392921C3209431458A8"

const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-2-s1.binance.org:8545"));
const IdentityFactoryContract: Contract = new web3.eth.Contract(IdentityFactoryAbi as AbiItem[], IDENTITY_FACTORY);

(async function main() {
  const wallet = new WalletService("ef6dfc6ceb389da29a3b2467a4d4d5c90f722860b0e0438a1150e6796d3e36e5")
  
  const owner = "0x856c2afd19b368dd38449c751f831fedea9542fc"

  const deployIdentityData: string = IdentityFactoryContract.methods.deploy(owner, "0x9dfe40fdaf9ed52a935bd659017fa24ed1166cd18ee527ceaf5c654780a1dfe2").encodeABI()

  const transaction = {
    to: IDENTITY_FACTORY,
    data: deployIdentityData,
    gas: 300000
  }
  const txHash = await wallet.sendTransaction(transaction)
  console.log(txHash)

  const identityAddress: string = await IdentityFactoryContract.methods.getAddress(owner, "0x9dfe40fdaf9ed52a935bd659017fa24ed1166cd18ee527ceaf5c654780a1dfe2").call()

  const IdentityContract: Contract = new web3.eth.Contract(IdentityAbi as AbiItem[], identityAddress) 

  let claimType = 1 
  let claimSchema = 1 
  let issuer = owner
  let data = "hello" 
  let uri = "helloworld"

  let sign = await wallet.signMessage(identityAddress + claimType.toString() + data)

  let addClaimData = IdentityContract.methods.addClaim(claimType, claimSchema, issuer, sign.signature, web3.utils.fromAscii(data), web3.utils.fromAscii(uri)).encodeABI()

  let addClaimTx = {
    to: identityAddress,
    data: addClaimData,
    gas: 300000
  }

  let addClaimTxHash = await wallet.sendTransaction(addClaimTx) 

  console.log(addClaimTxHash)

  let claimId = await IdentityContract.methods.getClaimIdsByType(claimType).call()

  console.log(claimId[0])

})()
