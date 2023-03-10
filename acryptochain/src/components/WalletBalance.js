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
function WalletBalance(data, errorData) {

    //Sum up all the wallet Balances
    const totalBalance = data.reduce((acc, item) => {
        return acc + Number(parseFloat(item.balance || 0));
    }, 0);
  
    var sortedFilteredData = SortByChain(SortByWallet(data))
    var sortedErrorData = SortByChain(SortByWallet(errorData))

    return (
        <div className='walletBalanceSummary'>
            <h4><font color="#007600">Tokens Held in Wallet: {Number(totalBalance).toFixed(2)}</font></h4>
            {/* Print Wallets with Balance */}
            <ul>
                {sortedFilteredData.map((item, index) => {
                    if (item) {
                        return (<li key={index}>{item.chain} - {String(item.wallet).substring(0, 10) + ''} holds {Number(item.balance).toFixed(2) || '-'} tokens</li>)
                    } else {return ''}
                })}
            </ul>

            <hr/>
            
            {/* Print Wallets with Error calculating Balance */}
            <ul>
                {sortedErrorData.map((item, index) => {
                    if (item) {
                        return (<li key={index}>{item.chain} - {String(item.wallet).substring(0, 10) + ':'} <font color="red">{item.balance || '-'}</font> </li>)
                    } else {return ''}
                })}
            </ul>
        </div>
    );
}

export default WalletBalance;
