// config.js
require('dotenv').config();

module.exports = {
  providerUrl: process.env.INFURA_URL,
  walletAddress: process.env.WALLET_ADDRESS,
  privateKey: process.env.PRIVATE_KEY,
  gasLimit: 211000,
};