/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity of any sort.
 */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StreamIcon from '@mui/icons-material/Stream';
import WalletBalance from './WalletBalance';
import Footer from './Footer';
import LinkIcon from '@mui/icons-material/Link';
import EarningsByChain from './EarningsByChain';
import Grid from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles';
import { SortByChain, SortByWallet } from '../utils/DataUtils';

function RewardsDetail(data, balance, balanceErrors) {

    //Sums up all the harvest ready tokens for summary display
    const totalHarvestReadyTokens = data.reduce((acc, item) => {
        return acc + parseFloat(item.harvestReadyTokens || 0);
    }, 0);

    //Thus removes any pools in which there was no deposit
    var filteredData = data.reduce(function (filtered, option) {
        if (option.userInfo && option.userInfo.amount > 0.0) {
            filtered.push(option);
        }
        return filtered;
    }, []);

    var sortedFilteredData = SortByChain(SortByWallet(filteredData))

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>

            <Grid container spacing={2}>
                <Grid xs={6}>
                    <Item>
                        <h4>Pending Rewards by Chain</h4>
                        {EarningsByChain(sortedFilteredData)}
                        <h4><font color="#007600">Total Pending Rewards (All Wallets , All Chains): {Number(totalHarvestReadyTokens).toFixed(2)}</font></h4>
                    </Item>
                </Grid>
                <Grid xs={6}>
                    <Item>{WalletBalance(balance, balanceErrors)}</Item>
                </Grid>
            </Grid>

            <h2>REWARDS DETAILS</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450, tableLayout: "auto", background: "white", border: 0.5, borderStyle: 'dashed' }}>
                    <TableHead>
                        <TableRow sx={{ background: '#1976d2' }}>
                            <TableCell sx={{ color: 'white' }}>Chain</TableCell>
                            <TableCell sx={{ color: 'white' }}>Wallet Address</TableCell>
                            <TableCell sx={{ color: 'white' }}>Farm/Pool</TableCell>
                            <TableCell sx={{ color: 'white' }}>Pending Rewards</TableCell>
                            <TableCell sx={{ color: 'white' }}>Amount</TableCell>
                            <TableCell sx={{ color: 'white' }}>Reward Debt</TableCell>
                            <TableCell sx={{ color: 'white' }}>Last Deposited Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell><StreamIcon fontSize="small" color="primary" />&nbsp;{item.chain || '-'}</TableCell>
                                    <TableCell><a href={item.addressExplorer + item.walletAddress} target='_blank' rel='noreferrer'>{String(item.walletAddress).substring(0, 10) || '-'}</a></TableCell>
                                    <TableCell><a href={item.contractLink} target='_blank' rel='noreferrer'><LinkIcon fontSize='small' /></a>&nbsp;<font color="#007600">{String(item.poolName).toUpperCase() || '-'}</font></TableCell>
                                    <TableCell sx={{ background: '#007600', color: 'white', fontSize: "large" }}>{Number(item.harvestReadyTokens).toFixed(2) || '-'}</TableCell>
                                    <TableCell>{Number(item.userInfo?.amount).toFixed(2) || '-'}</TableCell>
                                    <TableCell>{Number(item.userInfo?.rewardDebt).toFixed(2) || '-'}</TableCell>
                                    <TableCell>{item.userInfo?.lastDepositedAt || '-'}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <p><font color="red">** This table only displays farms / pools in which there was a deposit made by the wallet(s)</font></p>
            <Footer />
        </div>
    );
}

export default RewardsDetail;

