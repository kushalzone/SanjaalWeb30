/**
 * This method takes any date and finds how long ago it was from current date
 * @param {*} date 
 * @returns 
 */
export function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

/**
 * This method takes a paste date and a vesting period and returns the status of unlocking:
 * e.g. 
 * - Pool is Unlocked
 * - Pool unlocked 3 months ago
 * - Pool unlocks in 3 months
 * @param {*} vestingPeriodInMonths 
 * @param {*} lastDepositDate 
 * @returns 
 */
export function UnlockTime(vestingPeriodInMonths, lastDepositDate) {

    if (vestingPeriodInMonths === 0) {
        return "Pool is unlocked"
    }

    const prefix = "Pool unlocked "

    var seconds = Math.floor((new Date() - lastDepositDate) / 1000 - vestingPeriodInMonths * 31 * 24 * 3600);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return prefix + interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return prefix + interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return prefix + interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return prefix + interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return prefix + interval + " minutes ago";
    }

    if (seconds < 1) {
        return "Pool unlocks in " + createUnlockTimeFromSeconds(seconds)
    }

    return Math.floor(seconds) + " seconds";
}

function createUnlockTimeFromSeconds(seconds) {
    var absoluteSeconds = Math.abs(seconds)

    var interval = Math.floor(absoluteSeconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(absoluteSeconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(absoluteSeconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(absoluteSeconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(absoluteSeconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(absoluteSeconds) + " seconds";
}