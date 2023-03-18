/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity of any sort.
 */
import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';

export default function EarningsByWallet(poolHarvestResult, tokenPrice, walletAddressList, totalHarvestReadyTokens, tokenSymbol) {

    ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    const totalByWalletData = getTotalByWallet(poolHarvestResult, walletAddressList)
    const totalRewardLiq = Number(totalHarvestReadyTokens).toFixed(2);
    const totalRewardDollar = Number(totalHarvestReadyTokens * tokenPrice).toFixed(2);

    const data = {
        labels: totalByWalletData.labels,
        datasets: [
            {
                label: "Pending Reward Tokens",
                data: totalByWalletData.totals,
                borderColor: 'white',
                backgroundColor: ['green', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverBackgroundColor: ['black'],
            },
        ]
    };

    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 1,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
            },
            title: {
                display: false,
                text: 'Total Pending Rewards By Wallet',
            },
        },
    };

    return (<>
        <h3>Pending Rewards by Wallet Address</h3>
        <h6>How many rewards are left to be harvested categorized by Wallet Address</h6>
        <div className="chartDiv">
            <Bar options={options} data={data} />
        </div>
        <div>
            <TableContainer component={Paper} sx={{ marginRight: "1" }}>
                <Table sx={{ tableLayout: "auto", background: "white" }}>
                    <TableHead>
                        <TableRow sx={{ background: '#000000' }}>
                            <TableCell sx={{ color: 'white' }}>Wallet</TableCell>
                            <TableCell sx={{ color: 'white' }}>Pending Rewards</TableCell>
                            <TableCell sx={{ color: 'white' }}>Rewards Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {totalByWalletData.dataMap && totalByWalletData.dataMap.map((item, index) => {
                            const rewardDollarValue = ((Number(item.total).toFixed(2) || '0') * Number(tokenPrice || 0)).toFixed(2);
                            return (
                                item.total > 0.001 && <TableRow key={'totalByWallet' + index}>
                                    <TableCell>{item.label}</TableCell>
                                    <TableCell>{(Number(item.total).toFixed(2) || '0') + ' ' + tokenSymbol}</TableCell>
                                    <TableCell>${rewardDollarValue}</TableCell>
                                </TableRow>
                            );
                        })}

                        <TableRow key={'grandTotalRow'} sx={{ background: 'gray' }}>
                            <TableCell sx={{ color: 'white', textAlign: 'right' }} >Total</TableCell>
                            <TableCell sx={{ color: 'white' }}><Chip label={totalRewardLiq + ' ' + tokenSymbol} variant="contained" color="success"></Chip></TableCell>
                            <TableCell sx={{ color: 'white' }}><Chip label={'$' + totalRewardDollar} variant="contained" color="success"></Chip></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    </>
    )
}
function getTotalByWallet(poolHarvestResult, walletAddressList) {
    let labelsData = []
    let totalsData = []
    let dataMap = []
    for (let index = 0; index < walletAddressList.length; index++) {
        let label = String(walletAddressList[index]).substring(0, 10)
        let total = reduceTotalForWallet(poolHarvestResult, walletAddressList[index])

        labelsData.push(label)
        totalsData.push(total)
        dataMap.push({ label: label, total: total })

    };

    return { labels: labelsData, totals: totalsData, dataMap }
}

function reduceTotalForWallet(poolHarvestResult, wallet) {

    const filteredByWallet = poolHarvestResult.filter(r => r.walletAddress.includes(wallet));
    const total = filteredByWallet.reduce((acc, item) => {
        return acc + Number(parseFloat(item.harvestReadyTokens || 0).toFixed(3));
    }, 0);
    return total
}

