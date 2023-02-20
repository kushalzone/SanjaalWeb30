/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * @since Februrary 2023
 * 
 * Interfaces used by the application.
 * Use it at your own risk. Author provides no liablity. 
 */
export class PoolHarvestResult {
  constructor(chain, walletAddress, poolName, harvestReadyTokens, userInfo) {
    this.chain = chain
    this.walletAddress = walletAddress
    this.poolName = poolName
    this.harvestReadyTokens = harvestReadyTokens
    this.userInfo = userInfo

  }
}

export class UserInfoModel {
  constructor(amount, rewardDebt, lastDepositedAt) {
    amount = this.amount
    rewardDebt = this.rewardDebt
    lastDepositedAt = this.lastDepositedAt
  }
}


export class WalletHarvestTotal {
  constructor(totalHarvestable, poolHarvestResult) {
    this.totalHarvestable = totalHarvestable
    this.poolHarvestResult = poolHarvestResult
  }
}


export default WalletHarvestTotal
