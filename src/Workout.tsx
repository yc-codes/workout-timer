import { useEffect, useState } from "react";
import { useRoute } from "wouter";

function Workout() {
    const [, params] = useRoute<{ sets: string, workout: string, rest: string }>("/workout/:sets-:workout-:rest");
    const { sets, workout, rest } = params || {};

    const [counter, setCounter] = useState(-5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            counter: {counter}<br />
            sets: {sets || 0}<br />
            workout: {workout || 0}<br />
            rest: {rest || 0}<br />
            totalSeconds: {parseInt((sets || '0')?.toString() || '') * parseInt((workout || 0)?.toString() || '') * parseInt((rest || 0)?.toString() || '')}
        </>
    );
}

export default Workout;