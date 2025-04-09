// services/ethWallet.js
const { validateAddress, toWei, fromWei } = require('web3-utils');
const BlockchainService = require('./blockchainService');

class EthWallet {
  constructor(config) {
    if (!config.walletAddress || !config.privateKey) {
      throw new Error('Endereço da carteira e chave privada devem ser configurados.');
    }
    this.address = config.walletAddress;
    this.privateKey = config.privateKey;
    this.blockchainService = new BlockchainService(config.providerUrl);
  }

  async getBalance() {
    return this.blockchainService.getBalance(this.address);
  }

  async transfer(to, valueInEth, gasLimit) {
    if (!validateAddress(to)) {
      throw new Error('Endereço de destino inválido');
    }
    const valueWei = toWei(valueInEth.toString(), 'ether');
    const nonce = await this.blockchainService.web3.eth.getTransactionCount(this.address, 'latest');
    const gasPrice = await this.blockchainService.getGasPrice();
    const chainId = await this.blockchainService.getChainId();

    const transaction = {
      from: this.address,
      to,
      value: valueWei,
      gas: gasLimit,
      gasPrice,
      nonce,
      chainId
    };

    return this.blockchainService.sendTransaction(transaction, this.privateKey);
  }

  async getTransactionReceipt(txHash) {
    return this.blockchainService.getTransactionReceipt(txHash);
  }

  async getGasPrices() {
    const gasPriceWei = await this.blockchainService.getGasPrice();
    return {
      wei: gasPriceWei,
      gwei: fromWei(gasPriceWei, 'gwei'),
      eth: fromWei(gasPriceWei, 'ether'),
    };
  }

  async estimateTransferGas(to, valueInEth) {
    if (!validateAddress(to)) {
      throw new Error('Endereço de destino inválido');
    }
    const valueWei = toWei(valueInEth.toString(), 'ether');
    const transaction = {
      from: this.address,
      to,
      value: valueWei,
    };
    return this.blockchainService.estimateGas(transaction);
  }

  convertAmount(amount, fromUnit, toUnit) {
    const weiValue = toWei(amount.toString(), fromUnit);
    return fromWei(weiValue, toUnit);
  }
}

module.exports = EthWallet;