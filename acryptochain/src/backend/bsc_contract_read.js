//import web3.js library
const Web3 = require('web3');

// Use Infura as a provider for Web3
const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org"));

// Contract address of the token you want to read
const tokenContractAddress = "0xc7981767f644C7F8e483DAbDc413e8a371b83079"; //LIQUIDUS

// ABI (Application Binary Interface) of the token contract
const tokenABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

// Create a contract object with the ABI and contract address
const tokenContract = new web3.eth.Contract(tokenABI, tokenContractAddress);

// The address you want to read the token balance for
const address = "0xeaed594b5926a7d5fbbc61985390baaf936a6b8d"; //Liquidus Locked Token

// Call the balanceOf function on the contract to get the token balance
tokenContract.methods.balanceOf(address).call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        //console.log(`The balance of address ${address} is ${result} tokens.`);
        // Convert the balance from wei to ether
        const balanceInEther = web3.utils.fromWei(result, 'ether');
        console.log(`Balance of address ${address} is ${balanceInEther} LIQ.`);
    }
});

// Call the name function on the contract to get the token name
tokenContract.methods.name().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Token Name: ${result}`);
    }
});

// Call the symbol function on the contract to get the token symbol
tokenContract.methods.symbol().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Token Symbol ${result}`);
    }
});

// Call the decimals function on the contract to get the token symbol
tokenContract.methods.decimals().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Token Decimals ${result}`);
    }
});

// Call the totalSupply function on the contract to get the total supply of the token
tokenContract.methods.totalSupply().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        const resultInEther = web3.utils.fromWei(result, 'ether');
        console.log(`Total Supply ${resultInEther}`);
    }
});

//Read Contract - The contract method needs to be on the contract
tokenContract.methods.owner().call((error, result) => {
    
    if (error) {
        console.error(error);
    } else {
        console.log(`Contract Owner ${result}.`);
    }

  });

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