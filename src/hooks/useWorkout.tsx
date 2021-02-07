import React, { createContext, ReactChild, ReactChildren, useContext } from 'react';
import Loading from '../components/partials/loading';
import useLocalStorage from './useLocalStorage';

interface useWorkoutResponse {
    sets: number | null,
    setSetsCount: (value: number) => void,
    workout: number | null,
    setWorkoutCount: (value: number) => void,
    rest: number | null,
    setRestCount: (value: number) => void,
}

export const workoutContext = createContext<useWorkoutResponse>({
    sets: 10,
    rest: 10,
    workout: 30,
    setSetsCount: () => { },
    setWorkoutCount: () => { },
    setRestCount: () => { },
});

export const useWorkout = () => useContext(workoutContext);

export function ProviderWorkout({ children }: {
    children: ReactChild | ReactChildren,
}) {
    const { storedValue: sets, setStorageValue: setSetsCount } = useLocalStorage('sets', 10);
    const { storedValue: workout, setStorageValue: setWorkoutCount } = useLocalStorage('workout', 30);
    const { storedValue: rest, setStorageValue: setRestCount } = useLocalStorage('rest', 10);

    const loading = false;
    return (
        <workoutContext.Provider
            value={{
                sets, setSetsCount, workout, setWorkoutCount, rest, setRestCount
            }}
        >
            {loading ? <Loading /> : children}
        </workoutContext.Provider>
    );
}