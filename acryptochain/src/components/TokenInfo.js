import { bscNet } from "../constants/networks";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function tokenInfoTable(address, name, symbol, totalSupply, decimals, owner) {
  return <Card sx={{ border: '1', background: 'black', color: 'white' }}>
    <CardContent>
      <Typography gutterBottom variant="p" component="p">
        Symbol: {symbol} | Name: {name} | Total Supply: {totalSupply} | Decimals: {decimals} | Owner: {String(owner).substring(0, 10) + '...'} | Address: <a href={bscNet[0].addressExplorerPrefixURL + address} target='_blank' rel='noreferrer'>{address}</a>
      </Typography>
    </CardContent>
  </Card>

}