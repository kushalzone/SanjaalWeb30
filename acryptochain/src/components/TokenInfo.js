export function tokenInfoTable(address, name, symbol, totalSupply, decimals, owner) {
  return <div>
    <h5>Symbol: {symbol} | Name: {name} | Total Supply: {totalSupply} | Decimals: {decimals}</h5>
    <h5>Token Address: {address} | Owner: {owner}</h5>
  </div>

}