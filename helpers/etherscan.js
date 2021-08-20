// internet
const fetch = require('node-fetch');

// utils
const logger = require('../utils/logger');

// configuration files
const config = require('../config');

// get ABI of an verified contract
const abiFetcher = async (contract) => {
  // fetch ABI
  const response = await fetch(`https://api.etherscan.io/api?module=contract&action=getabi&address=${contract}&apikey=${config.etherscanApiToken}`);
  const data = await response.json();

  // if ABI is NOT verified
  if (data.result === 'Contract source code not verified') {
    logger.error('Contract code is NOT verified!');
    return {};
  }

  // return ABI
  return JSON.parse(data.result);
};

module.exports = {
  abiFetcher,
};
