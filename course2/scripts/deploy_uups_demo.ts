/*
 * @Author: YYHaier
 * @Github: https://github.com/yuhai-yang
 * @Date: 2023-04-03 14:56:32
 * @LastEditors: yyhaier
 * @LastEditTime: 2023-04-03 15:21:55
 * @FilePath: /blockchain-academy-contract/course2/scripts/deploy_uups_demo.ts
 */
import { ethers, upgrades } from "hardhat";

const KEY = 10;
async function main() {
    const UUPSDemo = await ethers.getContractFactory("UUPSDemo");
    console.log("Deploying UUPS Demo ......");

    const demo = await upgrades.deployProxy(UUPSDemo, [KEY], { initializer: "initialize" });
    await demo.deployed();
    console.log("UUPSDemo deployed successfully,contract address is :", demo.address);
}

main();