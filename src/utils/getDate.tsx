export const getTodayDate = (): string => {
    const today = new Date();
    return formatDate(today)
};

export const getXMonthAgoDate = (x: number): string => {
    const today = new Date();
    const xMonthAgo = new Date(today.setMonth(today.getMonth() - x));
    return formatDate(xMonthAgo);
};

const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
};