export const formatCurrency = (num: number): string => {
    if (num >= 1e16) {
        return (num / 1e16).toFixed(2) + '경';
    } else if (num >= 1e12) {
        return (num / 1e12).toFixed(2) + '조';
    } else if (num >= 1e8) {
        return (num / 1e8).toFixed(2) + '억';
    } else if (num >= 1e4) {
        return (num / 1e4).toFixed(2) + '만';
    } else {
        return num.toString();
    }
};
