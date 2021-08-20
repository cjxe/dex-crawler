// configuration files
const config = require('../config');

// node api
const Web3 = require('web3');

// connecting to node
const web3 = new Web3(config.wssEndpoint);


module.exports = {
  web3,
}