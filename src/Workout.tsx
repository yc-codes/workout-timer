import { useEffect, useState } from "react";
import { useRoute } from "wouter";

function Workout() {
    const [, params] = useRoute<{ sets: string, workout: string, rest: string }>("/workout/:sets-:workout-:rest");
    const { sets, workout, rest } = params || {};

    const [counter, setCounter] = useState(-5);
    const [barWidth, setBarWidth] = useState(0);
    const [totalSeconds] = useState(parseInt((sets || '0')?.toString() || '') * parseInt((workout || 0)?.toString() || '') * parseInt((rest || 0)?.toString() || ''));

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        let barWidth = (counter * 100) / totalSeconds;
        setBarWidth(barWidth);
    }, [counter]);

    return (
        <>
            <div className="relative">
                <div className="h-2 bg-primary w-full absolute" style={{ width: `${barWidth}%` }}></div>
                <div className="h-2 bg-gray-300 w-full"></div>
            </div>
            counter: {counter}<br />
            sets: {sets || 0}<br />
            workout: {workout || 0}<br />
            rest: {rest || 0}<br />
            totalSeconds: {totalSeconds}
        </>
    );
}

export default Workout;