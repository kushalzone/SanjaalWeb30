const Web3 = require("web3")

const web3 = new Web3("https://cloudflare-eth.com")

const walletAddress = '<YOUR WALLET HERE>'

web3.eth.getBalance(walletAddress).then(res => console.log("Available balance: " + res + " Wei " + web3.utils.fromWei(res) +" Ether" ));
console.log("Latest Block Number");
web3.eth.getBlockNumber().then(console.log)