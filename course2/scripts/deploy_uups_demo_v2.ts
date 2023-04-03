/*
 * @Author: YYHaier
 * @Github: https://github.com/yuhai-yang
 * @Date: 2023-04-03 15:47:51
 * @LastEditors: yyhaier
 * @LastEditTime: 2023-04-03 15:52:34
 * @FilePath: /blockchain-academy-contract/course2/scripts/deploy_uups_demo_v2.ts
 */
import { ethers, upgrades } from "hardhat";
const PROXY = "0x0030fc7799416f1742caaB10969B67268E28bccf";

async function main() {
    const UUPSDemoV2 = await ethers.getContractFactory("UUPSDemoV2");
    console.log("Deploying UUPS demo v2 ......");

    await upgrades.upgradeProxy(PROXY, UUPSDemoV2);

    console.log("UUPSDemoV2 upgraded successfully");
}

main();