<!--
 * @Author: YYHaier
 * @Github: https://github.com/yuhai-yang
 * @Date: 2023-03-20 10:29:17
 * @LastEditors: yyhaier
 * @LastEditTime: 2023-03-20 11:34:45
 * @FilePath: /blockchain-academy-contract/README.md
-->
# BLOCKCHAIN ACADEMY CONTRACT

## Course 1
作业内容：部署流动性挖矿合约
1. 部署ERC-20合约
什么是ERC-20代币，以及ERC-20合约示例：https://ethereum.org/zh/developers/docs/standards/tokens/erc-20/
2. 完成流动性挖矿合约的部署
什么是流动性挖矿：https://mirror.xyz/xyyme.eth/_yGLvqTXQCX-UYRp_sWMR7MuDDKWuEhOw0S5QqJXr84

### Deployed
> msg.sender: 0x7985Fe50e6a9D3a658e623d11E40bC5C34f18863
1. Deploy rewardToken contract.  
    Contract Address:0x0619aaceE9bAe29A76244247A844100be52A3e4B  
    Transaction Hash: 0xba714963ad4d28578532a0937f46182315640730f0c62312f2e8d3cf39d09979
2. Deploy stakeToken contract.  
    Contract Address:0x0cde2f8c04b320403384c6e1719dc1755fc72c41  
    Transaction Hash:0xa1cf041a12841ad8b49ac2461705814afd95b113b87dd973d7c747caf1cc4481
3. Deploy masterchef contract.  
   Contract Address:0x5ebf1114e9f7baeece1a67e2ca7aa47b8691d1b0  
   Transaction Hash: 0x8d2cd561fc7dd41a1a0a01550af7c4db8645590f9bf2f06332170da5d49a57ed
4. Mint rewardToken and stakeToken to 'msg.sender'  
   Transaction Hash: 0x8125b8e5a30ff6c2e4750d2703904a2d3aa8255b85b87257c60188b5245ff545  
   Transaction Hash: 0x4a902c40c9c44e5a1e08e5ee25b8239ce239e8c40ab6ae74d80fe3b714db9110
5. Msg.sender Transfer RewardToken to the masterchef contract.  
   Transaction Hash: 0x17f4d95c31183386168ef3ae2f4eecebfc0e3d4153e44e1393937d34a760347a
6. Msg.sender approve 100 ST to masterchef  
   Transaction Hash: 0xe5ce840b3ce7a70a21ba4d4d820234ea25cf18a48f939c19fdd3e1b4c0771fe9
7. Msg.sender deposit 100 stakeToken to masterchef.  
   Transaction Hash: 0x69c498d99226e28af28ef8d4c53dc3f9344fd050ac70ba97fc67f6da5d393e11