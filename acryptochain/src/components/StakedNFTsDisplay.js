import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Avatar, Chip, Divider } from '@mui/material';
import { getChainImageUrl } from '../constants/NetworkProviders';

/**
 * 
 * @param {*} stakedNFTList - of format [{"StakingContract":"","thumbnail":""},{"StakingContract":"","thumbnail":""}] 
 * @returns 
 */
function StakedNFTsDisplay(stakedNFTList) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            {stakedNFTList && stakedNFTList.length > 0 && <h4>Staked NFTs:</h4>}
            <Grid container spacing={2}>
                {stakedNFTList && stakedNFTList.map((singleStakedNFT, index) => {

                    const rewardDebtEther = singleStakedNFT.userInfo.rewardDebt / 1e18
                    const datlastDepositedDate = new Date(Number(singleStakedNFT.userInfo.lastDepositedAt) * 1000).toISOString('en-US');
                    const chainImageURL = getChainImageUrl(singleStakedNFT.chain)

                    return <Grid key={'nft_grid_' + index} xs={12} md={6} lg={4}>
                        <Item>
                            <img key={"nft_index_" + index} src={singleStakedNFT.thumbnail} alt="Your Staked NFT" height={200} />
                            <Divider variant="middle" />
                            <Chip variant="filled"   color="success" sx={{ margin: '1px' }}label={singleStakedNFT.chain} avatar={<Avatar alt="Natacha" src={chainImageURL} />}/>
                            <Chip variant='outlined' color='success' sx={{ margin: '1px' }} label={'ID:' + singleStakedNFT.stakedNFTIDs} ></Chip>
                            <Chip variant='outlined' color='success' sx={{ margin: '1px' }} label={'Count:' + singleStakedNFT.userInfo.amount}></Chip>
                            <Chip variant='outlined' color='success' sx={{ margin: '1px' }} label={'Paid:' + Number(rewardDebtEther).toFixed(2) + ' ' + singleStakedNFT.tokenSymbol}></Chip>
                            <Chip variant='outlined' color='success' sx={{ margin: '1px' }} label={'Pending:' + singleStakedNFT.pendingRewards + ' ' + singleStakedNFT.tokenSymbol}></Chip>
                            <br /><font size="1" color="gray"> Last Staked: {datlastDepositedDate}</font>
                        </Item></Grid>
                })}
            </Grid>
        </>
    )
}

export default StakedNFTsDisplay