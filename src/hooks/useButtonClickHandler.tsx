import { useCallback } from 'react';

const useButtonClickHandler = (action: () => void) => {
    return useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // 기본 동작 방지
        action();
    }, [action]);
};

export default useButtonClickHandler;
