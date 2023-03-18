/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since Februrary 2023
 * 
 * Use it at your own risk. Author provides no liablity of any sort.
 */
import React, { PureComponent } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default class Footer extends PureComponent {
    render() {
        return (
            <Card sx={{ border: '1', background: 'black', color: 'white' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        ABOUT THIS TOOL
                    </Typography>
                    <Button sx={{mr:'1em'}} size="small" variant="outlined" href='https://github.com/sanjaalcorps/SanjaalWeb30/blob/master/ReleaseNotes.MD'>Release Notes</Button>
                    <Button sx={{mr:'1em'}} size="small" variant="outlined" href='https://github.com/sanjaalcorps/SanjaalWeb30/'>Source Code</Button>
                    <Button sx={{mr:'1em'}} size="small" variant="outlined" href='https://www.acryptochain.com'>ACryptoChain Blog</Button>
                    <p/>{'[Version: 0.12, Released on : March 18th 2023]'}
                    <Typography gutterBottom variant='p' component={'em'} color='gray' fontSize={'small'}>
                        <p/>This tool is developed by Sanjaal Corps with security of the user data in mind. We never collect or ask for your seed phrase or private key. We only use public wallet address input by the user to fetch information about it. 
                        There are no wallets to connect, no approvals of any kind needed. We also don't require users to do a manual switching of Networks. We don't collect your ip address or location. On top of that the source code is released publicly on github.
                    </Typography> <font color="red">&hearts;&hearts;</font>
                </CardContent>
            </Card>
        )
    }
}
