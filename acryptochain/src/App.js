/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity of any sort.
 */
import { useState } from 'react';
import * as React from 'react';
import Web3 from 'web3';
import './App.css';

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';

import { BNBPrice, LiquidusPrice, LIQTokenInfo } from './external/TokenUtils';
import { PROJECT_CONTRACT_LIST_ALL_CHAINS} from './projects/liquidus/config/ProjectConfig';

import RewardsDetail from './components/RewardsDetail';
import { selectProject } from './components/ProjectSelection';

const App = () => {
  //User Inputs on UI
  const [walletAddresses, setWalletAddresses] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  
  //API call results
  const [poolHarvestResult, setPoolHarvestResult] = useState([])
  const [balanceOf, setBalanceOf] = useState([]);
  const [balanceCalcuationErrors, setBalanceCalculationErros] = useState([]);
  
  //Data Loaded Flag
  const [loaded, setLoaded] = useState(false);
  
  const handleWalletInputChange = event => {
    setWalletAddresses(event.target.value);
    resetData(setPoolHarvestResult, setBalanceOf, setBalanceCalculationErros);
  };

  const handleProjectChange = event => {
    setSelectedProject(event.target.value);
    resetData(setPoolHarvestResult, setBalanceOf, setBalanceCalculationErros);
  };

  
function resetData(setPoolHarvestResult, setBalanceOf, setBalanceCalculationErros) {
  setPoolHarvestResult(null);
  setBalanceOf(null);
  setBalanceCalculationErros(null);
}


  /** Pool Specific Operations */
  const handleWalletSubmit = async event => {
    event.preventDefault();
    setPoolHarvestResult([])
    setBalanceOf([])
    setBalanceCalculationErros([])

    const separator = /[;,\n\r\t]/;
    
    const walletAddressList = walletAddresses.split(separator);

    /* Wallet Address field can accept multiple addresses, so split it and run the logic for each address*/
    walletAddressList.forEach(address => {
      PROJECT_CONTRACT_LIST_ALL_CHAINS.forEach(chainContracts => {
        
        
        //Loop through the pools on each chain
        chainContracts.contractList.forEach(c => {
          const web3Object = new Web3(new Web3.providers.HttpProvider(chainContracts.provider));
          let web3Contract = new web3Object.eth.Contract(c.abi, c.address);
          getharvestReadyTokens(c, chainContracts.chain, web3Contract, String(address).trim(), setPoolHarvestResult)
        });

      //Find total balance by Chain
      const web3Object = new Web3(new Web3.providers.HttpProvider(chainContracts.provider));
      const tokenContract = new web3Object.eth.Contract(chainContracts.singleTokenAbi, chainContracts.singleTokenAddress);
      console.log("Chain: " + chainContracts.chain + " Address: " +  chainContracts.singleTokenAddress)
      getBalanceOf(chainContracts.chain, tokenContract, address, setBalanceOf, setBalanceCalculationErros)



      });



    });

    setLoaded(true)

  };

  return (
    <Container sx={{ border: 1, my: 10, pb: 10, background: '#FFFFFF' }}>

      <h2>DeFi Tools | <font color="#007600">BNB Price: $<BNBPrice /></font></h2>
      {selectProject(selectedProject, handleProjectChange)}

      {selectedProject === 'liq' &&
        <div><font color="#007600"><h4>LIQ Price: $<LiquidusPrice /></h4>
          <LIQTokenInfo /></font>
        </div>}

      <br />

      {selectedProject &&
        <form onSubmit={handleWalletSubmit}>
          <Input label="Outlined secondary" value={walletAddresses} onChange={handleWalletInputChange} fullWidth={true} placeholder='Enter single or comma separated wallet addresses to find pending rewards' color="secondary"/>
          <p />
          <Button variant="contained" type="submit">Find Pending Reward</Button>
        </form>
      }

      {loaded && poolHarvestResult && RewardsDetail(poolHarvestResult, balanceOf, balanceCalcuationErrors)}

      {/* {JSON.stringify(balanceOf)} */}

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

async function getBalanceOf(chain, contract, walletAddress, setStateFunction, setErrorFunction) {
  try {

    const result = await contract.methods.balanceOf(walletAddress).call()
    console.log("getBalanceOf Result: " + JSON.stringify(result))
    const rewardsEther = Web3.utils.fromWei(result, 'ether');
    const balance = {
      chain: chain,
      wallet: walletAddress,
      balance: rewardsEther
    }
    console.log(balance)
    setStateFunction(prevState => [...prevState, balance]);

  } catch (error) {
    console.log("Error Fetching Balance: " + error)
    setErrorFunction(prevState => [...prevState, {chain:chain, wallet:walletAddress, balance: 'Could not calculate balance. Wallet Excluded from total'}]);
  }

}

export default App;