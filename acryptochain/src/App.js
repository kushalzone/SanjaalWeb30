/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity of any sort.
 */
import { useState, useEffect } from 'react';
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2'

import Web3 from 'web3';
import './App.css';

import Container from '@mui/material/Container';

import { LIQTokenInfo, ONITokenInfo } from './external/TokenUtils';
import { PROJECT_CONFIGS } from './projects/Projects';

import RewardsDetail from './components/RewardsDetail';
import { selectProject } from './components/ProjectSelectionForm';
import { WalletEntryForm } from './components/WalletEntryForm';
import { BNBPrice, getTokenPriceBSC } from './external/TokenPrice';
import Footer from './components/Footer';
import { Button } from '@mui/material';

const App = () => {
  /** User Inputs on UI **/
  const [walletAddresses, setWalletAddresses] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  /** Project Config to Use. This is the main configuration for the page */
  const [projectConfig, setProjectConfig] = useState([])

  /** API call results **/
  const [poolHarvestResult, setPoolHarvestResult] = useState([])
  const [balanceOf, setBalanceOf] = useState([]);
  const [balanceCalcuationErrors, setBalanceCalculationErros] = useState([]);
  const [tokenPrice, setTokenPrice] = useState(0.0);

  /** Flag to indicate if data has been loaded. **/
  const [loaded, setLoaded] = useState(false);

  const separator = /[;,\n\r\t]/;

  const handleWalletInputChange = event => {
    setWalletAddresses(event.target.value);
    resetData(setPoolHarvestResult, setBalanceOf, setBalanceCalculationErros);
  };

  const handleProjectChange = event => {
    setSelectedProject(event.target.value);

    let projectConfig = findConfigByProject(event.target.value)
    if (projectConfig) {
      setProjectConfig(projectConfig)
      localStorage.setItem('projectConfig', JSON.stringify(projectConfig))
    }
    //remember selected project
    localStorage.setItem('selectedProject', event.target.value);
    resetData();
  };

  function resetData() {
    setLoaded(false)
    setPoolHarvestResult([]);
    setBalanceOf([]);
    setBalanceCalculationErros([]);
  }

  function resetFormData() {
    setSelectedProject([])
    setWalletAddresses([])
    resetData()
  }

  const clearLocalStorage = event => {
    localStorage.clear();
    resetFormData();
  }

  /** Use locally stored wallet addresses and project names if cached earlier **/
  useEffect(() => {
    const storedWalletAddress = localStorage.getItem('storedWalletAddress');
    if (storedWalletAddress) {
      setWalletAddresses(storedWalletAddress);
    }

    const selectedProject = localStorage.getItem('selectedProject');
    if (selectedProject) {
      setSelectedProject(selectedProject);
    }

    const projectConfig = JSON.parse(localStorage.getItem('projectConfig'))
    if (projectConfig) {
      setProjectConfig(projectConfig)
    }

  }, []);


  /** Pool Specific Operations */
  const handleWalletSubmit = async event => {
    event.preventDefault();

    //store wallet address to local storage for reuse
    localStorage.setItem('storedWalletAddress', walletAddresses);

    resetData()

    const walletAddressList = walletAddresses.split(separator);

    if (projectConfig) {
      var tokenPrice = await getTokenPriceBSC(projectConfig.tokenBNBContract);
      //console.log("Token Price: " + tokenPrice)
      setTokenPrice(tokenPrice);
    }
    
    /* Wallet Address field can accept multiple addresses, so split it and run the logic for each address*/
    projectConfig && projectConfig.contracts && walletAddressList.forEach(address => {
      projectConfig.contracts.forEach(chainContracts => {

        //Loop through the pools on each chain
        chainContracts.contractList.forEach(c => {
          const web3Object = new Web3(new Web3.providers.HttpProvider(chainContracts.provider));
          let web3Contract = new web3Object.eth.Contract(c.abi, c.address);
          getharvestReadyTokens(c, chainContracts.chain, web3Contract, String(address).trim(), setPoolHarvestResult)
        });

        //Find total balance by Chain
        const web3Object = new Web3(new Web3.providers.HttpProvider(chainContracts.provider));
        const tokenContract = new web3Object.eth.Contract(chainContracts.singleTokenAbi, chainContracts.singleTokenAddress);
        //console.log("Chain: " + chainContracts.chain + " Address: " + chainContracts.singleTokenAddress)
        getBalanceOf(chainContracts.chain, tokenContract, address, setBalanceOf, setBalanceCalculationErros)

      });
    });
    setLoaded(true)
  };

  return (
    <Container sx={{ border: 1, my: 10, pb: 10 }} className='outerContainer'>
      <h4><font color="red">&hearts;&hearts;</font> Sanjaal Corps - Web3 Tool | BNB Price:  <font color="#007600">$<BNBPrice /></font></h4>
      <Grid spacing={2} className='outerContainer'>
        <Grid>
          {selectProject(selectedProject, handleProjectChange)}
        </Grid>
      </Grid>
      {selectedProject && WalletEntryForm(handleWalletSubmit, walletAddresses, handleWalletInputChange)}
      <Button onClick={clearLocalStorage} variant='outlined' color="error" sx={{ marginBottom: '1em' }}>Clear Form Data</Button>
      {loaded && poolHarvestResult && RewardsDetail(poolHarvestResult, balanceOf, balanceCalcuationErrors, tokenPrice, walletAddresses.split(separator), selectedProject)}
      {selectedProject === 'LIQ' && <LIQTokenInfo />}
      {selectedProject === 'ONI' && <ONITokenInfo />}

      <Footer />
    </Container>

  );
};

