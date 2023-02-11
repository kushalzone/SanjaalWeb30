import React, { useState } from 'react';
import Web3 from 'web3';
import './App.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const App = () => {
  const [address, setAddress] = useState('0xc7981767f644C7F8e483DAbDc413e8a371b83079');
  const [totalSupply, setTotalSupply] = useState(null);
  const [owner, setOwner] = useState(null);
  const [name, setName] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [decimals, setDecimals] = useState(null);


  const handleInputChange = event => {
    setAddress(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    // Use Infura as a provider for Web3
    const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org"));

    // ABI (Application Binary Interface) of the token contract
    const abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

    // Create a contract object with the ABI and contract address
    const contract = new web3.eth.Contract(abi, address);

    getTotalSupply(contract, web3, setTotalSupply);
    getOwner(contract, setOwner);
    getName(contract, setName)
    getSymbol(contract, setSymbol)
    getDecimals(contract, setDecimals)

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Contract Address:
          <Input size='48' value={address} onChange={handleInputChange} />
        </label>
        <Button variant="contained" type="submit">Find Info</Button>
      </form>

      <p>Token Detail:</p>

      {name && <p>{name}</p>}
      {symbol && <p>{symbol}</p>}
      {decimals && <p>{decimals}</p>}
      {totalSupply && <p>{totalSupply}</p>}
      {owner && <p>{owner}</p>}
    </div>
  );
};

function getTotalSupply(contract, web3, setContractResponse) {
  contract.methods.totalSupply().call((error, result) => {
    if (error) {
      console.error(error);
    } else {
      const resultInEther = web3.utils.fromWei(result, 'ether');
      console.log(`Total Supply ${resultInEther}`);
      setContractResponse("\nTotal Supply: " + resultInEther);
    }
  });
}

function getOwner(contract, setOwner) {
  contract.methods.owner().call((error, result) => {
    if (error) {
      console.error(error);
    } else {
      setOwner("\nOwner: " + result);
    }

  });
}

function getName(contract, setName) {
  contract.methods.name().call((error, result) => {
    if (error) {
      console.error(error);
    } else {
      setName("\nName: " + result);
    }

  });
}

function getSymbol(contract, setSymbol) {
  contract.methods.symbol().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
        setSymbol(`\nSymbol: ${result}`);
    }
});
}

function getDecimals(contract, setDecimals) {
  contract.methods.decimals().call((error, result) => {
    if (error) {
        console.error(error);
    } else {
      setDecimals(`\nDecimals: ${result}`);
    }
});
}

export default App;