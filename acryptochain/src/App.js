/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity. 
 */
import { useState} from 'react';
import * as React from 'react';
import Web3 from 'web3';
import './App.css';
import * as providers from './constants/NetworkProviders'

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';

import { BNBPrice, LiquidusPrice, LIQTokenInfo } from './external/TokenUtils';
import { tokenInfoTable } from './components/TokenInfo';
import { BSC_CONTRACT_LIST, LIQ_TOKEN_CONTRACT } from './constants/liq_app_constants';
import RewardsDetail from './components/RewardsDetail';

const App = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [loaded, setLoaded] = useState(false);
  
  //BSC Contracts
  const [balanceOf, setBalanceOf] = useState('0.0');
  const [poolHarvestResult, setPoolHarvestResult] = useState([])

  const handleWalletInputChange = event => {
    setWalletAddress(event.target.value);
    //setPoolHarvestResult([])
  };

  /** Pool Specific Operations */
  const handleWalletSubmit = async event => {
    setPoolHarvestResult(null)
    event.preventDefault();
    setPoolHarvestResult([{}])
    const web3Object = new Web3(new Web3.providers.HttpProvider(providers.BSC_NODE_PROVIDER));
    BSC_CONTRACT_LIST.forEach(c => {
        let web3Contract = new web3Object.eth.Contract(c.abi, c.address);
        getharvestReadyTokensV2(c.contractUniqueName, "BSC", web3Contract, walletAddress, setPoolHarvestResult)
      }
    );

    /** WAllet specific operations */
    const tokenContract = new web3Object.eth.Contract(LIQ_TOKEN_CONTRACT.abi, LIQ_TOKEN_CONTRACT.address);
    getBalanceOf(tokenContract, walletAddress, setBalanceOf)
    setLoaded(true)

  };

  return (
    <Container>

      <div>
        <form onSubmit={handleWalletSubmit}>
          <h1>Liquidus Farming</h1>
          <h4><font color="#007600">BNB Price: $<BNBPrice /> | LIQ Price: $<LiquidusPrice /></font></h4>
          <h4>Token Info: <LIQTokenInfo/></h4>

          <label>
            <h4>Enter wallet address:</h4>
            <Input value={walletAddress} onChange={handleWalletInputChange} fullWidth={true} />
          </label>
          <p />
          <Button variant="contained" type="submit">Find Pending Reward</Button>
        </form>
      </div>

      {loaded && poolHarvestResult && <h4>REWARDS DETAILS : BSC POOL</h4>}
      {balanceOf && <h4><font color="#007600">Wallet Balance: {balanceOf}</font></h4>}
      {loaded && poolHarvestResult && RewardsDetail(poolHarvestResult)}
    </Container>

  );
};

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


export default App;