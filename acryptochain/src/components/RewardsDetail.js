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
import LockClockIcon from '@mui/icons-material/LockClock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import WalletBalance from './WalletBalance';
import LinkIcon from '@mui/icons-material/Link';
import EarningsByChain from './EarningsByChain';
import Grid from '@mui/material/Unstable_Grid2'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { SortByChain, SortByWallet } from '../utils/DataUtils';
import { timeSince, UnlockTime } from '../utils/DateTimeUtils';
import EarningsByWallet from './EarningsByWallet';

function RewardsDetail(data, balance, balanceErrors, tokenPrice, walletAddressList, tokenSymbol) {

    //Sums up all the harvest ready tokens for summary display
    const totalHarvestReadyTokens = data.reduce((acc, item) => {
        return acc + parseFloat(item.harvestReadyTokens || 0);
    }, 0);

    //Thus removes any pools in which there was no deposit
    var filteredData = data.reduce(function (filtered, option) {
        if (option.userInfo && option.userInfo.amount > 0.1) {
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

            <h2>REWARDS SUMMARY | {tokenSymbol} Price: <font color="green">${tokenPrice}</font></h2>
            <Grid container spacing={2}>
                <Grid xs={12} lg={6}><Item>{EarningsByChain(sortedFilteredData, tokenPrice, totalHarvestReadyTokens)}</Item></Grid>
                <Grid xs={12} lg={6}><Item>{EarningsByWallet(sortedFilteredData, tokenPrice, walletAddressList, totalHarvestReadyTokens)}</Item></Grid>
                <Grid xs={12} lg={6}><Item>{WalletBalance(balance, balanceErrors, tokenPrice)}</Item></Grid>
            </Grid>

            <h2>REWARDS DETAIL</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450, tableLayout: "auto", background: 'white' }}>
                    <TableHead>
                        <TableRow sx={{ background: '#000000' }}>

                            <TableCell sx={{ color: 'white' }}>Wallet Address</TableCell>
                            <TableCell sx={{ color: 'white' }}>Farm/Pool</TableCell>
                            <TableCell sx={{ color: 'white' }}>Pending Rewards</TableCell>
                            <TableCell sx={{ color: 'white' }}>Last Deposit</TableCell>
                            <TableCell sx={{ color: 'white' }}>Deposited Amount</TableCell>
                            <TableCell sx={{ color: 'white' }}>Chain</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((item, index) => {
                            const rewardDollarValue = ((Number(item.harvestReadyTokens).toFixed(2) || '0') * Number(tokenPrice || 0)).toFixed(2);
                            const unlockStatus = UnlockTime(item.vestingPeriodInMonths, new Date(item.userInfo?.lastDepositedAt));
                            var unlocked = unlockStatus.startsWith('Pool unlocks in')
                            return (
                                <TableRow key={index}>

                                    <TableCell  sx={{ background: '#000000', color: 'white' }}><a href={item.addressExplorer + item.walletAddress} target='_blank' rel='noreferrer'>{String(item.walletAddress).substring(0, 10) || '-'}</a></TableCell>
                                    <TableCell ><a href={item.contractLink} target='_blank' rel='noreferrer'><LinkIcon sx={{color: 'blue'}} fontSize='small' /></a>&nbsp;{String(item.poolName).toUpperCase() || '-'}</TableCell>
                                    <TableCell sx={{ fontSize: "2", textAlign: 'center' }}>
                                        <Stack direction="column" spacing={1}>
                                            <Chip label={(Number(item.harvestReadyTokens).toFixed(2) || '-') + ' ' + tokenSymbol} variant="contained" color='success' />
                                            <Chip label={'$'+rewardDollarValue} />
                                        </Stack>

                                    </TableCell>
                                    <TableCell><b>{item.userInfo?.lastDepositedAt || '-'} </b>
                                        <br />
                                        <font color="blue">&rArr;&nbsp; Last deposit {timeSince(new Date(item.userInfo?.lastDepositedAt))} ago</font>
                                        <br />
                                        <font size="small" color={unlocked ? 'red' : 'green'}>{unlocked ? <LockClockIcon /> : <LockOpenIcon />}&nbsp;{unlockStatus}</font>
                                    </TableCell>
                                    <TableCell>{Number(item.userInfo?.amount).toFixed(2) || '-'} {item.type}</TableCell>
                                    <TableCell><StreamIcon fontSize="small" color="primary" />&nbsp;{item.chain || '-'}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <p><font color="blue" size="2">** This table only displays farms / pools in which the wallet has a current deposit. It also excludes some dust rewards.</font></p>
        </div>
    );
}

export default RewardsDetail;

