/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity of any sort.
 */
import React from 'react';
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

    return (
        <div className='walletBalanceSummary'>
            <h3 className='centerText'>Tokens Held in Wallet: {Number(totalBalance).toFixed(3)} (${(Number(totalBalance).toFixed(3)*tokenPrice).toFixed(3) || '0'})</h3>
            {/* Print Wallets with Balance */}
            <ul>
                {sortedData.map((item, index) => {
                    if (item && item.balance > 0.01) {
                        return (<li key={index}>{item.chain} - {String(item.wallet).substring(0, 10) + ''} holds {Number(item.balance).toFixed(3) || '0'} tokens (${(Number(item.balance).toFixed(3)*tokenPrice).toFixed(3) || '0'})</li>)
                    } else {return ''}
                })}
            </ul>

            {sortedErrorData && <hr/>}
            
            {/* Print Wallets with Error calculating Balance */}
            <ul>
                {sortedErrorData.map((item, index) => {
                    if (item) {
                        return (<li key={index}>{item.chain} - {String(item.wallet).substring(0, 10) + ':'} <font color="red">{item.balance || '0'}</font> </li>)
                    } else {return ''}
                })}
            </ul>
            <font size="1.5" color="blue">**Wallets with no balance are excluded from display</font>
        </div>
    );
}

export default WalletBalance;
