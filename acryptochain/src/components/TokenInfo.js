import { bscNet } from "../constants/networks";

export function tokenInfoTable(address, name, symbol, totalSupply, decimals, owner) {
  return <div>
    Symbol: {symbol} | Name: {name} | Total Supply: {totalSupply} | Decimals: {decimals} | Owner: {String(owner).substring(0, 10) + '...'} | Address: <a href={bscNet[0].addressExplorerPrefixURL + address} target='_blank' rel='noreferrer'>{address}</a> 
  </div>
}