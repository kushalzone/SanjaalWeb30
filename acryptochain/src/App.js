/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity. 
 */
import { useState } from 'react';
import * as React from 'react';
import Web3 from 'web3';
import './App.css';
import * as providers from './constants/providers'

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getBSCPoolContracts } from './constants/pool_contracts';

const App = () => {
  const [address, setAddress] = useState('0xc7981767f644C7F8e483DAbDc413e8a371b83079');
  const [totalSupply, setTotalSupply] = useState('');
  const [owner, setOwner] = useState('');
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [decimals, setDecimals] = useState('');
  const [loaded, setLoaded] = useState(false);

  const [walletAddress, setWalletAddress] = useState('');

  //BSC Contracts
  const [harvestReadyTokens12m, setharvestReadyTokens12m] = useState('0.0');
  const [harvestReadyTokens6m, setharvestReadyTokens6m] = useState('0.0');
  const [harvestReadyTokens3m, setharvestReadyTokens3m] = useState('0.0');
  const [harvestReadyTokens1m, setharvestReadyTokens1m] = useState('0.0');
  const [harvestReadyTokensLiqBNBBiswap, setHarvestReadyTokensLiqBNBBiswap] = useState('0.0');
  const [harvestReadyTokensLiqBUSDApeswap, setHarvestReadyTokensLiqBUSDApeswap] = useState('0.0');
  const [harvestReadyTokensLiqBNBPancakeswap, setHarvestReadyTokensLiqBNBPancakeswap] = useState('0.0');

  //ETH Contracts

  //Matic Contracts
  

  const handleInputChange = event => {
    setAddress(event.target.value);
  };

  const handleWalletInputChange = event => {
    setWalletAddress(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    // Use Infura as a provider for Web3
    const bscWeb3 = new Web3(new Web3.providers.HttpProvider(providers.BSC_NODE_PROVIDER));
    //const web3 = providers.getBscProvider;
    

    // ABI (Application Binary Interface) of the token contract
    const abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

    // Create a contract object with the ABI and contract address
    const contract = new bscWeb3.eth.Contract(abi, address);

    getTotalSupply(contract, bscWeb3, setTotalSupply);
    getOwner(contract, setOwner);
    getName(contract, setName)
    getSymbol(contract, setSymbol)
    getDecimals(contract, setDecimals)

    setLoaded(true)

  };
 
  const handleWalletSubmit = async event => {
    event.preventDefault();

     //const web3 = providers.getBscProvider;
   
    // Use Infura as a provider for Web3
    const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org"));

    // ABI (Application Binary Interface) of the token contract
    const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenRecovered","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AdminTokenRecovery","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"NewRewardPerBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"}],"name":"NewStartAndEndBlocks","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"RewardsStop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"PRECISION_FACTOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"accTokenPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lastRewardBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"recoverWrongTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardTokenSupplyRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedTokenSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"updateRewardPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"name":"updateStartAndEndBlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"priodInSecond","type":"uint256"}],"name":"updateVestingTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"lastDepositedAt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vestingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
    const { contract12m, contract6m, contract3m, contract1m, liqBNBBiswap, liqBUSDApeswap, liqBNBPancakeswap } = getBSCPoolContracts();
    
    // Create a contract object with the ABI and contract address
    let contract = new web3.eth.Contract(abi, contract12m);
    getharvestReadyTokens(contract, walletAddress, setharvestReadyTokens12m)

    contract = new web3.eth.Contract(abi, contract6m);
    getharvestReadyTokens(contract, walletAddress, setharvestReadyTokens6m)

    contract = new web3.eth.Contract(abi, contract3m);
    getharvestReadyTokens(contract, walletAddress, setharvestReadyTokens3m)

    contract = new web3.eth.Contract(abi, contract1m);
    getharvestReadyTokens(contract, walletAddress, setharvestReadyTokens1m)

    contract = new web3.eth.Contract(abi, liqBNBBiswap);
    getharvestReadyTokens(contract, walletAddress, setHarvestReadyTokensLiqBNBBiswap)

    contract = new web3.eth.Contract(abi, liqBUSDApeswap);
    getharvestReadyTokens(contract, walletAddress, setHarvestReadyTokensLiqBUSDApeswap)

    contract = new web3.eth.Contract(abi, liqBNBPancakeswap);
    getharvestReadyTokens(contract, walletAddress, setHarvestReadyTokensLiqBNBPancakeswap)



    setLoaded(true)

  };

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Token Info Fetcher</h1>
          <label>
            <p >Enter token contract address:</p>
            <Input value={address} onChange={handleInputChange} fullWidth={true} />
          </label>
          <p/>
          <Button variant="contained" type="submit">Find Info</Button>
        </form>
        <br/>
      </div>

{loaded &&
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450, tableLayout: "auto", background:"white"}}aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>Item</b></TableCell>
              <TableCell align="right"><b>Value</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
          <TableRow>
              <TableCell align="left">{'Token Address'}</TableCell>
              <TableCell align="right">{address}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left">{'Name'}</TableCell>
              <TableCell align="right">{name}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left">{'Symbol'}</TableCell>
              <TableCell align="right">{symbol}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left">{'Total Supply'}</TableCell>
              <TableCell align="right">{totalSupply}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left">{'Decimals'}</TableCell>
              <TableCell align="right">{decimals}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left">{'Owner'}</TableCell>
              <TableCell align="right">{owner}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    }


  <div>
        <form onSubmit={handleWalletSubmit}>
          <h1>Liquidus Farming</h1>
          <label>
            <p >Enter wallet address:</p>
            <Input value={walletAddress} onChange={handleWalletInputChange} fullWidth={true} />
          </label>
          <p/>
          <Button variant="contained" type="submit">Find Pending Reward</Button>
        </form>
        <br/>
      </div>

      <h4>Harvest Ready Tokens - Pending Rewards:</h4>
      <p>12 months pool -  {harvestReadyTokens12m}</p>
      <p>6 months pool -  {harvestReadyTokens6m}</p>
      <p>3 months pool -  {harvestReadyTokens3m}</p>
      <p>1 months pool -  {harvestReadyTokens1m}</p>
      <p>LIQ-BNB Biswap - {harvestReadyTokensLiqBNBBiswap}</p>
      <p>LIQ-BUSD Apeswap - {harvestReadyTokensLiqBUSDApeswap}</p>
      <p>LIQ-BNB Pancakeswap - {harvestReadyTokensLiqBNBPancakeswap}</p>
      
      <p>================</p>
      <p>TOTAL HARVEST READY  - <b>{
                Number(harvestReadyTokens12m) 
              + Number(harvestReadyTokens6m)
              + Number(harvestReadyTokens3m)
              + Number(harvestReadyTokens1m)
              + Number(harvestReadyTokensLiqBNBBiswap)
              + Number(harvestReadyTokensLiqBUSDApeswap)
              + Number(harvestReadyTokensLiqBNBPancakeswap)
              
      }
      </b>
      </p>
    </Container>
  
  );
};


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

export default App;