function findConfigByProject(project) {
  if (project) {
    let configs = PROJECT_CONFIGS.filter(config => config.name.includes(project))

    //Should always match one
    if (configs) {return configs[0]}} else {return []}
}

async function getharvestReadyTokens(contractObj, chain, contract, walletAddress, setStateFunction) {
  try {
    const pendingReward = await contract.methods.pendingReward(walletAddress).call();
    const userInfo = await contract.methods.userInfo(walletAddress).call();

    const pendingRewardEther = Web3.utils.fromWei(pendingReward, 'ether');
    // const rewardDebtEther = Web3.utils.fromWei(userInfo.rewardDebt, 'ether');
    const rewardDebtEther = userInfo.rewardDebt / 1e18
    const amountEther = Web3.utils.fromWei(userInfo.amount, 'ether');
    const datlastDepositedDate = new Date(Number(userInfo.lastDepositedAt) * 1000).toISOString('en-US');

    const poolHarvestResult = {
      chain: chain,
      walletAddress: walletAddress,
      poolName: contractObj.contractUniqueName,
      harvestReadyTokens: pendingRewardEther,
      userInfo: { amount: amountEther, rewardDebt: rewardDebtEther, lastDepositedAt: datlastDepositedDate },
      contractLink: contractObj.contractLink,
      addressExplorer: contractObj.addressExplorer,
      type: contractObj.type,
      vestingPeriodInMonths: contractObj.vestingPeriodInMonths,
    };
    setStateFunction(prevState => [...prevState, poolHarvestResult]);
  } catch (error) {
    console.error(error);
  }
}

async function getBalanceOf(chain, contract, walletAddress, setStateFunction, setErrorFunction) {
  try {

    const result = await contract.methods.balanceOf(walletAddress).call()
    const rewardsEther = Web3.utils.fromWei(result, 'ether');
    const balance = {
      chain: chain,
      wallet: walletAddress,
      balance: rewardsEther
    }
    //console.log(balance)
    setStateFunction(prevState => [...prevState, balance]);

  } catch (error) {
    console.log("Error Fetching Balance: " + error)
    setErrorFunction(prevState => [...prevState, { chain: chain, wallet: walletAddress, balance: 'Error calculating balance on this chain' }]);
  }

}

export default App;