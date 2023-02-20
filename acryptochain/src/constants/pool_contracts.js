/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity. 
 */

import { BSC_CONTRACT_LIST } from "./liq_app_constants";

export function getBSCPoolContracts() {
  const address_contract12m = BSC_CONTRACT_LIST.find( item => item.contractUniqueName === "LIQ_Single_Token_12m").address;
  const address_contract6m = BSC_CONTRACT_LIST.find( item => item.contractUniqueName === "LIQ_Single_Token_6m").address;
  const address_contract3m = BSC_CONTRACT_LIST.find( item => item.contractUniqueName === "LIQ_Single_Token_3m").address;
  const address_contract1m = BSC_CONTRACT_LIST.find( item => item.contractUniqueName === "LIQ_Single_Token_1m").address;
  const address_liqBNBBiswap1m = BSC_CONTRACT_LIST.find( item => item.contractUniqueName === "Biswap_LIQ_BNB_No_Vesting").address;

  // const address_liqBNBBiswap3m = "0x19646186D7364b8c1Fb60f9772d2B186EA68983D";
  // const address_liqBNBPancakeswap = "0xb944b748A35B6dFFDd924bffD85910F968943a72";
  // const address_liqBUSDApeswap = "0x7A0D4A0D88994E73a9eDCd79Ecad9097aCb1d937";
  const address_liqBNBBiswap3m = BSC_CONTRACT_LIST.find( item => item.contractUniqueName === "Biswap_LIQ_BNB_3m").address;
  const address_liqBNBPancakeswap = BSC_CONTRACT_LIST.find( item => item.contractUniqueName === "Pancakeswap_LIQ_BNB_1m").address;
  const address_liqBUSDApeswap = BSC_CONTRACT_LIST.find( item => item.contractUniqueName === "Apeswap_LIQ_BUSD_1m").address;

  return { 
    address_contract12m: address_contract12m, 
    address_contract6m: address_contract6m, 
    address_contract3m: address_contract3m, 
    address_contract1m: address_contract1m, 
    address_liqBNBBiswap3m: address_liqBNBBiswap3m, 
    address_liqBNBBiswap1m: address_liqBNBBiswap1m, 
    address_liqBNBPancakeswap: address_liqBNBPancakeswap, 
    address_liqBUSDApeswap: address_liqBUSDApeswap };
}

export function getEthPoolContracts() {
  return [{"name":"abc"}];
}

export function getMaticPoolContracts() {
  return {};
}

export function getCronosPoolContracts() {
  return [
    {name:'LIQ-CRO Cronoswap', vestingPeriod:'None', contractAddress:'0x1c7fDE0a9619bC81b23cAEF6992288BA5547a34F'},
    {name:'LIQ Single Token', vestingPeriod:'3 months', contractAddress:'0xc7981767f644C7F8e483DAbDc413e8a371b83079'},
    
];
}