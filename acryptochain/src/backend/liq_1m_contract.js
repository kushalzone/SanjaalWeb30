//import web3.js library
const Web3 = require('web3');

// ABI (Application Binary Interface) of the token contract
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenRecovered","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AdminTokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"NewRewardPerBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"}],"name":"NewStartAndEndBlocks","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"RewardsStop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"PRECISION_FACTOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"accTokenPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastRewardBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"recoverWrongTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardTokenSupplyRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedTokenSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"updateRewardPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"name":"updateStartAndEndBlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"priodInSecond","type":"uint256"}],"name":"updateVestingTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"lastDepositedAt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vestingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

// Use Infura as a provider for Web3
const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org"));

// Contract address of the token you want to read
const contractAddress = "0xbeBCd3aD501Fc425a71CDC7593CEDeA324176E92"; //LIQUIDUS 1m contract

// Create a contract object with the ABI and contract address
const contract = new web3.eth.Contract(abi, contractAddress);

// The address you want to read the token balance for
const address = "0x00DAd5C024ccF728B0e089FFaF580020C0667760"; //some random wallet

/**
 * Available methods
 * PRECISION_FACTOR √
 * accTokenPerShare √
 * bonusEndBlock √
 * lastRewardBlock √
 * owner √
 * pendingReward
 * rewardPerBlock √
 * rewardTokenSupplyRemaining √
 * stakedToken
 * stakedTokenSupply
 * startBlock
 * userInfo
 * vestingTime
 */
//CONTRACT METHOD CALLS
contract.methods.PRECISION_FACTOR().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`PRECISION FACTOR: ${result}`);
    }
});

contract.methods.accTokenPerShare().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`accTokenPerShare: ${result}`);
    }
});

contract.methods.owner().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`owner: ${result}`);
    }
});



contract.methods.lastRewardBlock().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`lastRewardBlock: ${result}`);
    }
});



contract.methods.bonusEndBlock().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`bonusEndBlock: ${result}`);
    }
});


contract.methods.rewardPerBlock().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        const resultEther = web3.utils.fromWei(result, 'ether');
        console.log(`rewardPerBlock: ${resultEther}`);
    }
});

contract.methods.rewardTokenSupplyRemaining().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        const resultEther = web3.utils.fromWei(result, 'ether');
        console.log(`rewardTokenSupplyRemaining: ${resultEther}`);
    }
});


contract.methods.stakedToken().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`stakedToken: ${result}`);
    }
});


contract.methods.stakedTokenSupply().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        const resultEther = web3.utils.fromWei(result, 'ether');
        console.log(`stakedTokenSupply: ${resultEther}`);
    }
});

contract.methods.startBlock().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`startBlock: ${result}`);
    }
});

contract.methods.vestingTime().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        //Vesting time is returned in seconds, convert that to days.
        var days = result/(60*60*24)
        console.log(`vestingTime (Days): ${days}`);
    }
});

//WALLET SPECIFIC CALLS:
//Call the balanceOf function on the contract to get the token balance
contract.methods.userInfo(address).call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`\n=====Start of User wallet info===`);
        console.log(`UserInfo >> Wallet: ` + address);

        const rewardsEther = web3.utils.fromWei(result.rewardDebt, 'ether');
        console.log(`UserInfo >> Earned Reward (Harvestable): ` + rewardsEther/1000);
        
        const dateVal = new Date(Number(result.lastDepositedAt)*1000).toLocaleDateString('en-US');
        console.log(`UserInfo >> LastDeposited At: ` + dateVal);
        console.log(`=====End of User wallet info===\n`);

    }
});