import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

interface CurrencyContextType {
    exchangeRates: { [key: string]: number } | null;
    loading: boolean;
    error: string | null;
    convertToKRW: (amount: number, fromCurrency: string) => number | null;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);
const { REACT_APP_EXCHANGE_URL } = process.env;

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number } | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await axios.get(`${REACT_APP_EXCHANGE_URL}`);
                setExchangeRates(response.data.conversion_rates);
            } catch (err) {
                console.error('환율을 가져오는 중 오류 발생:', err);
                setError('환율 정보를 가져오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchExchangeRates();
    }, [REACT_APP_EXCHANGE_URL]);

    const convertToKRW = (amount: number, fromCurrency: string): number | null => {
        if (!exchangeRates) {
            return null;
        }

        const rate = exchangeRates[fromCurrency];
        if (!rate) {
            return null;
        }
        return Math.round(amount / rate); // 해당 통화를 KRW로 변환
    };

    return (
        <CurrencyContext.Provider value={{ exchangeRates, loading, error, convertToKRW }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
};
