import React from 'react';

function WalletBalance(data) {

    //Sums up all the wallet Balances
    const totalBalance = data.reduce((acc, item) => {
        return acc + parseFloat(item.balance || 0);
    }, 0);


    return (
        <div>
            <h4><font color="#007600">Wallet Balance (All Wallets): {Number(totalBalance).toFixed(2)}</font></h4>
            <ul>
                {data.map((item, index) => {
                    if (item) {
                        return (
                            <li key={index}>{String(item.wallet).substring(0, 15) + '...'} holds {Number(item.balance).toFixed(2) || '-'} tokens outside of farm /pools</li>
                        )
                    } else {
                        return ''
                    }
                })}
            </ul>
        </div>
    );
}

export default WalletBalance;
