// node connection
const { web3 } = require('./utils/admin');

// configuration files
const { tokens, factories, ABIs } = require('./addresses/ethereum');

// utils
const logger = require('./utils/logger');

// other functions
const { abiFetcher } = require('./helpers/etherscan');

// uniswap contract
const uniswapFactoryContract = new web3.eth.Contract(
  ABIs.uniswapFactory,
  factories.uniswap_v2,
);

const main = async () => {
  // get `pairAddress` of `WETH` and `DAI`
  const pairAddress = await uniswapFactoryContract.methods.getPair(tokens.WETH, tokens.DAI).call();
  logger.debug(pairAddress);

  const abiOfPairAddress = await abiFetcher(pairAddress);

  // uniswap contract
  const pairContract = new web3.eth.Contract(
    abiOfPairAddress,
    pairAddress,
  );

  const reserves = await pairContract.methods.getReserves().call(); // call this when isNewBlock

  logger.info(`Price of WETH is ${(reserves._reserve0 / reserves._reserve1)} DAI`);
};

main();
