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

import { SortByChain, SortByWallet } from '../utils/DataUtils';

/**
 * 
 * @param {*} data -> Wallet Balance Data
 * @param {*} errorData -> Wallet Balance Error Data
 * @returns 
 */
function WalletBalance(data, errorData, tokenPrice) {

    //Sum up all the wallet Balances
    const totalBalance = data.reduce((acc, item) => {
        return acc + Number(parseFloat(item.balance || 0));
    }, 0);

    var sortedData = SortByChain(SortByWallet(data))
    var sortedErrorData = SortByChain(SortByWallet(errorData))

    return (<>
        <div className='walletBalanceSummary'>
            <h3 className='centerText'>Tokens Held in Wallets</h3>
            <h6 className='centerText'>Project tokens held in wallet, but not in farm/pools</h6>
            {/* Print Wallets with Balance */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450, tableLayout: "auto", background: "white" }}>
                    <TableHead>
                        <TableRow sx={{ background: '#000000' }}>
                            <TableCell sx={{ color: 'white' }}>Chain</TableCell>
                            <TableCell sx={{ color: 'white' }}>Wallet Address</TableCell>
                            <TableCell sx={{ color: 'white' }}>Token Holdings</TableCell>
                            <TableCell sx={{ color: 'white' }}>Dollar Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData.map((item, index) => {
                            const rewardDollarValue = ((Number(item.balance).toFixed(2) || '0') * Number(tokenPrice || 0)).toFixed(2);
                            if (item && item.balance > 0.01) {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{item.chain || '-'}</TableCell>
                                        <TableCell>{item.wallet}</TableCell>
                                        <TableCell>{Number(item.balance).toFixed(3)}</TableCell>
                                        <TableCell>${rewardDollarValue}</TableCell>
                                    </TableRow>
                                );
                            } else { return '' }
                        })}

                            <TableRow key={'totalRow'} sx={{ background: 'green'}}>
                                        <TableCell></TableCell>
                                        <TableCell sx={{ color: 'white', textAlign:'right' }}>TOTAL &#x2705; ALL WALLETS</TableCell>
                                        <TableCell sx={{ color: 'white'}}>&rarr;&nbsp;{Number(totalBalance).toFixed(3)}</TableCell>
                                        <TableCell sx={{ color: 'white'}}>&rarr;&nbsp;${(Number(totalBalance).toFixed(3) * tokenPrice).toFixed(2) || '0'}</TableCell>
                                    </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>

            {/* Print Wallets with Error calculating Balance */}
            <ul>
                {sortedErrorData.map((item, index) => {
                    if (item) {
                        return (<li key={index}>{item.chain} - {String(item.wallet).substring(0, 10) + ':'} <font color="red">{item.balance || '0'}</font> </li>)
                    } else { return '' }
                })}
            </ul>

        </div>
        <div>
            <font color="blue">**Wallets with no balance are excluded from display</font>
        </div>
    </>
    );
}

export default WalletBalance;
