// node connection
const BigNumber = require('bignumber.js');
const { web3 } = require('./utils/admin');

// configuration files
const { tokens, routers, ABIs } = require('./addresses/ethereum');

// utils
const logger = require('./utils/logger');

// models
const EthereumCalculator = require('./models/EthereumCalculator');

const main = async () => {
  // user input of 2 tokens
  const swapFrom = 'WETH'; // Enter token name (3-4 letters)
  const swapTo = 'DAI';
  const swapAmount = BigNumber(1e+18); // in wei

  /* This creates and event emitter linked to eth_subscribe */
  const subscription = web3.eth.subscribe('newBlockHeaders');

  /* This exposes the events from the subscription, synchronously */
  subscription.on('data', async (block, error) => {
    logger.debug('============================================');
    // current block number
    logger.debug(`New block: ${block.number}`);

    // average gas price
    const gasPrice = await web3.eth.getGasPrice();
    logger.debug(`Gas price: ${Math.floor(web3.utils.fromWei(gasPrice, 'gwei'))}`);

    // initialise uniswap v2 calculator
    const uniswapV2EthCalc = new EthereumCalculator(ABIs.uniswapV2Router, routers.uniswapV2, tokens[swapFrom], tokens[swapTo], swapAmount);
    const uniswapV2SellPrice = await uniswapV2EthCalc.getSellPrice();
    const uniswapV2V2BuyPrice = await uniswapV2EthCalc.getBuyPrice();

    // initialise sushiswap v2 calculator
    const sushiswapV2EthCalc = new EthereumCalculator(ABIs.sushiswapV2Router, routers.sushiswapV2, tokens[swapFrom], tokens[swapTo], swapAmount);
    const sushiswapV2SellPrice = await sushiswapV2EthCalc.getSellPrice();
    const sushiswapV2BuyPrice = await sushiswapV2EthCalc.getBuyPrice();

    logger.info(`UniswapV2   | 🟥 Sell | 1 ${swapFrom} -> ${uniswapV2SellPrice} ${swapTo}`);
    logger.info(`UniswapV2   | 🟩 Buy  | 1 ${swapFrom} -> ${uniswapV2V2BuyPrice} ${swapTo}`);
    logger.info(`SushiswapV2 | 🟥 Sell | 1 ${swapFrom} -> ${sushiswapV2SellPrice} ${swapTo}`);
    logger.info(`SushiswapV2 | 🟩 Buy  | 1 ${swapFrom} -> ${sushiswapV2BuyPrice} ${swapTo}`);
  });
};

main();
