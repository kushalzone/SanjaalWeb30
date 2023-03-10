/**
 * This method takes poolHarvestResult data and sorts it by the chain
 * @param {*} poolHarvestResult 
 * @returns 
 */
export function SortByChain(poolHarvestResult) {
    return poolHarvestResult.sort((a, b) => {
        if (a.chain > b.chain)
            return 1;
        if (b.chain > a.chain)
            return -1;
        return 0;
    });
}

export function SortByWallet(poolHarvestResult) {
    return poolHarvestResult.sort((a, b) => {
        if (a.walletAddress > b.walletAddress)
            return 1;
        if (b.walletAddress > a.walletAddress)
            return -1;
        return 0;
    });
}

export function FullSort(poolHarvestResult) {
    return SortByChain(SortByWallet(poolHarvestResult))
}


