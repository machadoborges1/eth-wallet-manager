// index.js
const config = require('./config');
const EthWallet = require('./services/ethWallet');

(async () => {
  try {
    const wallet = new EthWallet(config);

    const balance = await wallet.getBalance();
    console.log(`Saldo: ${balance} ETH`);

    const gasPrices = await wallet.getGasPrices();
    console.log('Preços do Gás:', gasPrices);

    const estimatedGas = await wallet.estimateTransferGas('0x1ABC7154748D1CE5144478CDEB574AE244B939B5', 0.01);
    console.log(`Gás estimado: ${estimatedGas}`);

    // const tx = await wallet.transfer('0x1ABC7154748D1CE5144478CDEB574AE244B939B5', 0.01);
    // if (tx) {
    //   const receipt = await wallet.getTransactionReceipt(tx.transactionHash);
    //   console.log('Recibo da transação:', receipt);
    // }

    const wei = wallet.convertAmount('1', 'ether', 'wei');
    console.log(`1 ETH em Wei: ${wei}`);

    const gwei = wallet.convertAmount('1000000000', 'wei', 'gwei');
    console.log(`1000000000 Wei em Gwei: ${gwei}`);

  } catch (error) {
    console.error('Erro:', error.message);
  }
})();