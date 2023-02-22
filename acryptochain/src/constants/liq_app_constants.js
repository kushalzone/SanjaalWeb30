import BNB_ABI from '../abis/bsc/bnb_abi.json'
import LIQ_BNB_LP_TOKEN_ABI from '../abis/bsc/liq_bnb_abi.json'
import LIQ_SINGLE_TOKEN_ABI from '../abis/bsc/liq_token_abi.json'
import LIQ_MATIC_LP_TOKEN_ABI from '../abis/matic/liq_matic_lp_abi.json'
import LIQ_ETH_LP_TOKEN_ABI from '../abis/eth/liq_eth_lp_abi.json'
import LIQ_CRO_LP_TOKEN_ABI from '../abis/cronos/liq_cro_lp_abi.json'
import LIQ_FARM_CONTRACT_BSC_ABI from '../abis/bsc/liq_bsc_farm_single_token_abi.json';

const LPToken = "" //DELETE AND FIX
const FarmContractForSingleToken = "" //DELETE AND FIX
const Crona_LP_Token = "" //DELETE AND FIX
const FarmContractVesting___Cronos = "" //DELETE AND FIX
const FarmContractVesting___FOR_ETH = "" //DELETE AND FIX
const FarmContractVesting___FOR_matic = "" //DELETE AND FIX

export const CONTRACT_FOR_BNB = {
    address: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    abi: BNB_ABI
}

export const LIQ_TOKEN_CONTRACT = {
    address: '0xc7981767f644C7F8e483DAbDc413e8a371b83079',
    abi: LIQ_SINGLE_TOKEN_ABI
}

export const LIQ_BNB_CONTRACT = {
    address: '0x1F04Bf1938a36fF0BD6f811Ee5EF6822Ecb6ED49',
    abi: LIQ_BNB_LP_TOKEN_ABI
}

export const LIQ_ETH_CONTRACT = {
    address: '0x13c869bb9519353643269846ad6f96F59c1F4F3e',
    abi: LIQ_ETH_LP_TOKEN_ABI
}

export const LIQ_CRO_CONTRACT = {
    address: '0x3295007761C290741B6b363b86dF9ba3467F0754',
    abi: LIQ_CRO_LP_TOKEN_ABI
}

export const LIQ_MATIC_CONTRACT = {
    address: '0x2F5a5E6FF15B9B342e6292e2F179e7199f88922F',
    abi: LIQ_MATIC_LP_TOKEN_ABI
}

export const ETH_CONTRACT_LIST = [
    {
        address: '0xd27fab2323edb75af6f4348e3745247e77690e53',
        lpSwapToken: '0x13c869bb9519353643269846ad6f96F59c1F4F3e',
        rewardToken: '0x5F69b7Ab8F7cAb199a310Fd5A27B43Fef44ddcC0',
        abi: FarmContractVesting___FOR_ETH,
        tokenAbi: LPToken,
        vesting: 1,
        type: 'LP',
        name: 'LIQ - ETH',
        title: 'UniSwap',
        contractLink: 'https://etherscan.io/address/0xd27fab2323edb75af6f4348e3745247e77690e53',
        link: 'https://app.uniswap.org/#/add/v2/ETH/0x5F69b7Ab8F7cAb199a310Fd5A27B43Fef44ddcC0?chain=mainnet',
        linkName: 'LIQ-ETH LP'
    },
];

