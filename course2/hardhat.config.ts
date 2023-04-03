/*
 * @Author: YYHaier
 * @Github: https://github.com/yuhai-yang
 * @Date: 2023-04-03 10:48:36
 * @LastEditors: yyhaier
 * @LastEditTime: 2023-04-03 15:06:57
 * @FilePath: /blockchain-academy-contract/course2/hardhat.config.ts
 */
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "ethers";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    bscTest: {
      url: process.env.BSCTEST_URL,
      accounts: process.env.BSCTEST_PRIVATE_KEY !== undefined ? [process.env.BSCTEST_PRIVATE_KEY] : [],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
