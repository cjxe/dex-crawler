// node connection
const BigNumber = require('bignumber.js');
const { web3 } = require('../utils/admin');

// swapAmount: wei
class EthereumCalculator {
  constructor(routerABI, routerAddress, swapFrom, swapTo, swapAmount) {
    this.routerABI = routerABI;
    this.routerAddress = routerAddress;
    this.swapFrom = swapFrom;
    this.swapTo = swapTo;
    this.swapAmount = swapAmount;
    this.routerContract = new web3.eth.Contract(
      this.routerABI,
      this.routerAddress,
    );
  }

  async getSellPrice() {
    const pathToSell = await this.routerContract.methods.getAmountsOut(
      BigNumber(this.swapAmount), // input: weth -> max dai
      [this.swapFrom, this.swapTo], // input: weth, output: dai
    ).call();
    return Math.floor(BigNumber(web3.utils.fromWei(pathToSell[pathToSell.length - 1], 'ether')) * 100) / 100;
  }

  async getBuyPrice() {
    const pathToBuy = await this.routerContract.methods.getAmountsIn(
      BigNumber(this.swapAmount), // output: weth -> min dai
      [this.swapTo, this.swapFrom], // input: dai, output: weth
    ).call();
    return Math.floor(BigNumber(web3.utils.fromWei(pathToBuy[0], 'ether')) * 100) / 100;
  }
}

module.exports = EthereumCalculator;
