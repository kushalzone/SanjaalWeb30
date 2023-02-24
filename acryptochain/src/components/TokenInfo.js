export function tokenInfoTable(address, name, symbol, totalSupply, decimals, owner) {
  return <div>
    Symbol: <b>{symbol}</b> | Name: <b>{name}</b> | Total Supply: <b>{totalSupply}</b> | Decimals: <b>{decimals}</b> | Address: <b>{String(address).substring(0, 10) + '...'}</b> | Owner: <b>{String(owner).substring(0, 10) + '...'}</b>
  </div>
}