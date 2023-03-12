/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since March 2023
 * 
 * Use it at your own risk. Author provides no liablity of any sort.
 * Wallet Entry Form Component
 */
import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export function WalletEntryForm(handleWalletSubmit, walletAddresses, handleWalletInputChange) {
  return <>
          <form onSubmit={handleWalletSubmit} sx={{ border: 1 }}>
          <TextField  
            label="Enter Wallet Address(es)" 
            value={walletAddresses} 
            onChange={handleWalletInputChange} 
            fullWidth={true} 
            placeholder='Enter single or comma separated wallet addresses to find pending rewards' 
            color="secondary"
            sx={{ mb: 1, mt:2 }} 
            variant = "outlined"/>
          <Button variant="contained" color="success" type="submit" sx={{ mb: 1 }}>Find Pending Rewards</Button>
          <br />
        </form>
  </>
}
