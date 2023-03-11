/**
 * Ethereum Main Net
 */
export const ethNet = [{
    chainId: '0x1',
    chainName: 'Ethereum Mainnet',
    chainNameShort: 'ETH',
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: [
        //'https://eth.llamarpc.com',
        'https://mainnet.eth.aragon.network/',
        'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
    ],
    blockExplorerUrls: ['https://etherscan.io'],
    addressExplorerPrefixURL: 'https://etherscan.io/address/'
}];

/**
 * Binance Smart Chain
 */
export const bscNet = [{
    chainId: '0x38',
    chainName: 'Binance Smart Chain',
    chainNameShort: 'BSC',
    nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com/'],
    addressExplorerPrefixURL: 'https://bscscan.com/address/'
}];

/**
 * Cronos Network
 */
export const cronosNet = [{
    chainId: '0x19',
    chainName: 'Cronos',
    chainNameShort: 'CRO',
    nativeCurrency: {
        name: 'CRO',
        symbol: 'CRO',
    },
    rpcUrls: ['https://evm.cronos.org/'],
    blockExplorerUrls: ['https://cronoscan.com/','https://cronos.crypto.org/explorer/'],
    addressExplorerPrefixURL: 'https://cronoscan.com/address/'
}];

/**
 * Polygon / Matic Network
 */
export const polygonNet = [{
    chainId: '137',
    chainName: 'Polygon',
    chainNameShort: 'MATIC',
    nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18
    },
    rpcUrls: [
        'https://polygon-rpc.com/', 
        'https://rpc-mainnet.maticvigil.com'],
    blockExplorerUrls: ['https://polygonscan.com/address/'],
    addressExplorerPrefixURL: 'https://polygonscan.com/address/'
}];