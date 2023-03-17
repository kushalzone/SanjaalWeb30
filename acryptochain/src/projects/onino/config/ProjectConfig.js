import ONI_BUSD_ABI from "../abis/bsc/oni_busd_abi.json";
import ONI_BNB_ABI from "../abis/bsc/oni_bnb_abi.json";
import ONI_BNB_PRICE_CONTRACT_ABI from '../abis/bsc/oni_bnb_lp_contract.json'
import ONI_FARM_SINGLE_TOKEN_ABI from "../abis/bsc/oni_farm_single_token_abi.json";
import BSC_ONI_SINGLE_TOKEN_ABI from "../abis/bsc/oni_single_token_abi.json";

import { bscNet} from '../../../constants/networks'
import { BSC_NODE_PROVIDER,BSC, BSC_IMAGE,} from '../../../constants/NetworkProviders';

export const PROJECT_META = {
    name: 'Onino',
    logoUrl: '/images/logo_onino.png',
    socials: [
        {name: 'Website', link: 'https://onino.io'},
        {name: 'Twitter', link: 'https://twitter.com/onino_io'},
        {name: 'Telegram', link: 'https://t.me/oninoofficial'},
        {name: 'Instagram', link: ''},
        {name: 'Reddit', link: 'https://www.reddit.com/r/onino_io/'},
        {name: 'Email', link: 'mailto:team@onino.io'},
        {name: 'Blog', link: 'https://medium.com/@OninoOfficial'},
        {name: 'Github', link: 'https://github.com/ONINO-IO'},
        {name: 'Whitepaper', link: 'https://www.onino.io/documents/Onino_Litepaper.pdf'},
        {name: 'CMC', link: 'https://coinmarketcap.com/currencies/oni-token/'},
        {name: 'CoinGecko', link: 'https://www.coingecko.com/en/coins/oni-token/'},
        
    ]
}

export const BSC_ONI_SINGLE_TOKEN_CONTRACT = {
    address: '0xea89199344a492853502a7a699cc4230854451b8',
    abi: BSC_ONI_SINGLE_TOKEN_ABI
}

export const ONI_BNB_CONTRACT = {
  address: '0xcCD9af13Aa5132e36dBE524DE6Acc26405209Da2',
  abi: ONI_BNB_ABI
}

export const ONI_BNB_PRICE_CONTRACT = {
  address: '0x225aba62425a28f5e19eb9e2df2a53e161061e29',
  abi: ONI_BNB_PRICE_CONTRACT_ABI
}


