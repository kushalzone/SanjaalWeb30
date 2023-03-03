import { bscNet, cronosNet, ethNet, polygonNet } from "./networks";

/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity. 
 */
export const BSC_NODE_PROVIDER = bscNet[0].rpcUrls[0];
export const BSC = bscNet[0].chainNameShort;

export const ETH = ethNet[0].chainNameShort;
export const ETH_NODE_PROVIDER = ethNet[0].rpcUrls[0];

export const CRO = cronosNet[0].chainNameShort;
export const CRONOS_NODE_PROVIDER = cronosNet[0].rpcUrls[0] ;

export const MATIC = polygonNet[0].chainNameShort;
export const MATIC_NODE_PROVIDER = polygonNet[0].rpcUrls[0];
