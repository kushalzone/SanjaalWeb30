import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from 'chart.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function EarningsByWallet(poolHarvestResult, tokenPrice, walletAddressList, totalHarvestReadyTokens) {
   
    ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    const totalByWalletData = getTotalByWallet(poolHarvestResult, walletAddressList)
    const totalRewardLiq = Number(totalHarvestReadyTokens).toFixed(2);
    const totalRewardDollar = Number(totalHarvestReadyTokens * tokenPrice).toFixed(2);

    const data = {
        labels: totalByWalletData.labels,
        datasets: [
            {
                label: "Pending Reward",
                data: totalByWalletData.totals,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                hoverBackgroundColor: ['gray', 'gray', 'gray', 'gray'],
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
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Total Pending Rewards By Wallet',
            },
        },
    };

    return (<>
        <div className="chartDiv">
            <Bar options={options} data={data} />
        </div>
        <div>
            <TableContainer component={Paper} sx={{ marginRight: "1" }}>
                <Table sx={{ tableLayout: "auto", background: "white" }}>
                    <TableHead>
                        <TableRow sx={{ background: '#000000' }}>
                            <TableCell sx={{ color: 'white' }}>Wallet</TableCell>
                            <TableCell sx={{ color: 'white' }}>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {totalByWalletData.dataMap && totalByWalletData.dataMap.map((item, index) => {
                            const rewardDollarValue = ((Number(item.total).toFixed(2) || '0') * Number(tokenPrice || 0)).toFixed(2);
                            return (
                                item.total > 0.001 && <TableRow key={'totalByWallet' + index}>
                                    <TableCell>{item.label}</TableCell>
                                    <TableCell>
                                        {(Number(item.total).toFixed(2) || '0')}
                                        <br />
                                        <font color="blue" size="2">${rewardDollarValue}</font>
                                    </TableCell>
                                </TableRow>
                            );
                        })}

                        <TableRow key={'grandTotalRow'} sx={{ background: 'green' }}>
                            <TableCell sx={{ color: 'white' }}>TOTAL &#x2705; ALL WALLETS &#x2705; ALL CHAINS</TableCell>
                            <TableCell sx={{ color: 'white' }}>
                                {totalRewardLiq} LIQ
                                <br />
                                <font size="2">${totalRewardDollar}</font>

                            </TableCell>
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

