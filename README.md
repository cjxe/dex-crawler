# <h1 align="center">DEX Crawler 🕷️</h1>

<div align="center">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/cjxe/dex-crawler?style=social">
</div>

## <h2 align="center">⚠️ THIS CODE IS NO LONGER BEING MAINTAINED! ⚠️</h2>

## Index

1. [About](#about)
2. [Installation](#installation)
3. [Contribution](#contribution)
4. [TODO](#todo)
5. [Author](#author)

---

## About

An app that monitor prices of tokens in different DEXs (i.e. [Uniswap](https://app.uniswap.org/#/swap), [Sushiswap](https://app.sushi.com/swap) etc.)

## Installation

The build has been tested with [Node.js 16.6.1](https://nodejs.org/dist/v16.6.1/).

Steps:

1. Clone this repo to the hosting system (or click [download](https://github.com/cjxe/dex-crawler/archive/refs/heads/main.zip)).
2. Type `npm install` into the terminal to install the necessary dependencies.
3. **Copy** `.env.example` and rename **the copy** to `.env`. *(Bugs may occur when renaming)*
4. Edit the variables in `.env` and save.
5. Type `npm start` to run the crawler.

## Contribution

- Found a bug or something is not working right? Submit a new issue [on the "Issues" tab](https://github.com/cjxe/dex-crawler/issues).

- Would you like to contribute to the code? 

1. Check the code that it applies to `.eslintrc.js` rules.
2. Make a new pull request.

## TODO

- [X] Get LP token address using two tokens.
- [X] <strike>Calculate the **rough** price of a token in DAI. *(i.e., 1 WETH = 3255.124 DAI)*</strike>
- [X] Calculate the **correct** price of a token in DAI. <strike>*(Curved calculations)*</strike> *(**NEW**: Using the router contracts)*
- [ ] Save every pulled ABI/contract into a file. *(Think about the DB structure)*
- [X] Refresh the price when a new block is created.
- [X] Support for Uniswap. *(Ethereum network)*
- [X] Support for Sushiswap. *(Ethereum network)*
- [ ] Support for Curve. *(Ethereum network)*
- [ ] Support for 1inch. *(Ethereum network)*
- [ ] Support for cryptodefiswap. *(Ethereum network)*
- [ ] Support for PancakeSwap. *(BSC network)*
- [ ] Support for Sushiswap. *(BSC network)*
- [ ] Support for Curve. *(BSC network)*
- [ ] Support for 1inch. *(BSC network)*
- [ ] Support for Quickswap. *(Polygon network)*
- [ ] UI with Electron?..

## Author

**CJXE** on GitHub. **lettucebaran#4009** on Discord.
