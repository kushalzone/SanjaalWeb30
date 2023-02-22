/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity. 
 */
import { useState, useEffect } from 'react';
import * as React from 'react';
import Web3 from 'web3';
import './App.css';
import * as providers from './constants/NetworkProviders'

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';

import { getBSCPoolContracts } from './constants/pool_contracts';
import SinglePool from './components/SinglePool';
import { BNBPrice, LiquidusPrice } from './external/priceUtil';
import { tokenInfoTable } from './components/TokenInfo';
import { BSC_CONTRACT_LIST, LIQ_TOKEN_CONTRACT } from './constants/liq_app_constants';
import RewardsDetail from './components/RewardsDetail';

const App = () => {
  const [tokenAddress, setTokenAddress] = useState('0xc7981767f644C7F8e483DAbDc413e8a371b83079');
  const [walletAddress, setWalletAddress] = useState('');
  const [totalSupply, setTotalSupply] = useState('');
  const [owner, setOwner] = useState('');
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [decimals, setDecimals] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [tokenInfoLoaded, setTokenInfoLoaded] = useState(false);

  //BSC Contracts
  const [harvestReadyTokens12m, setharvestReadyTokens12m] = useState('0.0');
  const [harvestReadyTokens6m, setharvestReadyTokens6m] = useState('0.0');
  const [harvestReadyTokens3m, setharvestReadyTokens3m] = useState('0.0');
  const [harvestReadyTokens1m, setharvestReadyTokens1m] = useState('0.0');
  const [harvestReadyTokensLiqBNBBiswap1m, setHarvestReadyTokensLiqBNBBiswap1m] = useState('0.0');
  const [harvestReadyTokensLiqBNBBiswap3m, setHarvestReadyTokensLiqBNBBiswap3m] = useState('0.0');
  const [harvestReadyTokensLiqBUSDApeswap, setHarvestReadyTokensLiqBUSDApeswap] = useState('0.0');
  const [harvestReadyTokensLiqBNBPancakeswap, setHarvestReadyTokensLiqBNBPancakeswap] = useState('0.0');
  const [userInfo, setUserInfo] = useState('');
  const [balanceOf, setBalanceOf] = useState('0.0');
  const [poolHarvestResult, setPoolHarvestResult] = useState([])

  //ETH Contracts

  //Matic Contracts

  //Token Info

  //Price

  const handleInputChange = event => {
    setTokenAddress(event.target.value);
  };

  const handleWalletInputChange = event => {
    setWalletAddress(event.target.value);
    //setPoolHarvestResult([])
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const bscWeb3 = new Web3(new Web3.providers.HttpProvider(providers.BSC_NODE_PROVIDER));
    const contract = new bscWeb3.eth.Contract(LIQ_TOKEN_CONTRACT.abi, LIQ_TOKEN_CONTRACT.address);
    getTotalSupply(contract, bscWeb3, setTotalSupply);
    getOwner(contract, setOwner);
    getName(contract, setName);
    getSymbol(contract, setSymbol);
    getDecimals(contract, setDecimals);
    setTokenInfoLoaded(true);
  };

  const handleWalletSubmit = async event => {
    setPoolHarvestResult(null)
    event.preventDefault();

    setPoolHarvestResult([{}])

    const web3 = new Web3(new Web3.providers.HttpProvider(providers.BSC_NODE_PROVIDER));

    // // ABI (Application Binary Interface) of the token contract (Farm Pools)
    // const abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "tokenRecovered", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "AdminTokenRecovery", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "EmergencyWithdraw", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "rewardPerBlock", "type": "uint256" }], "name": "NewRewardPerBlock", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "startBlock", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "endBlock", "type": "uint256" }], "name": "NewStartAndEndBlocks", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "name": "RewardsStop", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [], "name": "PRECISION_FACTOR", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "accTokenPerShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "bonusEndBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "depositReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "emergencyRewardWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "emergencyWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "harvest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "lastRewardBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "_tokenAmount", "type": "uint256" }], "name": "recoverWrongTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardPerBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardTokenSupplyRemaining", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stakedToken", "outputs": [{ "internalType": "contract IBEP20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stakedTokenSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "startBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stopReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_rewardPerBlock", "type": "uint256" }], "name": "updateRewardPerBlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_startBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_bonusEndBlock", "type": "uint256" }], "name": "updateStartAndEndBlocks", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "priodInSecond", "type": "uint256" }], "name": "updateVestingTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }, { "internalType": "uint256", "name": "lastDepositedAt", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "vestingTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
    // const {
    //   address_contract12m,
    //   address_contract6m,
    //   address_contract3m,
    //   address_contract1m,
    //   address_liqBNBBiswap1m,
    //   address_liqBNBBiswap3m,
    //   address_liqBUSDApeswap,
    //   address_liqBNBPancakeswap
    // } = getBSCPoolContracts();

    // // Create a contract object with the ABI and contract address
    // let contract = new web3.eth.Contract(abi, address_contract12m);
    // getharvestReadyTokens(contract, walletAddress, setharvestReadyTokens12m)
    // getUserInfo(contract, walletAddress, setUserInfo) //TODO: Do this for all pools


    // let contract1 = new web3.eth.Contract(abi, address_contract6m);
    // getharvestReadyTokens(contract1, walletAddress, setharvestReadyTokens6m)


    // let contract2 = new web3.eth.Contract(abi, address_contract3m);
    // getharvestReadyTokens(contract2, walletAddress, setharvestReadyTokens3m)



    // let contract3 = new web3.eth.Contract(abi, address_contract1m);
    // getharvestReadyTokens(contract3, walletAddress, setharvestReadyTokens1m)

    // let contract4 = new web3.eth.Contract(abi, address_liqBNBBiswap1m);
    // getharvestReadyTokens(contract4, walletAddress, setHarvestReadyTokensLiqBNBBiswap1m)

    // let contract5 = new web3.eth.Contract(abi, address_liqBNBBiswap3m);
    // getharvestReadyTokens(contract5, walletAddress, setHarvestReadyTokensLiqBNBBiswap3m)

    // let contract6 = new web3.eth.Contract(abi, address_liqBUSDApeswap);
    // getharvestReadyTokens(contract6, walletAddress, setHarvestReadyTokensLiqBUSDApeswap)

    // let contract7 = new web3.eth.Contract(abi, address_liqBNBPancakeswap);
    // getharvestReadyTokens(contract7, walletAddress, setHarvestReadyTokensLiqBNBPancakeswap)

    BSC_CONTRACT_LIST.forEach(c => {
        let web3Contract = new web3.eth.Contract(c.abi, c.address);
        getharvestReadyTokensV2(c.contractUniqueName, "BSC", web3Contract, walletAddress, setPoolHarvestResult)
      }
    );

    /**
     * WAllet specific operations
     */
    const tokenContract = new web3.eth.Contract(LIQ_TOKEN_CONTRACT.abi, LIQ_TOKEN_CONTRACT.address);
    getBalanceOf(tokenContract, walletAddress, setBalanceOf)

    setLoaded(true)

  };

  return (
    <Container>

      <div>
        <form onSubmit={handleWalletSubmit}>
          <h1>Liquidus Farming</h1>
          <h4><font color="#007600">BNB Price: $<BNBPrice /> | LIQ Price: $<LiquidusPrice /></font></h4>

          <label>
            <h4>Enter wallet address:</h4>
            <Input value={walletAddress} onChange={handleWalletInputChange} fullWidth={true} />
          </label>
          <p />
          <Button variant="contained" type="submit">Find Pending Reward</Button>
        </form>
      </div>

      <h4>REWARDS DETAILS : BSC POOL</h4>
      {poolHarvestResult && RewardsDetail(poolHarvestResult)}

      <div>
        <form onSubmit={handleSubmit}>
          <h1>Token Info Fetcher</h1>
          <label>
            <p >Enter token contract address:</p>
            <Input value={tokenAddress} onChange={handleInputChange} fullWidth={true} />
          </label>
          <p />
          <Button variant="contained" type="submit">Find Info</Button>
        </form>
        <br />
      </div>

      {tokenInfoLoaded && tokenInfoTable(tokenAddress, name, symbol, totalSupply, decimals, owner)}
    </Container>

  );
};


