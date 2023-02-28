import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import WalletBalance from './WalletBalance';

function RewardsDetail(data, balance) {

    //Sums up all the harvest ready tokens for summary display
    const totalHarvestReadyTokens = data.reduce((acc, item) => {
        return acc + parseFloat(item.harvestReadyTokens || 0);
    }, 0);

    //Thus removes any pools in which there was no deposit
    var reducedData = data.reduce(function (filtered, option) {
        if (option.userInfo && option.userInfo.amount > 0.0) {
            filtered.push(option);
        }
        return filtered;
    }, []);

    return (
        <div>
            {WalletBalance(balance)}
            <h4><font color="#007600">Total Unharvested Rewards (All Wallets): {Number(totalHarvestReadyTokens).toFixed(2)}</font></h4>
            <h4>REWARDS DETAILS</h4>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450, tableLayout: "auto", background: "white" }}>
                    <TableHead>
                        <TableRow sx={{ background: '#1976d2' }}>
                            <TableCell sx={{ color: 'white' }}>Chain</TableCell>
                            <TableCell sx={{ color: 'white' }}>Wallet Address</TableCell>
                            <TableCell sx={{ color: 'white' }}>Farm/Pool</TableCell>
                            <TableCell sx={{ color: 'white' }}>Harvestable Rewards</TableCell>
                            <TableCell sx={{ color: 'white' }}>Amount</TableCell>
                            <TableCell sx={{ color: 'white' }}>Reward Debt</TableCell>
                            <TableCell sx={{ color: 'white' }}>Last Deposited Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reducedData.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{item.chain || '-'}</TableCell>
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
            <p><font color="red">** - This table only shows farms / pools in which there was a deposit made by the provided wallet(s)</font></p>

            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        About
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This tool is developed by Kushal Paudyal for Sanjaal Corps.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href='https://github.com/sanjaalcorps/SanjaalWeb30/blob/master/acryptochain/ReleaseNotes.MD'>Release Notes</Button>
                </CardActions>
            </Card>

        </div>
    );
}

export default RewardsDetail;
