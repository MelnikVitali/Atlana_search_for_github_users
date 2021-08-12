import { useCallback } from 'react';
import { debounce } from 'lodash';

export const useDebouncedCallback = (callback, wait) => {
    const debouncedFunction = useCallback(debounce(callback, wait), []);
    return [debouncedFunction];
};
