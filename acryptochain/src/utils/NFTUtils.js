const Web3 = require('web3');

export async function getStakedNFTs(contractAddress, nftContractABI, thumbnailImage,  walletAddress, nodeProvider, chain, tokenSymbol, setStakedNFTList) {

    if (contractAddress === null || nftContractABI === null) {return}

    const web3 = new Web3(nodeProvider);
    const contractInstance = await new web3.eth.Contract(nftContractABI, contractAddress);

    if (contractInstance) {
        const userInfo = await contractInstance.methods.userInfo(walletAddress).call();
        const stakedNFTIDs = await contractInstance.methods.getStakedNftIDs(walletAddress).call();
        const pendingRewards = await contractInstance.methods.pendingReward(walletAddress).call();
        const pendingRewardsEther = Number(Web3.utils.fromWei(pendingRewards, 'ether')).toFixed() || 0;
        if (userInfo && userInfo.lastDepositedAt > 0) {
            const stakedNFTs = {StakingContract: contractAddress, thumbnail: thumbnailImage, userInfo: userInfo, stakedNFTIDs: stakedNFTIDs, pendingRewards: pendingRewardsEther, tokenSymbol: tokenSymbol, chain: chain }
            setStakedNFTList(prevState => [...prevState, stakedNFTs]);
        }
    }
}

// export async function getOwnedNFTs(nftContractABI, walletAddress, contractAddress) {
//     const contractInstance = new web3.eth.Contract(nftContractABI, contractAddress);
//     return contractInstance.methods.balanceOf(walletAddress).call()
//       .then(balance => {
//         if (balance > 0) {
//           console.log('Balance' +  balance)
//           const nftIds = [];
//           for (let i = 0; i < balance; i++) {
//             contractInstance.methods.tokenOfOwnerByIndex(walletAddress, i).call()
//               .then(nftId => {
//                 nftIds.push(nftId);
//               });
//           }
//           return nftIds;
//         } else {
//           return [];
//         }
//       })
//       .catch(error => {
//         console.error(error);
//         return [];
//       });
//   }