// function loadWalletDetail(handleWalletSubmit, walletAddress, handleWalletInputChange, balanceOf, harvestReadyTokens12m, userInfo,
//   harvestReadyTokens6m, harvestReadyTokens3m, harvestReadyTokens1m, harvestReadyTokensLiqBNBBiswap1m, harvestReadyTokensLiqBNBBiswap3m, harvestReadyTokensLiqBUSDApeswap, harvestReadyTokensLiqBNBPancakeswap) {
//   return <div>
//     <h4><font color="green"> Wallet Balance - {balanceOf} LIQ</font></h4>
//     <h4>Harvest Ready Tokens - Pending Rewards:</h4>
//     <div>
//       <ol>
//         <SinglePool label={'12 months pool'} name={harvestReadyTokens12m} userInfo={userInfo} />
//         <SinglePool label={'6 months pool'} name={harvestReadyTokens6m} />
//         <SinglePool label={'3 months pool'} name={harvestReadyTokens3m} />
//         <SinglePool label={'1 month pool'} name={harvestReadyTokens1m} />
//         <SinglePool label={'LIQ-BNB Biswap 1m'} name={harvestReadyTokensLiqBNBBiswap1m} />
//         <SinglePool label={'LIQ-BNB Biswap 3m'} name={harvestReadyTokensLiqBNBBiswap3m} />
//         <SinglePool label={'LIQ-BUSD Apeswap'} name={harvestReadyTokensLiqBUSDApeswap} />
//         <SinglePool label={'LIQ-BNB Pancakeswap'} name={harvestReadyTokensLiqBNBPancakeswap} />
//       </ol>
//     </div>
//     <p>=======================</p>
//     <p>TOTAL HARVEST READY  - <b>{
//       Number(harvestReadyTokens12m)
//       + Number(harvestReadyTokens6m)
//       + Number(harvestReadyTokens3m)
//       + Number(harvestReadyTokens1m)
//       + Number(harvestReadyTokensLiqBNBBiswap1m)
//       + Number(harvestReadyTokensLiqBNBBiswap3m)
//       + Number(harvestReadyTokensLiqBUSDApeswap)
//       + Number(harvestReadyTokensLiqBNBPancakeswap)
//     }
//     </b>
//     </p>

