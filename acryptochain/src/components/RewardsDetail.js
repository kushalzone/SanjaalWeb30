import React from 'react';

function RewardsDetail(data) {

    const totalHarvestReadyTokens = data.reduce((acc, item) => {
        return acc + parseFloat(item.harvestReadyTokens || 0);
    }, 0);


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {/* <th>Chain</th> */}
                        {/* <th>Wallet Address</th> */}
                        <th>Pool Name</th>
                        <th>Harvest Ready Tokens</th>
                        <th>Amount</th>
                        <th>Reward Debt</th>
                        <th>Last Deposited At</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                {/* <td>{item.chain || '-'}</td> */}
                                {/* <td>{item.walletAddress || '-'}</td> */}
                                <td>{item.poolName || '-'}</td>
                                <td>{Number(item.harvestReadyTokens).toFixed(2) || '-'}</td>
                                <td>{Number(item.userInfo?.amount).toFixed(2) || '-'}</td>
                                <td>{Number(item.userInfo?.rewardDebt).toFixed(2) || '-'}</td>
                                <td>{item.userInfo?.lastDepositedAt || '-'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h4>Total Harvest Ready Tokens: {totalHarvestReadyTokens}</h4>
        </div>
    );
}

export default RewardsDetail;
