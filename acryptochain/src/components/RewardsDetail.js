import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function RewardsDetail(data) {

    //Sums up all the harvest ready tokens for summary display
    const totalHarvestReadyTokens = data.reduce((acc, item) => {
        return acc + parseFloat(item.harvestReadyTokens || 0);
    }, 0);

    //Thus removes any pools in which there was no deposit
    var reducedData = data.reduce(function(filtered, option) {
        if (option.userInfo && option.userInfo.amount > 0.0) {
           filtered.push(option);
        }
        return filtered;
      }, []);

    return (
        <div>
            <h4><font color="#007600">Total Unharvested Rewards (All Wallets): {Number(totalHarvestReadyTokens).toFixed(2)}</font></h4>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450, tableLayout: "auto", background: "white" }}>
                    <TableHead>
                        <TableRow sx={{ background: '#1976d2'}}>
                            {/* <TableCell>Chain</TableCell> */}
                            <TableCell sx={{color: 'white' }}>Wallet Address</TableCell>
                            <TableCell sx={{color: 'white' }}>Pool Name</TableCell>
                            <TableCell sx={{color: 'white' }}>Harvest Ready Tokens</TableCell>
                            <TableCell sx={{color: 'white' }}>Amount</TableCell>
                            <TableCell sx={{color: 'white' }}>Reward Debt</TableCell>
                            <TableCell sx={{color: 'white' }}>Last Deposited At</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reducedData.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    {/* <TableCell>{item.chain || '-'}</TableCell> */}
                                    <TableCell>{String(item.walletAddress).substring(0, 20) + '...' || '-'}</TableCell>
                                    <TableCell>{item.poolName || '-'}</TableCell>
                                    <TableCell>{Number(item.harvestReadyTokens).toFixed(2) || '-'}</TableCell>
                                    <TableCell>{Number(item.userInfo?.amount).toFixed(2) || '-'}</TableCell>
                                    <TableCell>{Number(item.userInfo?.rewardDebt).toFixed(2) || '-'}</TableCell>
                                    <TableCell>{item.userInfo?.lastDepositedAt || '-'}</TableCell>
                                </TableRow>
                            );

                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <p>** - This table only shows farms / pools in which there was a deposit by the provided wallets</p>

        </div>
    );
}

export default RewardsDetail;