export const BSC_CONTRACT_LIST = [
  {
    chain: 'BSC',
    provider: BSC_NODE_PROVIDER,
    contractUniqueName: 'ONI-BNB LP Farming',    
    vestingPeriodInMonths: 1,
    type: "MULTIPLE",
    address: "0xcCD9af13Aa5132e36dBE524DE6Acc26405209Da2",
    abi: ONI_BNB_ABI,
    secondToken: "BNB",
    tokenAddress: "0x225AbA62425a28F5e19Eb9E2DF2A53E161061e29",
    rewardTokenAddress: "0xea89199344a492853502a7A699Cc4230854451B8",
    tokenAbi: BSC_ONI_SINGLE_TOKEN_ABI,
    contractLink:"https://bscscan.com/address/0xcCD9af13Aa5132e36dBE524DE6Acc26405209Da2#readContract",
    buyTokenLink:"https://pancakeswap.finance/add/BNB/0xea89199344a492853502a7A699Cc4230854451B8",
    addressExplorer: bscNet[0].addressExplorerPrefixURL
  },
  {
    chain: 'BSC',
    provider: BSC_NODE_PROVIDER,
    contractUniqueName: 'ONI-BUSD LP Farming',    
    vestingPeriodInMonths: 1,
    type: "LP",
    address: "0x94c62870C8234F4DB1629e7378fBCA46402c34f8",
    abi: ONI_BUSD_ABI,
    secondToken: "BUSD",
    tokenAddress: "0xe167338c0fd6f1a57ce6a65139ed68d7aebde929",
    rewardTokenAddress: "0xea89199344a492853502a7A699Cc4230854451B8",
    tokenAbi: BSC_ONI_SINGLE_TOKEN_ABI,
    contractLink:"https://bscscan.com/address/0x94c62870C8234F4DB1629e7378fBCA46402c34f8#readContract",
    buyTokenLink:"https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0xea89199344a492853502a7A699Cc4230854451B8",
  },
  {
    chain: 'BSC',
    provider: BSC_NODE_PROVIDER,
    contractUniqueName: 'ONI STAKING - 1m POOL',    
    vestingPeriodInMonths: 1,
    type: "ONI",
    address: "0x1b581E15421cE65888316939116139519a77dAAF",
    abi: ONI_FARM_SINGLE_TOKEN_ABI,
    tokenAddress: "0xea89199344a492853502a7a699cc4230854451b8",
    rewardTokenAddress: "0xea89199344a492853502a7a699cc4230854451b8",
    tokenAbi: BSC_ONI_SINGLE_TOKEN_ABI,
    contractLink:"https://bscscan.com/address/0x1b581E15421cE65888316939116139519a77dAAF#readContract",
    buyTokenLink:"https://pancakeswap.finance/swap?outputCurrency=0xea89199344a492853502a7a699cc4230854451b8",
    addressExplorer: bscNet[0].addressExplorerPrefixURL
  },
  {
    chain: 'BSC',
    provider: BSC_NODE_PROVIDER,
    contractUniqueName: 'ONI STAKING - 3m POOL',    
    vestingPeriodInMonths: 3,
    type: "ONI",
    address: "0x415146A17F25ac2CC4c51E7b2bEEF9a6E32439a5",
    abi: ONI_FARM_SINGLE_TOKEN_ABI,
    tokenAddress: "0xea89199344a492853502a7a699cc4230854451b8",
    rewardTokenAddress: "0xea89199344a492853502a7a699cc4230854451b8",
    tokenAbi: BSC_ONI_SINGLE_TOKEN_ABI,
    contractLink:"https://bscscan.com/address/0x415146A17F25ac2CC4c51E7b2bEEF9a6E32439a5#readContract",
    buyTokenLink:"https://pancakeswap.finance/swap?outputCurrency=0xea89199344a492853502a7a699cc4230854451b8",
    addressExplorer: bscNet[0].addressExplorerPrefixURL
  },
  {
    chain: 'BSC',
    provider: BSC_NODE_PROVIDER,
    contractUniqueName: 'ONI STAKING - 12m POOL',    
    vestingPeriodInMonths: 3,
    type: "ONI",
    address: "0xBCCd7c12f570676984CA66F70e2E98809C7F13c3",
    abi: ONI_FARM_SINGLE_TOKEN_ABI,
    tokenAddress: "0xea89199344a492853502a7a699cc4230854451b8",
    rewardTokenAddress: "0xea89199344a492853502a7a699cc4230854451b8",
    tokenAbi: BSC_ONI_SINGLE_TOKEN_ABI,
    contractLink:"https://bscscan.com/address/0xBCCd7c12f570676984CA66F70e2E98809C7F13c3#readContract",
    buyTokenLink:"https://pancakeswap.finance/swap?outputCurrency=0xea89199344a492853502a7a699cc4230854451b8",
    addressExplorer: bscNet[0].addressExplorerPrefixURL
  },
];

export const ONI_CONTRACTS = [
    {
        key: 1,
        chain: BSC,
        contractList: BSC_CONTRACT_LIST,
        provider: BSC_NODE_PROVIDER,
        singleTokenAbi: BSC_ONI_SINGLE_TOKEN_CONTRACT.abi,
        singleTokenAddress: BSC_ONI_SINGLE_TOKEN_CONTRACT.address
    },
]

export const SUPPORTED_NETWORKS_FOR_ONINO = [
    { chain: BSC, chainImageUrl: BSC_IMAGE },
]

export const tokenBNBContract = ONI_BNB_PRICE_CONTRACT

