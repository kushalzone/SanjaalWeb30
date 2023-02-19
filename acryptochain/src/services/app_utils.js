export const parseBNumber = (amount, decimal) => {
    let decimalb = 10 ** decimal;
    const value = amount / decimalb;
    return value;
}

export const queryUrl = (url, params) => {
    const paths = [];
    for (const key of Object.keys(params)) {
        const atomStr = params[key] ? `${key}=${params[key]}` : `${key}`;
        paths.push(atomStr);
    }
    return `${url}?${paths.join('&')}`;
}