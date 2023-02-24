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


    return (
        <div>
            <h4><font color="#007600">Total Unharvested Rewards (All Wallets): {Number(totalHarvestReadyTokens).toFixed(2)}</font></h4>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450, tableLayout: "auto", background: "white" }}>
                <TableHead>
                    <TableRow>
                        {/* <TableCell>Chain</TableCell> */}
                        <TableCell>Wallet Address</TableCell>
                        <TableCell>Pool Name</TableCell>
                        <TableCell>Harvest Ready Tokens</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Reward Debt</TableCell>
                        <TableCell>Last Deposited At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, index) => {
                        if(item.poolName) {
                        return (
                            <TableRow key={index}>
                                {/* <TableCell>{item.chain || '-'}</TableCell> */}
                                <TableCell>{String(item.walletAddress).substring(0,20) +'...' || '-'}</TableCell>
                                <TableCell>{item.poolName || '-'}</TableCell>
                                <TableCell>{Number(item.harvestReadyTokens).toFixed(2) || '-'}</TableCell>
                                <TableCell>{Number(item.userInfo?.amount).toFixed(2) || '-'}</TableCell>
                                <TableCell>{Number(item.userInfo?.rewardDebt).toFixed(2) || '-'}</TableCell>
                                <TableCell>{item.userInfo?.lastDepositedAt || '-'}</TableCell>
                            </TableRow>
                        );
                        } else { 
                            return ''
                        }
                    })}
                </TableBody>
            </Table>
            </TableContainer>

        </div>
    );
}

export default RewardsDetail;
