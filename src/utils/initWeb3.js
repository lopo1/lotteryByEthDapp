// const HDWalletProvider = require('truffle-hdwallet-provider');
// const Web3 = require('web3');
// const { abi, bytecode} = require('./01-compile');
// let terms = 'quit violin refuse quit affair lunar minor sunset bracket undo fish post'
// let netIp = 'http://127.0.0.1:7545'
// const provider = new HDWalletProvider(
//     terms,
//     netIp
// );
// const web3 = new Web3(provider);
//////////////////////////////
// const Web3 = require('web3');
// var currentProvider = new Web3.providers.HttpProvider('http://127.0.0.1:8545')
// const web3 = new Web3(currentProvider);
// console.log('我们 web3 :',web3.version)
// web3.setProvider(web3.currentProvider)
///////////////////////////
const Web3 = require('web3');
// var currentProvider = new Web3.providers.HttpProvider('http://127.0.0.1:8545')
let web3 = new Web3();
if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    // try {
    //     // Request account access if needed
    //     window.ethereum.enable();
    //     // Acccounts now exposed
        
    // } catch (error) {
    //     console.log('window.ethereum',error)
    // }
}else if (window.web3){
     web3 = window.web3;
}else{
    const provider = new Web3.providers.HttpProvider(
        "http://127.0.0.1:8545"
      );
    web3 = new Web3(provider);
}

console.log('我们 web3 :',web3.version)
module.exports = web3