import { useState } from 'react';
import * as React from 'react';
import Web3 from 'web3';
import './App.css';
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

const App = () => {
  const [address, setAddress] = useState('0xc7981767f644C7F8e483DAbDc413e8a371b83079');
  const [totalSupply, setTotalSupply] = useState(null);
  const [owner, setOwner] = useState(null);
  const [name, setName] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [decimals, setDecimals] = useState(null);
  const [loaded, setLoaded] = useState(false);


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

export default App;