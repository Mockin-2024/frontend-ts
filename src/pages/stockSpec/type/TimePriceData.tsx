export interface TimePriceData {
    //현지영업일자
    tymd: string;

    // 한국기준일자
    kymd: string;

    // 한국기준시간
    khms: string;

    // 종가
    last: string;

    // 체결대금
    eamt: string;
}