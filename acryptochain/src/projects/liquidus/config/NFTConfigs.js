import NFTHelmetContractAbi from '../abis/bsc/nft_helmet_contract_abi.json'
import LIQSingleTokenAbi from '../abis/bsc/liq_single_token_abi.json'
import NFTHelmetStakingContractAbi from '../abis/bsc/nft_helmet_staking_contract_abi.json'
import NFTHelmetStakingContractCronosAbi from '../abis/cronos/nft_helmet_contract_cronos_abi.json'
import BSC_LIQ_SINGLE_TOKEN_ABI from '../abis/bsc/liq_single_token_abi.json'
import CRONOS_LIQ_SINGLE_TOKEN_ABI from '../abis/cronos/cronos_liq_single_token_abi.json'
import { BSC_NODE_PROVIDER, CRONOS_NODE_PROVIDER, BSC, CRO, BSC_IMAGE, ETH_IMAGE, CRO_IMAGE, MATIC_IMAGE } from '../../../constants/NetworkProviders';

export const BSC_NFT_Contract = {
    address: '0x81290EB62302620Ea8633967d08F25d46BCFa2F1',
    abi: NFTHelmetContractAbi
}

//TODO: Duplicated here, make is common.
export const BSC_LIQ_SINGLE_TOKEN_CONTRACT = {
    address: '0xc7981767f644C7F8e483DAbDc413e8a371b83079',
    abi: BSC_LIQ_SINGLE_TOKEN_ABI
}

export const CRONOS_LIQ_SINGLE_TOKEN_CONTRACT = {
    address: '0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
    abi: CRONOS_LIQ_SINGLE_TOKEN_ABI
}

