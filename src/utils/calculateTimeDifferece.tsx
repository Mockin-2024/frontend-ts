export const calculateTimeDifference = (data_tm: string): string => {
    const now = new Date();

    const hours = parseInt(data_tm.slice(0, 2), 10);
    const minutes = parseInt(data_tm.slice(2, 4), 10);
    const seconds = parseInt(data_tm.slice(4, 6), 10);

    const pastTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, seconds);

    const differenceInSeconds = Math.floor((now.getTime() - pastTime.getTime()) / 1000);

    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const differenceInHours = Math.floor(differenceInMinutes / 60);

    if (differenceInHours > 0) {
        return `${differenceInHours}시간 전`;
    } else {
        return `${differenceInMinutes}분 전`;
    }
};