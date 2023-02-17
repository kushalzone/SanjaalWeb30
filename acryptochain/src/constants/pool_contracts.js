/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity. 
 */

export function getBSCPoolContracts() {
  //Liquidus 12 Month Pool Contract
  const contract12m = "0xc6AEd0e5B81383Fd8537f4f805492732BDf8efC0";
  
  //Liquidus 6 Month Pool Contract
  const contract6m = "0xAb97B17B1547A8776299D4934fF5C8c7b247db6A";

  //Liquidus 3 Month Pool Contract
  const contract3m = "0x5CcD597728b1F088bFB749D9a9798ED0C6e2211C";
  
  //Liquidus 1 Month Pool Contract
  const contract1m = "0xbeBCd3aD501Fc425a71CDC7593CEDeA324176E92";

  // Liquidus   LIQ-BNB Biswap
  const liqBNBBiswap = "0x19646186D7364b8c1Fb60f9772d2B186EA68983D";

  // Liquidus   LIQ-BNB Biswap
  const liqBNBPancakeswap = "0xb944b748A35B6dFFDd924bffD85910F968943a72";

  //Liquidus LIQ-BUSD  Apeswap
  const liqBUSDApeswap = "0x7A0D4A0D88994E73a9eDCd79Ecad9097aCb1d937";

  return { contract12m, contract6m, contract3m, contract1m, liqBNBBiswap, liqBNBPancakeswap, liqBUSDApeswap };
}

export function getEthPoolContracts() {
  return {};
}

export function getMaticPoolContracts() {
  return {};
}