export const BSC_NFT_LIST = [
    {
        chain: BSC,
        nftID: 1,
        netId: 56,
        type: 'Helmet',
        name: 'LIQ Helmet',
        smallImage: 'https://liquidus.finance/LIQNFT/LIQNFT1_1200.png',
        fullImage: 'https://liquidus.finance/LIQNFT/LIQNFT1_full.png',
        token2nd: 'BUSD',
        liqContract: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        token2ndContract: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        nftContract: '0x81290EB62302620Ea8633967d08F25d46BCFa2F1',
        nftStakingContract: '0xd6499f34b7657f88B95c992D1C2Afc41fc0aAca6',
        nftAbi: NFTHelmetContractAbi,
        nftStakingAbi: NFTHelmetStakingContractAbi,
        liqTokenAbi: LIQSingleTokenAbi,
        token2ndAbi: LIQSingleTokenAbi,
        endDate: '2022-12-04',
        netUrl: 'https://bscscan.com',
    },
    {
        chain: BSC,
        nftID: 2,
        netId: 56,
        type: 'Gate',
        name: 'Gate To Liquidus',
        smallImage: 'https://liquidus.finance/LIQNFT/LIQNFT2_1200.png',
        fullImage: 'https://liquidus.finance/LIQNFT/LIQNFT2_full.png',
        token2nd: 'BUSD',
        liqContract: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        token2ndContract: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        nftContract: '0x81290EB62302620Ea8633967d08F25d46BCFa2F1',
        nftStakingContract: '0x2a09470aF47becCfD97885835C8dC421550ea8A4',
        nftAbi: NFTHelmetContractAbi,
        nftStakingAbi: NFTHelmetStakingContractAbi,
        liqTokenAbi: LIQSingleTokenAbi,
        token2ndAbi: LIQSingleTokenAbi,
        endDate: '2022-12-04',
        netUrl: 'https://bscscan.com',
    },
    {
        chain: BSC,
        nftID: 3,
        netId: 56,
        type: 'Temple',
        name: 'Liquidus Temple',
        smallImage: 'https://liquidus.finance/LIQNFT/LIQNFT3_1200.png',
        fullImage: 'https://liquidus.finance/LIQNFT/LIQNFT3_full.png',
        token2nd: 'BUSD',
        liqContract: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        token2ndContract: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        nftContract: '0x81290EB62302620Ea8633967d08F25d46BCFa2F1',
        nftStakingContract: '0x31771217B3183BE23d4ec89A930A8F844614E054',
        nftAbi: NFTHelmetContractAbi,
        nftStakingAbi: NFTHelmetStakingContractAbi,
        liqTokenAbi: LIQSingleTokenAbi,
        token2ndAbi: LIQSingleTokenAbi,
        endDate: '2022-12-04',
        netUrl: 'https://bscscan.com',
    },
    {
        chain: BSC,
        nftID: 4,
        netId: 56,
        type: 'poseidon-1',
        name: 'Poseidon I',
        smallImage: 'https://liquidus.finance/LIQNFT/LIQNFT4_1200.png',
        fullImage: 'https://liquidus.finance/LIQNFT/LIQNFT4_full.png',
        token2nd: 'BUSD',
        liqContract: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        token2ndContract: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        nftContract: '0x81290EB62302620Ea8633967d08F25d46BCFa2F1',
        nftStakingContract: '0xB5c2058FD2075F4Ce8406B2AF51d2a08c4A02f2D',
        nftAbi: NFTHelmetContractAbi,
        nftStakingAbi: NFTHelmetStakingContractAbi,
        liqTokenAbi: LIQSingleTokenAbi,
        token2ndAbi: LIQSingleTokenAbi,
        endDate: '2022-12-15',
        netUrl: 'https://bscscan.com',
    },
    {
        chain: BSC,
        nftID: 5,
        netId: 56,
        type: 'poseidon-2',
        name: 'Poseidon II',
        smallImage: 'https://liquidus.finance/LIQNFT/LIQNFT5_1200.png',
        fullImage: 'https://liquidus.finance/LIQNFT/LIQNFT5_full.png',
        token2nd: 'BUSD',
        liqContract: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        token2ndContract: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        nftContract: '0x81290EB62302620Ea8633967d08F25d46BCFa2F1',
        nftStakingContract: '0x9992D7d7523214bcFCCe0e15E9365Db5De567D6B',
        nftAbi: NFTHelmetContractAbi,
        nftStakingAbi: NFTHelmetStakingContractAbi,
        liqTokenAbi: LIQSingleTokenAbi,
        token2ndAbi: LIQSingleTokenAbi,
        endDate: '2022-12-15',
        netUrl: 'https://bscscan.com',
    },
    {
        chain: BSC,
        nftID: 6,
        netId: 56,
        type: 'poseidon-3',
        name: 'Poseidon III',
        smallImage: 'https://liquidus.finance/LIQNFT/LIQNFT6_1200.png',
        fullImage: 'https://liquidus.finance/LIQNFT/LIQNFT6_full.png',
        token2nd: 'BUSD',
        liqContract: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        token2ndContract: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        nftContract: '0x81290EB62302620Ea8633967d08F25d46BCFa2F1',
        nftStakingContract: '0x1512A82d2ADDceff313C2BF326c84D63caa752E2',
        nftAbi: NFTHelmetContractAbi,
        nftStakingAbi: NFTHelmetStakingContractAbi,
        liqTokenAbi: LIQSingleTokenAbi,
        token2ndAbi: LIQSingleTokenAbi,
        endDate: '2022-12-15',
        netUrl: 'https://bscscan.com',
    },
    {
        chain: BSC,
        nftID: 7,
        netId: 56,
        type: 'early-adopter',
        name: 'LIQ Early Adopter',
        smallImage: 'https://liquidus.finance/LIQNFT/LIQNFT7_1200.png',
        fullImage: 'https://liquidus.finance/LIQNFT/LIQNFT7_full.png',
        token2nd: 'BUSD',
        liqContract: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
        token2ndContract: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        nftContract: '0x81290EB62302620Ea8633967d08F25d46BCFa2F1',
        nftStakingContract: '0x22015f8F09aa3c04681c748ab69effE72E3f0013',
        nftAbi: NFTHelmetContractAbi,
        nftStakingAbi: NFTHelmetStakingContractAbi,
        liqTokenAbi: LIQSingleTokenAbi,
        token2ndAbi: LIQSingleTokenAbi,
        endDate: '2022-12-24',
        netUrl: 'https://bscscan.com',
    },
]

