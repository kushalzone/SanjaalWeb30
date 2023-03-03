/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity. 
 */
import { useState } from 'react';
import * as React from 'react';
import Web3 from 'web3';
import './App.css';
import * as providers from './constants/NetworkProviders'

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';

import { BNBPrice, LiquidusPrice, LIQTokenInfo } from './external/TokenUtils';
import {
 LIQ_CONTRACT_LIST_ALL, BSC_LIQ_SINGLE_TOKEN_CONTRACT, 
} from './constants/liq_app_constants';

import RewardsDetail from './components/RewardsDetail';
import { selectProject } from './components/ProjectSelection';

const App = () => {
  const [walletAddresses, setWalletAddresses] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');

  //BSC Contracts
  const [poolHarvestResult, setPoolHarvestResult] = useState([])
  const [balanceOf, setBalanceOf] = useState([]);

  const handleWalletInputChange = event => {
    setWalletAddresses(event.target.value);
    setPoolHarvestResult(null)
    setBalanceOf(null)
  };

  const handleProjectChange = event => {
    setSelectedProject(event.target.value);
    setPoolHarvestResult(null)
    setBalanceOf(null)
  };

  /** Pool Specific Operations */
  const handleWalletSubmit = async event => {
    event.preventDefault();
    setPoolHarvestResult([])
    setBalanceOf([])

    const separator = /[;,]/;
    const walletAddressList = walletAddresses.split(separator);

    /* Wallet Address field can accept multiple addresses, so split it and runt he logic for each address*/
    walletAddressList.forEach(address => {
      LIQ_CONTRACT_LIST_ALL.forEach(contract => {
        contract.forEach(c => {
          console.log("Contract: "  + c.provider)
          const web3Object = new Web3(new Web3.providers.HttpProvider(c.provider));
          let web3Contract = new web3Object.eth.Contract(c.abi, c.address);
          getharvestReadyTokens(c, c.chain, web3Contract, address, setPoolHarvestResult)
        }
        );

      }
      );
      

      //TODO: Chain Specific
      const web3Object = new Web3(new Web3.providers.HttpProvider(providers.BSC_NODE_PROVIDER));
          /** WAllet specific operations: DO THIS IN A LOOP */
      const tokenContract = new web3Object.eth.Contract(BSC_LIQ_SINGLE_TOKEN_CONTRACT.abi, BSC_LIQ_SINGLE_TOKEN_CONTRACT.address);
      getBalanceOf(tokenContract, address, setBalanceOf)

    });

    setLoaded(true)

  };

  return (
    <Container sx={{ border: 1, my:10, pb: 10, background:'#FFFFFF' }}>

      <h2>DeFi Tools | <font color="#007600">BNB Price: $<BNBPrice /></font></h2>
      {selectProject(selectedProject, handleProjectChange)}

      {selectedProject === 'liq' &&
        <div><font color="#007600"><h4>LIQ Price: $<LiquidusPrice /></h4>
          <LIQTokenInfo /></font>
        </div>}

      <br />
      
      <form onSubmit={handleWalletSubmit}>
        <Input value={walletAddresses} onChange={handleWalletInputChange} fullWidth={true} placeholder='Enter single or comma separated wallet addresses' />
        <p />
        <Button variant="contained" type="submit">Find Pending Reward</Button>
      </form>

      {loaded && poolHarvestResult && RewardsDetail(poolHarvestResult, balanceOf)}

    </Container>

  );
};

async function getharvestReadyTokens(contractObj, chain, contract, walletAddress, setStateFunction) {
  try {
    const pendingReward = await contract.methods.pendingReward(walletAddress).call();
    const userInfo = await contract.methods.userInfo(walletAddress).call();

    const pendingRewardEther = Web3.utils.fromWei(pendingReward, 'ether');
    const rewardDebtEther = Web3.utils.fromWei(userInfo.rewardDebt, 'ether');
    const amountEther = Web3.utils.fromWei(userInfo.amount, 'ether');
    const datlastDepositedDate = new Date(Number(userInfo.lastDepositedAt) * 1000).toLocaleDateString('en-US');

    const poolHarvestResult = {
      chain: chain,
      walletAddress: walletAddress,
      poolName: contractObj.contractUniqueName,
      harvestReadyTokens: pendingRewardEther,
      userInfo: { amount: amountEther, rewardDebt: rewardDebtEther, lastDepositedAt: datlastDepositedDate },
      contractLink: contractObj.contractLink,
      addressExplorer: contractObj.addressExplorer
    };
    setStateFunction(prevState => [...prevState, poolHarvestResult]);
  } catch (error) {
    console.error(error);
  }
}

async function getBalanceOf(contract, walletAddress, setStateFunction) {
  try {
    const result = await contract.methods.balanceOf(walletAddress).call()
    const rewardsEther = Web3.utils.fromWei(result, 'ether');

    const balance = {
      wallet: walletAddress,
      balance: rewardsEther
    }
    console.log(balance)
    setStateFunction(prevState => [...prevState, balance]);

  } catch (error) {
    console.error(error)
  }

}

export default App;