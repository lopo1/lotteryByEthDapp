let web3 = require('../utils/initWeb3')
let abi = [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "draw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getPlayers", "outputs": [ { "internalType": "address[]", "name": "", "type": "address[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getPlayersCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "manager", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "playe", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "players", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "round", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "undraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "winner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ]
let address = '0xedb7D43F9F3361BeD2a4901874c1968243d5fF02'

// 此处是abi已经json对象，不需要进行parse动作
let contactInstance = new web3.eth.Contract(abi,address)
contactInstance.setProvider(web3.currentProvider)
console.log('address :',contactInstance.options.address)
// const {manager} = contactInstance.methods
// const managerName = contactInstance.methods.manager().call();
// console.log(managerName)
module.exports = contactInstance