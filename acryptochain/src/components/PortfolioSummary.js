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
import Chip from '@mui/material/Chip';

import { TwoDecimals, UniqueChainsUsed } from '../utils/DataUtils';

/**
 * 
 * @param {*} pendingPoolHarvestResult -> Wallet Balance Data
 * @param {*} errorData -> Wallet Balance Error Data
 * @returns 
 */
function PortfolioSummary(walletBalance, pendingPoolHarvestResult, tokenPrice, totalHarvestReadyTokens, tokenSymbol) {

    //Sum up all the wallet Balances
    const totalBalance = walletBalance.reduce((acc, item) => {
        return acc + Number(parseFloat(item.balance || 0));
    }, 0);

    const totalSingleTokenDeposited = pendingPoolHarvestResult.reduce((acc, item) => {
        if(item.type !== 'LP') {
            return acc + Number(parseFloat(item.userInfo.amount || 0));
        } else {
            return acc;
        }
    }, 0);
    
    const tableData = [

        {label:'Total Tokens (LP Excluded)', value:TwoDecimals(totalBalance + totalSingleTokenDeposited + totalHarvestReadyTokens) + ' ' + tokenSymbol, description:'Wallet + Single Token Deposits + Pending Rewards'},
        {label:'Total Portfolio Value', value: 'USD ' + TwoDecimals((totalSingleTokenDeposited + totalBalance + totalHarvestReadyTokens)*tokenPrice), description:'LP Holdings or deposits not included' },
        // {label:'Total Portfolio Value (LP included)', value:'TBD'},
        {label:'Tokens in wallets', value:TwoDecimals(totalBalance)+ ' ' + tokenSymbol},
        {label:'Tokens in Single Token Pool', value: TwoDecimals(totalSingleTokenDeposited)+ ' ' + tokenSymbol},
        {label:'Total Pending Rewards', value:TwoDecimals(totalHarvestReadyTokens)+ ' ' + tokenSymbol},
        {label:'Chains Used', value:UniqueChainsUsed(pendingPoolHarvestResult)},
        
    ]
    
    return (<>
        <div className='portfolioSummary'>
            <h3 className='centerText'>Portfolio Summary</h3>
            <h6 className='centerText'>Collective summary for your wallets, all chains</h6>
            {/* Print Wallets with Balance */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450, tableLayout: "auto", background: "white" }}>
                    <TableHead>
                        <TableRow sx={{ background: '#000000' }}>
                            <TableCell sx={{ color: 'white' }}>Item</TableCell>
                            <TableCell sx={{ color: 'white' }}>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((item, index) => {
                            const variant = (index===0 || index ===1 ) ? 'contained' : 'outlined'
                            if (item) {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{item.label} <br/><font color="blue"><small>{item.description}</small></font></TableCell>
                                        <TableCell><Chip label={item.value} variant={variant} color='info'></Chip></TableCell>
                                    </TableRow>
                                );
                            } else { return '' }
                        })}

                        <TableRow key={'totalRow'} sx={{ background: 'gray' }}>
                           
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>

           

        </div>
    </>
    );
}

export default PortfolioSummary;
