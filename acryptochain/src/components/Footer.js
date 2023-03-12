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
                    <Button size="small" href='https://github.com/sanjaalcorps/SanjaalWeb30/blob/master/ReleaseNotes.MD'>Release Notes</Button>
                    <Button size="small" href='https://github.com/sanjaalcorps/SanjaalWeb30/'>Source Code</Button>
                    {'[Version: 0.7, Released on : March 12th 2023]'}
                </CardContent>
            </Card>
        )
    }
}
