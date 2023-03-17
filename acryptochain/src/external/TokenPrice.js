/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity of any sort.
 */
import Web3 from 'web3';
import { useState, useEffect } from "react";

import { parseBNumber } from "../services/app_utils";
import { CONTRACT_FOR_BNB } from '../projects/bnb/CommonConfigBNB';
import { BSC_NODE_PROVIDER } from "../constants/NetworkProviders"
/**
 * This method can taken a BNB based token contract and find the price of the token based on reserves of LP
 * @param {*} tokenBNBContract 
 * @returns 
 */
export async function getTokenPriceBSC(tokenBNBContract) {
    try {
        const web3 = new Web3(BSC_NODE_PROVIDER);
        const bnbContract = new web3.eth.Contract(CONTRACT_FOR_BNB.abi, CONTRACT_FOR_BNB.address);
        const balanceInfo = await bnbContract.methods.getReserves().call();
        const busdAmount = parseBNumber(balanceInfo._reserve1, 18);
        const bnbAmount = parseBNumber(balanceInfo._reserve0, 18);
        const bnbPrice = busdAmount / bnbAmount;

        const tokenContract = new web3.eth.Contract(tokenBNBContract.abi, tokenBNBContract.address);
        const reserves = await tokenContract.methods.getReserves().call();
        const bnb = parseBNumber(reserves._reserve0, 18);
        const tokenAmount = parseBNumber(reserves._reserve1, 18);
        const tokenPrice = Number(bnb * bnbPrice / tokenAmount).toFixed(3);
        return tokenPrice
    } catch (error) {
        console.error(error);
        return 0;
    }
};

/**
 * @returns Price of BNB in USD
 */
export const BNBPrice = () => {
    const [bnbPrice, setBnbPrice] = useState(0.0);

    useEffect(() => {
        const getTokenPrice = async () => {
            try {
                const web3 = new Web3(BSC_NODE_PROVIDER);
                const bnbContract = new web3.eth.Contract(CONTRACT_FOR_BNB.abi, CONTRACT_FOR_BNB.address);
                const balanceInfo = await bnbContract.methods.getReserves().call();
                const busdAmount = parseBNumber(balanceInfo._reserve1, 18);
                const bnbAmount = parseBNumber(balanceInfo._reserve0, 18);
                const bnbPrice = busdAmount / bnbAmount;
                setBnbPrice(Number(bnbPrice).toFixed(3))
            } catch (error) {
                console.error(error);
            }
        };
        getTokenPrice();
    }, []);
    return bnbPrice;
};
