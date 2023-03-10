import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
export default function EarningsByChain(poolHarvestResult) {

    const bscTotal = getTotalByChain(poolHarvestResult, "BSC");
    const cronosTotal = getTotalByChain(poolHarvestResult, "CRO")
    const maticTotal = getTotalByChain(poolHarvestResult, "MATIC")
    const ethTotal = getTotalByChain(poolHarvestResult, "ETH")

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['BSC', 'CRO', 'MATIC', 'ETH'],
        datasets: [
            {
                data: [bscTotal, cronosTotal, maticTotal, ethTotal],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    return (
        <div className="pieChartDiv">
            <Pie data={data} />
        </div>
    )
}
function getTotalByChain(poolHarvestResult, chain) {
    const bsc = poolHarvestResult.filter(r => r.chain.includes(chain));
    const total = bsc.reduce((acc, item) => {
        return acc + Number(parseFloat(item.harvestReadyTokens || 0).toFixed(3));
    }, 0);

    return total
}

