// utils/helpers.js
const { toWei, fromWei } = require('web3-utils');

function convertAmount(amount, fromUnit, toUnit) {
  const weiValue = toWei(amount.toString(), fromUnit);
  return fromWei(weiValue, toUnit);
}

module.exports = {
  convertAmount,
};