export const CRONOS_NFT_LIST = [
    {
        chain: CRO,
        nftID: 8,
        netId: 25,
        type: 'absolute',
        name: 'LIQ “Meta” Helmet (absolute)',
        smallImage: 'https://liquidus.finance/LIQNFT/LIQNFT8_1200.png',
        fullImage: 'https://liquidus.finance/LIQNFT/LIQNFT8_full.png',
        token2nd: 'USDC',
        liqContract: '0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
        token2ndContract: '0xc21223249ca28397b4b6541dffaecc539bff0c59',
        nftContract: '0xB91c9bf872D3193ebc7ecD7DE6c1aD579f16013d',
        nftStakingContract: '0xAc66d660294A3a15336B5C4Dde77523dDF66c545',
        nftAbi: NFTHelmetContractAbi,
        nftStakingAbi: NFTHelmetStakingContractCronosAbi,
        liqTokenAbi: LIQSingleTokenAbi,
        token2ndAbi: LIQSingleTokenAbi,
        endDate: '2023-02-07',
        netUrl: 'https://cronoscan.com',
        liqRewards: 1000,
    },
    {
        chain: CRO,
        nftID: 9,
        netId: 25,
        type: 'extension',
        name: 'LIQ “Meta” Helmet (extension)',
        smallImage: 'https://liquidus.finance/LIQNFT/LIQNFT9_1200.png',
        fullImage: 'https://liquidus.finance/LIQNFT/LIQNFT9_full.png',
        token2nd: 'USDC',
        liqContract: '0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
        token2ndContract: '0xc21223249ca28397b4b6541dffaecc539bff0c59',
        nftContract: '0xB91c9bf872D3193ebc7ecD7DE6c1aD579f16013d',
        nftStakingContract: '0x36D208a540E32FA77BF2592c3d06Ae30e6A63295',
        nftAbi: NFTHelmetContractAbi,
        nftStakingAbi: NFTHelmetStakingContractCronosAbi,
        liqTokenAbi: LIQSingleTokenAbi,
        token2ndAbi: LIQSingleTokenAbi,
        endDate: '2023-02-07',
        netUrl: 'https://cronoscan.com',
        liqRewards: 500,
    },
    {
        chain: CRO,
        nftID: 10,
        netId: 25,
        type: 'origins',
        name: 'LIQ “Meta” Helmet (origins)',
        smallImage: 'https://liquidus.finance/LIQNFT/LIQNFT10_1200.png',
        fullImage: 'https://liquidus.finance/LIQNFT/LIQNFT10_full.png',
        token2nd: 'USDC',
        liqContract: '0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
        token2ndContract: '0xc21223249ca28397b4b6541dffaecc539bff0c59',
        nftContract: '0xB91c9bf872D3193ebc7ecD7DE6c1aD579f16013d',
        nftStakingContract: '0xFB3de800424e365F45666d30823A945BE2a6c4eD',
        nftAbi: NFTHelmetContractAbi,
        nftStakingAbi: NFTHelmetStakingContractCronosAbi,
        liqTokenAbi: LIQSingleTokenAbi,
        token2ndAbi: LIQSingleTokenAbi,
        endDate: '2023-02-07',
        netUrl: 'https://cronoscan.com',
        liqRewards: 200,
    },
]

export const LIQ_NFT_CONTRACTS = [
    {
        key: 1,
        chain: BSC,
        contractList: BSC_NFT_LIST,
        provider: BSC_NODE_PROVIDER,
        singleTokenAbi: BSC_LIQ_SINGLE_TOKEN_ABI,
        singleTokenAddress: BSC_LIQ_SINGLE_TOKEN_CONTRACT.address
    },
    {
        key: 2,
        chain: CRO,
        contractList: CRONOS_NFT_LIST,
        provider: CRONOS_NODE_PROVIDER,
        singleTokenAbi: CRONOS_LIQ_SINGLE_TOKEN_CONTRACT.abi,
        singleTokenAddress: CRONOS_LIQ_SINGLE_TOKEN_CONTRACT.address
    }
]