//   </div>;
// }

function getName(contract, setName) {
  contract.methods.name().call((error, result) => {
    if (error) {
      console.error(error);
    } else {
      setName(result);
    }
  });
}

function getSymbol(contract, setSymbol) {
  contract.methods.symbol().call((error, result) => {
    if (error) {
      console.error(error);
    } else {
      setSymbol(result);
    }
  });
}

function getTotalSupply(contract, web3, setContractResponse) {
  contract.methods.totalSupply().call((error, result) => {
    if (error) {
      console.error(error);
    } else {
      const resultInEther = web3.utils.fromWei(result, 'ether');
      setContractResponse(resultInEther);
    }
  });
}


function getDecimals(contract, setDecimals) {
  contract.methods.decimals().call((error, result) => {
    if (error) {
      console.error(error);
    } else {
      setDecimals(result);
    }
  });
}


function getOwner(contract, setOwner) {
  contract.methods.owner().call((error, result) => {
    if (error) {
      console.error(error);
    } else {
      setOwner(result);
    }

  });
}

//Wallet Specific Functions
function getharvestReadyTokens(contract, walletAddress, setFunction) {
  contract.methods.pendingReward(walletAddress).call((error, result) => {
    if (error) {
      console.error(error);
    } else {
      const rewardsEther = Web3.utils.fromWei(result, 'ether');
      setFunction(parseFloat(rewardsEther).toFixed(2)); //2 Decimal Places
    }

  });
}

async function getharvestReadyTokensV2(poolName, chain, contract, walletAddress, setFunction) {
  try {
    const result = await contract.methods.pendingReward(walletAddress).call();
    var harvestReadyTokens = Web3.utils.fromWei(result, 'ether');

    const userInfo = await contract.methods.userInfo(walletAddress).call();
    const rewardDebtEther = Web3.utils.fromWei(userInfo.rewardDebt, 'ether');
    const amountEther = Web3.utils.fromWei(userInfo.amount, 'ether');
    const datlastDepositedAt = new Date(Number(userInfo.lastDepositedAt) * 1000).toLocaleDateString('en-US');
    
    const poolHarvestResult = {
      chain: chain,
      walletAddress: walletAddress,
      poolName: poolName,
      harvestReadyTokens: harvestReadyTokens,
      userInfo: { amount: amountEther, rewardDebt: rewardDebtEther, lastDepositedAt: datlastDepositedAt }
    };
    setFunction(prevState => [...prevState, poolHarvestResult]);
  } catch (error) {
    console.error(error);
  }
}

function getBalanceOf(contract, walletAddress, setFunction) {
  contract.methods.balanceOf(walletAddress).call((error, result) => {
    if (error) {
      console.error(error);
    } else {
      const rewardsEther = Web3.utils.fromWei(result, 'ether');
      setFunction(parseFloat(rewardsEther).toFixed(2)); //2 Decimal Places
    }

  });
}

function getUserInfo(contract, walletAddress, setFunction) {

  contract.methods.userInfo(walletAddress).call((error, result) => {
    if (error) {
      console.error(error);
    } else {

      const rewardsEther = Web3.utils.fromWei(result.rewardDebt, 'ether');
      const depositedAmountEther = Web3.utils.fromWei(result.amount, 'ether');

      const dateVal = new Date(Number(result.lastDepositedAt) * 1000).toLocaleDateString('en-US');
      setFunction("Deposited Amount: " + Number(depositedAmountEther).toFixed(2) + "Reward Debt: " + Number(rewardsEther).toFixed(2) + "Last Deposited:" + dateVal)

    }
  });

}

export default App;