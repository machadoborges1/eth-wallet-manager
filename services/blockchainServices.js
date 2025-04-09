// services/blockchainService.js
const Web3 = require('web3');
const { validateAddress } = require('web3-utils');

class BlockchainService {
  constructor(providerUrl) {
    this.web3 = new Web3(providerUrl);
  }

  async getBalance(address) {
    if (!validateAddress(address)) {
      throw new Error('Endereço Ethereum inválido');
    }
    const balanceWei = await this.web3.eth.getBalance(address);
    return this.web3.utils.fromWei(balanceWei, 'ether');
  }

  async sendTransaction(transaction, privateKey) {
    const signedTx = await this.web3.eth.accounts.signTransaction(transaction, privateKey);
    return this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  }

  async getTransactionReceipt(txHash) {
    return this.web3.eth.getTransactionReceipt(txHash);
  }

  async getGasPrice() {
    return this.web3.eth.getGasPrice();
  }

  async estimateGas(transaction) {
    return this.web3.eth.estimateGas(transaction);
  }

  async getChainId(){
    return this.web3.eth.getChainId();
  }
}

module.exports = BlockchainService;