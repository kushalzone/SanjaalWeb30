/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity of any sort.
 */
import React from 'react';

/**
 * 
 * @param {*} data -> Wallet Balance Data
 * @param {*} errorData -> Wallet Balance Error Data
 * @returns 
 */
function WalletBalance(data, errorData) {

    //Sum up all the wallet Balances
    const totalBalance = data.reduce((acc, item) => {
        return acc + parseFloat(item.balance || 0);
    }, 0);


    return (
        <div>
            
            <h4><font color="#007600">Tokens held in Wallet (All Wallets, All Chains): {Number(totalBalance).toFixed(2)}</font></h4>
            
            {/* Print Wallets with Balance */}
            <ul>
                {data.map((item, index) => {
                    if (item) {
                        return (<li key={index}>{item.chain} - {String(item.wallet).substring(0, 10) + ''} holds {Number(item.balance).toFixed(2) || '-'} tokens outside of farm /pools</li>)
                    } else {return ''}
                })}
            </ul>

            <hr/>
            
            {/* Print Wallets with Error calculating Balance */}
            <ul>
                {errorData.map((item, index) => {
                    if (item) {
                        return (<li key={index}>{item.chain} - {String(item.wallet).substring(0, 10) + ':'} <font color="red">{item.balance || '-'}</font> </li>)
                    } else {return ''}
                })}
            </ul>
        </div>
    );
}

export default WalletBalance;
