/**
 * Ethereum Main Net
 */
export const ethNet = [{
    chainId: '0x1',
    chainName: 'Ethereum Mainnet',
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: [
        'https://mainnet.eth.aragon.network/',
        'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
    ],
    blockExplorerUrls: ['https://etherscan.io'],
}];

/**
 * Binance Smart Chain
 */
export const bscNet = [{
    chainId: '0x38',
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com/'],
}];

/**
 * Cronos Network
 */
export const cronosNet = [{
    chainId: '0x19',
    chainName: 'Cronos',
    nativeCurrency: {
        name: 'CRO',
        symbol: 'CRO',
    },
    rpcUrls: ['https://evm-cronos.crypto.org/'],
    blockExplorerUrls: ['https://cronos.crypto.org/explorer/'],
}];

/**
 * Polygon / MAtic Network
 */
export const polygonNet = [{
    chainId: '137',
    chainName: 'Polygon',
    nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18
    },
    rpcUrls: [
        'https://polygon-rpc.com/', 
        'https://rpc-mainnet.maticvigil.com'],
    blockExplorerUrls: ['https://polygonscan.com/address/'],
}];