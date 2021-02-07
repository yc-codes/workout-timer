import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import IncreaseDecrease from './IncreaseDecrease';

function SetupBody() {

    const { storedValue: sets, setStorageValue: setSetsCount } = useLocalStorage('sets', 10);
    const { storedValue: workout, setStorageValue: setWorkoutCount } = useLocalStorage('workout', 30);
    const { storedValue: rest, setStorageValue: setRestCount } = useLocalStorage('rest', 10);

    return (
        <div className="grid gap-4 px-4 pt-4">
            <div className="border-b border-gray-300 p-2">
                <div className="flex items-center justify-between">
                    <div className="">
                        <p className="text-xs tracking-wide mb-1 font-bold text-gray-400 uppercase">SETS</p>
                        <p className="text-4xl font-extrabold">{sets}</p>
                    </div>
                    <IncreaseDecrease count={sets} setCount={setSetsCount} />
                </div>
            </div>

            <div className="border-b border-gray-300 p-2">
                <div className="flex items-center justify-between">
                    <div className="">
                        <p className="text-xs tracking-wide mb-1 font-bold text-gray-400 uppercase">Workout Time</p>
                        <p className="text-4xl font-extrabold">{workout}</p>
                    </div>
                    <IncreaseDecrease count={workout} setCount={setWorkoutCount} />
                </div>
            </div>

            <div className="border-b border-gray-300 p-2">
                <div className="flex items-center justify-between">
                    <div className="">
                        <p className="text-xs tracking-wide mb-1 font-bold text-gray-400 uppercase">Rest Time</p>
                        <p className="text-4xl font-extrabold">{rest}</p>
                    </div>
                    <IncreaseDecrease count={rest} setCount={setRestCount} />
                </div>
            </div>

        </div>
    );
}

export default SetupBody;