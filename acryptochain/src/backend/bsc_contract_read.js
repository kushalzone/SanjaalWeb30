//import web3.js library
const Web3 = require('web3');

// Use Infura as a provider for Web3
const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org"));


// Get the current gas price
web3.eth.getGasPrice().then((gasPrice) => {
    console.log(`The current gas price is ${gasPrice} wei.`);
});



// Call the getBlockNumber function to get the block number
web3.eth.getBlockNumber().then((result) => {
    console.log(`The current Block Number is: ${result}`);
 });

// Call the getBlock function to get the latest block
// web3.eth.getBlock().then((result) => {
//     console.log(`The current Block Number is: ${result}`);
//  });

//get latest block --> Prints large data
//web3.eth.getBlock('latest').then(console.log)

// // get latest 10 blocks --> Prints large data
// web3.eth.getBlockNumber().then((latest) => {
//     console.log('Latest 10 blocks')
//   for (let i = 0; i < 10; i++) {
//     web3.eth.getBlock(latest - i).then(console.log)
//   }
// })

// get transaction from specific block
// const hash = '0x978200f782542d3bea128f2f6b1f38aefb26d529cec9b492333da45df6ba0e71'
// web3.eth.getTransactionFromBlock(hash, 2).then(console.log)