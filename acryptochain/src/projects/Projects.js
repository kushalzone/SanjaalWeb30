/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since March 2023
 * 
 * Use it at your own risk. Author provides no liablity of any sort.
 * 
 * This file is the entry point for the application and holds config files onboarded projects
 */
import { LIQ_CONTRACTS, tokenBNBContract as LiquidusBNBContract} from "./liquidus/config/ProjectConfig";
import { ONI_CONTRACTS, tokenBNBContract as OniBNBContract } from "./onino/config/ProjectConfig";

export const PROJECT_CONFIGS = [
    { name: "LIQ", contracts: LIQ_CONTRACTS, tokenBNBContract: LiquidusBNBContract },
    { name: "ONI", contracts: ONI_CONTRACTS, tokenBNBContract: OniBNBContract }
]