export const BSC_CONTRACT_LIST = [
    {
        contractUniqueName: 'Biswap_LIQ_BNB_No_Vesting',
        address: '0x787fa31b4d75E45c1B83649510a588D580Eb4f57',
        lpSwapToken: '0x99e338d7524887e93e6f24582aab9ee9845e1353',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: LIQ_FARM_CONTRACT_BSC_ABI,
        tokenAbi: LPToken,
        vesting: null,
        type: 'LP',
        name: 'LIQ - BNB',
        title: 'Biswap',
        contractLink: 'https://bscscan.com/address/0x787fa31b4d75E45c1B83649510a588D580Eb4f57',
        link: 'https://exchange.biswap.org/#/add/ETH/',
        linkName: 'LIQ-BNB LP'
    },
    {
        contractUniqueName: "Pancakeswap_LIQ_BNB_1m",
        address: '0xb944b748A35B6dFFDd924bffD85910F968943a72',
        lpSwapToken: '0x1f04bf1938a36ff0bd6f811ee5ef6822ecb6ed49',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: LIQ_FARM_CONTRACT_BSC_ABI,
        tokenAbi: LPToken,
        vesting: 1, // month
        type: 'LP',
        name: 'LIQ - BNB',
        title: 'PancakeSwap',
        contractLink: 'https://bscscan.com/address/0xb944b748A35B6dFFDd924bffD85910F968943a72',
        link: 'https://pancakeswap.finance/add/BNB/',
        linkName: 'LIQ-BNB LP'
    },
    {
        contractUniqueName: "Apeswap_LIQ_BUSD_1m",
        address: '0x7A0D4A0D88994E73a9eDCd79Ecad9097aCb1d937',
        lpSwapToken: '0x759584fe196fb2e3f5bf2eff8c2747741d5ecf59',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: LIQ_FARM_CONTRACT_BSC_ABI,
        tokenAbi: LPToken,
        vesting: 1, // month
        type: 'LP',
        name: 'LIQ - BUSD',
        title: 'ApeSwap',
        contractLink: 'https://bscscan.com/address/0x7A0D4A0D88994E73a9eDCd79Ecad9097aCb1d937',
        link: 'https://app.apeswap.finance/add/',
        linkName: 'LIQ-BUSD LP'
    },
    {
        contractUniqueName: "Biswap_LIQ_BNB_3m",
        address: '0x19646186D7364b8c1Fb60f9772d2B186EA68983D',
        lpSwapToken: '0x99e338d7524887e93e6f24582aab9ee9845e1353',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: LIQ_FARM_CONTRACT_BSC_ABI,
        tokenAbi: LPToken,
        vesting: 3, // month
        type: 'LP',
        name: 'LIQ - BNB',
        title: 'Biswap',
        contractLink: 'https://bscscan.com/address/0x19646186D7364b8c1Fb60f9772d2B186EA68983D',
        link: 'https://exchange.biswap.org/#/add/ETH/',
        linkName: 'LIQ-BNB LP'
    },
    {
        contractUniqueName: "LIQ_Single_Token_1m",
        address: '0xbeBCd3aD501Fc425a71CDC7593CEDeA324176E92',
        stakedToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: LIQ_FARM_CONTRACT_BSC_ABI,
        tokenAbi: LIQ_SINGLE_TOKEN_ABI,
        vesting: 1, // month
        type: 'LIQ',
        name: 'LIQ - Single Token',
        multiplier: 10,
        contractLink: 'https://bscscan.com/address/0xbeBCd3aD501Fc425a71CDC7593CEDeA324176E92',
        link: 'https://exchange.biswap.org/#/swap?outputCurrency=',
        linkName: 'LIQ'
    },
    {
        contractUniqueName: "LIQ_Single_Token_3m",
        address: '0x5CcD597728b1F088bFB749D9a9798ED0C6e2211C',
        stakedToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: LIQ_FARM_CONTRACT_BSC_ABI,
        tokenAbi: LIQ_SINGLE_TOKEN_ABI,
        vesting: 3, // month
        type: 'LIQ',
        name: 'LIQ - Single Token',
        multiplier: 15,
        contractLink: 'https://bscscan.com/address/0x5CcD597728b1F088bFB749D9a9798ED0C6e2211C',
        link: 'https://exchange.biswap.org/#/swap?outputCurrency=',
        linkName: 'LIQ'
    },
    {
        contractUniqueName: "LIQ_Single_Token_6m",
        address: '0xAb97B17B1547A8776299D4934fF5C8c7b247db6A',
        stakedToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: LIQ_FARM_CONTRACT_BSC_ABI,
        tokenAbi: LIQ_SINGLE_TOKEN_ABI,
        vesting: 6, // month
        type: 'LIQ',
        name: 'LIQ - Single Token',
        multiplier: 15,
        contractLink: 'https://bscscan.com/address/0xAb97B17B1547A8776299D4934fF5C8c7b247db6A',
        link: 'https://exchange.biswap.org/#/swap?outputCurrency=',
        linkName: 'LIQ'
    },
    {
        contractUniqueName: 'LIQ_Single_Token_12m',
        address: '0xc6AEd0e5B81383Fd8537f4f805492732BDf8efC0',
        stakedToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        rewardToken: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        abi: LIQ_FARM_CONTRACT_BSC_ABI,
        tokenAbi: LIQ_SINGLE_TOKEN_ABI,
        vesting: 12, // month
        type: 'LIQ',
        name: 'LIQ - Single Token',
        multiplier: 25,
        contractLink: 'https://bscscan.com/address/0xc6AEd0e5B81383Fd8537f4f805492732BDf8efC0',
        link: 'https://exchange.biswap.org/#/swap?outputCurrency=',
        linkName: 'LIQ'
    }
];

export const CRONOS_CONTRACT_LIST = [
    {
        address: '0x1c7fDE0a9619bC81b23cAEF6992288BA5547a34F',
        lpSwapToken: '0x3295007761C290741B6b363b86dF9ba3467F0754',
        rewardToken: '0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
        abi: FarmContractVesting___Cronos,
        tokenAbi: Crona_LP_Token,
        vesting: null,
        type: 'LP',
        name: 'LIQ - CRO',
        title: 'CronaSwap',
        contractLink: 'https://cronos.crypto.org/explorer/address/0x1c7fDE0a9619bC81b23cAEF6992288BA5547a34F/contracts',
        link: 'https://app.cronaswap.org/add/CRO/',
        linkName: 'LIQ-CRO LP'
    },
    {
        address: '0xc7981767f644C7F8e483DAbDc413e8a371b83079',
        stakedToken: '0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
        rewardToken: '0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
        abi: FarmContractForSingleToken,
        tokenAbi: LIQ_CRO_LP_TOKEN_ABI,
        vesting: 3, // month
        type: 'LIQ',
        name: 'LIQ - Single Token',
        multiplier: 15,
        contractLink: 'https://cronos.crypto.org/explorer/address/0xc7981767f644C7F8e483DAbDc413e8a371b83079/contracts',
        link: 'https://app.cronaswap.org/swap?outputCurrency=',
        linkName: 'LIQ'
    }
];

export const MATIC_CONTRACT_LIST = [
    {
        address: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        lpSwapToken: '0x2F5a5E6FF15B9B342e6292e2F179e7199f88922F',
        rewardToken: '0x4036f3d9c45a20f44f0b8B85dD6CA33005fF9654',
        abi: FarmContractVesting___FOR_matic,
        tokenAbi: LPToken,
        vesting: 1,
        type: 'LP',
        name: 'LIQ - MATIC',
        title: 'QuickSwap V2',
        contractLink: 'https://polygonscan.com/address/0xc7981767f644c7f8e483dabdc413e8a371b83079',
        link: 'https://quickswap.exchange/#/add/0x4036f3d9c45a20f44f0b8B85dD6CA33005fF9654/ETH/v2',
        linkName: 'LIQ-MATIC LP'
    },
];
