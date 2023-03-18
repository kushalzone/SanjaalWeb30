import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BSC, ETH, MATIC, CRONOS } from '../constants/networks';
import { BSC_IMAGE, CRO_IMAGE, MATIC_IMAGE, ETH_IMAGE } from '../constants/NetworkProviders';
import { Chip } from '@mui/material';

export default function EarningsByChain(poolHarvestResult, tokenPrice, totalHarvestReadyTokens, tokenSymbol) {

    const bscTotal = getTotalByChain(poolHarvestResult, BSC);
    const cronosTotal = getTotalByChain(poolHarvestResult, CRONOS)
    const maticTotal = getTotalByChain(poolHarvestResult, MATIC)
    const ethTotal = getTotalByChain(poolHarvestResult, ETH)
    const totalAmountData = [
        { chain: BSC, total: bscTotal, logo: BSC_IMAGE },
        { chain: CRONOS, total: cronosTotal, logo: CRO_IMAGE },
        { chain: MATIC, total: maticTotal, logo: MATIC_IMAGE },
        { chain: ETH, total: ethTotal, logo: ETH_IMAGE }
    ]

    const totalRewardLiq = Number(totalHarvestReadyTokens).toFixed(2);
    const totalRewardDollar = Number(totalHarvestReadyTokens * tokenPrice).toFixed(2);

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: [BSC, CRONOS, MATIC, ETH],
        datasets: [
            {
                data: [bscTotal, cronosTotal, maticTotal, ethTotal],
                backgroundColor: ['green', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverBackgroundColor: ['black'],
            },
        ],
        options: {
            display: true,
            responsive: true,
            maintainAspectRatio: true,
            showScale: true
        }
    };

    return (
        <>
            <h3>Pending Rewards by Chain</h3>
            <h6>How many rewards are left to be harvested categorized by chain</h6>
            <div className="pieChartDiv">
                <Pie data={data} />
            </div>
            <div>
                <TableContainer component={Paper} sx={{ marginRight: "1" }}>
                    <Table sx={{ tableLayout: "auto", background: "white" }}>
                        <TableHead>
                            <TableRow sx={{ background: '#000000' }}>
                                <TableCell sx={{ color: 'white' }}>Chain</TableCell>
                                <TableCell sx={{ color: 'white' }}>Pending Rewards</TableCell>
                                <TableCell sx={{ color: 'white' }}>Rewards Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {totalAmountData.map((item, index) => {
                                const rewardDollarValue = ((Number(item.total).toFixed(2) || '0') * Number(tokenPrice || 0)).toFixed(2);
                                return (
                                    item.total > 0.001 && <TableRow key={'totalByChain_' + index}>
                                        <TableCell sx={{ alignContent: 'center' }}><img src={item.logo} alt={item.logo} height="32" /><br /> {item.chain}</TableCell>
                                        <TableCell>{(Number(item.total).toFixed(2) || '0') + ' ' + tokenSymbol}</TableCell>
                                        <TableCell>${rewardDollarValue}</TableCell>
                                    </TableRow>
                                );
                            })}

                            <TableRow key={'grandTotalRow'} sx={{ background: 'gray' }}>
                                <TableCell sx={{ color: 'white', textAlign: 'right' }}>Total</TableCell>
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
function getTotalByChain(poolHarvestResult, chain) {
    const bsc = poolHarvestResult.filter(r => r.chain.includes(chain));
    const total = bsc.reduce((acc, item) => {
        return acc + Number(parseFloat(item.harvestReadyTokens || 0).toFixed(3));
    }, 0);

    return total
}

