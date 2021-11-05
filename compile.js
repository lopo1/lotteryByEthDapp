// // 导入solc编译器
// let solc = require('solc')

// let fs = require('fs')

// // 读取合约
// let sourceCode = fs.readFileSync('./contracts/Lottery.sol','utf-8')
// console.log('sourceCode :',sourceCode)
// let output = solc.compile(sourceCode,1)
// console.log('output :',output)
// let res = fs.writeFileSync('./compileInfo.json', JSON.stringify(output), 'utf-8')
// module.exports = output['contracts'][':Lottery']

const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotterypath = path.resolve(__dirname, 'Contracts', 'Lottery.sol');
const source = fs.readFileSync(lotterypath, 'UTF-8');

let input = {
    language: 'Solidity',
    sources: {
        'Lottery' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};

let output = JSON.parse(solc.compile(JSON.stringify(input)));
// console.log('output :',output.contracts['Lottery']['Lottery'].abi)
// module.exports = output.contracts['Lottery']
exports.abi = output.contracts['Lottery']['Lottery'].abi;
exports.bytecode = output.contracts['Lottery']['Lottery'].evm.bytecode.object;