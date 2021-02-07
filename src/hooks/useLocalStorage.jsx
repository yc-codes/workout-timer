import { useState, useCallback } from 'react';

// Hook
function useLocalStorage(key, initialValue = null) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            // window.console.log('error form local storage', error);
            return initialValue;
        }
    });

    const setStorageValue = useCallback(
        (value) => {
            try {
                // Allow value to be a function so we have same API as useState
                // Save state
                setStoredValue((data) => {
                    const valueToStore = value instanceof Function ? value(data) : value;
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                    return valueToStore;
                });
                // Save to local storage
            } catch (error) {
                // A more advanced implementation would handle the error case
                // window.console.log('error form local storage', error);
            }
        },
        [setStoredValue, key],
    );

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    // const setStorageValue = (value) => {
    //     try {
    //         // Allow value to be a function so we have same API as useState
    //         const valueToStore = value instanceof Function ? value(storedValue) : value;
    //         // Save state
    //         setStoredValue(valueToStore);
    //         // Save to local storage
    //         window.localStorage.setItem(key, JSON.stringify(valueToStore));
    //     } catch (error) {
    //         // A more advanced implementation would handle the error case
    //         window.console.log('error form local storage', error);
    //     }
    // };

    return {
        storedValue,
        setStorageValue,
        get getStoredValue() {
            try {
                // Get from local storage by key
                const item = window.localStorage.getItem(key);
                // Parse stored json or if none return initialValue
                return item ? JSON.parse(item) : storedValue;
            } catch (error) {
                // If error also return initialValue
                // window.console.log('error form local storage', error);
                return storedValue;
            }
        },
    };
}

export default useLocalStorage;
