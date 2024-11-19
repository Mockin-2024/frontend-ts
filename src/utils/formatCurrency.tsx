export const formatCurrency = (num: number): string => {
    if (num >= 1e16) {
        return Math.floor(num / 1e16) + '경';
    } else if (num >= 1e12) {
        return Math.floor(num / 1e12) + '조';
    } else if (num >= 1e8) {
        return Math.floor(num / 1e8) + '억';
    } else if (num >= 1e4) {
        return Math.floor(num / 1e4) + '만';
    } else {
        return num.toString();
    }
};
