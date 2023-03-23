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

    const uniqueChains = UniqueChainsUsed(pendingPoolHarvestResult).map(item => item.trim()).join();
    const portFolioValue = TwoDecimals((totalSingleTokenDeposited + totalBalance + totalHarvestReadyTokens)*tokenPrice);
    const totalTokensCount = TwoDecimals(totalBalance + totalSingleTokenDeposited + totalHarvestReadyTokens);
    
    const tableData = [

        {label:'Total Tokens (LP Excluded)', value: totalTokensCount + ' ' + tokenSymbol, description:'Wallet + Single Token Deposits + Pending Rewards'},
        {label:'Total Portfolio Value', value: 'USD ' + portFolioValue, description:'LP Holdings or LP deposits not included' },
        {label:'Tokens in wallets', value:TwoDecimals(totalBalance)+ ' ' + tokenSymbol},
        {label:'Tokens in Single Token Pool', value: TwoDecimals(totalSingleTokenDeposited)+ ' ' + tokenSymbol},
        {label:'Total Pending Rewards', value:TwoDecimals(totalHarvestReadyTokens)+ ' ' + tokenSymbol},
       
    ]
    
    return (<>
        <div className='portfolioSummary'>
            <h3 className='centerText'>Portfolio Summary</h3>
            <h6 className='centerText'>Collective summary for ALL your wallets in ALL chains you've used ({uniqueChains})</h6>
            {/* Print Wallets with Balance */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450, tableLayout: "auto", background: "white" }}>
                    <TableBody>
                        {tableData.map((item, index) => {
                            const variant = (index < 3 ) ? 'contained' : 'outlined'
                            if (item) {
                                return (
                                    <TableRow key={index}>
                                        <TableCell sx={{width:'55%'}}>{item.label} <br/><font color="blue"><small>{item.description}</small></font></TableCell>
                                        <TableCell sx={{width:'45%'}}><Chip label={item.value} variant={variant} color='info'></Chip></TableCell>
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
