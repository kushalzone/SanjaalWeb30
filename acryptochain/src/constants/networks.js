export const ethNet = [{
    chainId: '0x1',
    chainName: 'Ethereum Mainnet',
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://etherscan.io'],
}];

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

export const cronosNet = [{
    chainId: '0x19',
    chainName: 'Cronos',
    nativeCurrency: {
        name: 'CRO',
        symbol: 'CRO',
        // decimals: 18
    },
    rpcUrls: ['https://evm-cronos.crypto.org/'],
    blockExplorerUrls: ['https://cronos.crypto.org/explorer/'],
}];

export const polygonNet = [{
    chainId: '137',
    chainName: 'Polygon',
    nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18
    },
    rpcUrls: ['https://polygon-rpc.com/'],
    blockExplorerUrls: ['https://polygonscan.com/address/'],
}];