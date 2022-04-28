import Web3 from "web3"
import { Account, Sign } from 'web3-core'

const web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-2-s1.binance.org:8545"))

interface Transaction {
  data: string
  to: string
  value?: number
  gas: number
}

const createNewWallet = ()  => {
}

export class WalletService {
  private account: Account
  
  constructor(privateKey: string) {
    this.account = web3.eth.accounts.privateKeyToAccount(privateKey)
  }

  async sendTransaction(transaction: Transaction) : Promise<string> {
    const signedTransaction = await this.account.signTransaction(transaction)

    if (typeof signedTransaction.rawTransaction == "undefined") {
      return ""
    }
    const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)

    return receipt.transactionHash
  }

  async signMessage(message: string): Promise<Sign> {
    return this.account.sign(message)
  }
}
