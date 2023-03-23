import { bscNet, cronosNet, ethNet, polygonNet } from "./networks"

/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity. 
 */
export const BSC_NODE_PROVIDER = bscNet[0].rpcUrls[0]
export const BSC = bscNet[0].chainNameShort
export const BSC_IMAGE = bscNet[0].chainImageUrl

export const ETH = ethNet[0].chainNameShort
export const ETH_NODE_PROVIDER = ethNet[0].rpcUrls[0]
export const ETH_IMAGE = ethNet[0].chainImageUrl

export const CRO = cronosNet[0].chainNameShort
export const CRONOS_NODE_PROVIDER = cronosNet[0].rpcUrls[0]
export const CRO_IMAGE = cronosNet[0].chainImageUrl


export const MATIC = polygonNet[0].chainNameShort;
export const MATIC_NODE_PROVIDER = polygonNet[0].rpcUrls[0]
export const MATIC_IMAGE = polygonNet[0].chainImageUrl

export const CHAIN_INFO = [
    {network: BSC, chainImageUrl: BSC_IMAGE},
    {network: ETH, chainImageUrl: ETH_IMAGE},
    {network: MATIC, chainImageUrl: MATIC_IMAGE},
    {network: CRO, chainImageUrl: CRO_IMAGE},
]

export function getChainImageUrl(network) {
    for (let i = 0; i < CHAIN_INFO.length; i++) {
        if (CHAIN_INFO[i].network === network) {
            return CHAIN_INFO[i].chainImageUrl;
        }
    }
    return null; // If the network is not found in the array
}
