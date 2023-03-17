import { useState, useEffect } from "react";
import { BSC_LIQ_SINGLE_TOKEN_CONTRACT, SUPPORTED_NETWORKS_FOR_LIQUIDUS, PROJECT_META as PROJECT_META_LIQUIDUS} from "../projects/liquidus/config/ProjectConfig";
import {PROJECT_META as PROJECT_META_ONINO} from "../projects/onino/config/ProjectConfig"
import { BSC_NODE_PROVIDER } from "../constants/NetworkProviders"
import Web3 from "web3";
import { tokenInfoTable } from "../components/TokenInfo";
import { BSC_ONI_SINGLE_TOKEN_CONTRACT, SUPPORTED_NETWORKS_FOR_ONINO } from "../projects/onino/config/ProjectConfig";

/**
 * @returns Information about the token
 */
export const LIQTokenInfo = () => {
    const [tokenInfo, setTokenInfo] = useState([]);

    useEffect(() => {
        const getTokenInfo = async () => {
            try {
                const web3 = new Web3(BSC_NODE_PROVIDER);
                const tokenContract = new web3.eth.Contract(BSC_LIQ_SINGLE_TOKEN_CONTRACT.abi, BSC_LIQ_SINGLE_TOKEN_CONTRACT.address);
                const name = await tokenContract.methods.name().call();
                const symbol = await tokenContract.methods.symbol().call();
                const owner = await tokenContract.methods.owner().call();
                const totalSupply = await tokenContract.methods.totalSupply().call();
                const decimals = await tokenContract.methods.decimals().call();

                const totalSupplyEther = Web3.utils.fromWei(totalSupply, 'ether');
                
                const result = tokenInfoTable(BSC_LIQ_SINGLE_TOKEN_CONTRACT.address, name, symbol, totalSupplyEther, decimals, owner, SUPPORTED_NETWORKS_FOR_LIQUIDUS, PROJECT_META_LIQUIDUS)

                setTokenInfo(result)
            } catch (error) {
                console.error(error);
            }
        };
        getTokenInfo();
    }, []);
    return tokenInfo;
};

export const ONITokenInfo = () => {
    const [tokenInfo, setTokenInfo] = useState([]);

    useEffect(() => {
        const getTokenInfo = async () => {
            try {
                const web3 = new Web3(BSC_NODE_PROVIDER);
                const tokenContract = new web3.eth.Contract(BSC_ONI_SINGLE_TOKEN_CONTRACT.abi, BSC_ONI_SINGLE_TOKEN_CONTRACT.address);
                const name = await tokenContract.methods.name().call();
                const symbol = await tokenContract.methods.symbol().call();
                const owner = await tokenContract.methods.owner().call();
                const totalSupply = await tokenContract.methods.totalSupply().call();
                const decimals = await tokenContract.methods.decimals().call();

                const totalSupplyEther = Web3.utils.fromWei(totalSupply, 'ether');
                
                const result = tokenInfoTable(BSC_ONI_SINGLE_TOKEN_CONTRACT.address, name, symbol, totalSupplyEther, decimals, owner, SUPPORTED_NETWORKS_FOR_ONINO, PROJECT_META_ONINO)

                setTokenInfo(result)
            } catch (error) {
                console.error(error);
            }
        };
        getTokenInfo();
    }, []);
    return tokenInfo;
};


// export default BNBPrice;
