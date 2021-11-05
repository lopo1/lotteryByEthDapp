// let {
//     bytecode,
//     interface
// } = require('./01-compile')

// let Web3 = require('web3')

// console.log('bytecode :', bytecode)
// console.log('interface :', interface)

// //初始化web3
// //ganache-cli本地测试环境，不需要指定助记词就可以使用里面的账户
// let web3 = new Web3('http://127.0.0.1:7545')

// let deploy = async () => {
//     let accounts = await web3.eth.getAccounts()

//     console.log('accounts : ', accounts)

//     //填写abi, 第二参数是合约地址，部署的时候不用填写
//     let contract = new web3.eth.Contract(JSON.parse(interface))

//     //填写bytecode和构造函数参数
//     contract.deploy({
//         data: bytecode,
//         // arguments:[], //如果没有构造函数参数，可以不写这个字段
//     }).send({
//         from: accounts[0],
//         // to :  //部署合约时，不需要填写to字段
//         value: 0,
//         // gas : '8000000000', 如果太小，创建交易时gas不足，会失败。如果过多，会提示超出gas上限，最多800万gas
//         gas: '800000'
//     }).then(res => {
//         console.log('新部署合约的地址为: ', res.options.address)
//     }).catch(err => {
//         console.log('部署合约失败:', err)
//     })
// }

// deploy()

// let {
//     bytecode,
//     interface
// } = require('./01-compile')

// let Web3 = require('web3')

// // console.log('bytecode :', bytecode)
// // console.log('interface :', interface)

// //初始化web3
// //ganache-cli本地测试环境，不需要指定助记词就可以使用里面的账户
// let web3 = new Web3('http://127.0.0.1:7545')

// let deploy = async () => {
//     let accounts = await web3.eth.getAccounts()

//     console.log('accounts : ', accounts)

//     //填写abi, 第二参数是合约地址，部署的时候不用填写
//     let contract = new web3.eth.Contract(JSON.parse(interface))

//     //填写bytecode和构造函数参数
//     contract.deploy({
//         data: bytecode,
//         // arguments:[], //如果没有构造函数参数，可以不写这个字段
//     }).send({
//         from: accounts[0],
//         // to :  //部署合约时，不需要填写to字段
//         value: 0,
//         // gas : '8000000000', 如果太小，创建交易时gas不足，会失败。如果过多，会提示超出gas上限，最多800万gas
//         gas: '800000'
//     }).then(res => {
//         console.log('新部署合约的地址为: ', res.options.address)
//     }).catch(err => {
//         console.log('部署合约失败:', err)
//     })
// }

// deploy()

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { abi, bytecode} = require('./compile');
let terms = 'quit violin refuse quit affair lunar minor sunset bracket undo fish post'
let netIp = 'http://127.0.0.1:7545'
const provider = new HDWalletProvider(
    terms,
    netIp
);
//初始化web3
//ganache-cli本地测试环境，不需要指定助记词就可以使用里面的账户
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account',accounts[0]);

  //填写abi, 第二参数是合约地址，部署的时候不用填写
  const result = await new web3.eth.Contract(abi)
    // .deploy({data: '0x' + bytecode, arguments: ['Hi there']}) //arguments 如果没有构造函数参数，可以不写这个字段
    .deploy({data: '0x' + bytecode})
    .send({from: accounts[0],gas: '3000000'});

  console.log('contract deployed to', result.options.address);

}
deploy();