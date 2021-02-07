import React from 'react';
import IncreaseDecrease from './IncreaseDecrease';

function SetupBody() {
    return (
        <div className="grid gap-4 px-4 pt-4">
            <div className="border-b border-gray-300 p-2">
                <div className="flex items-center justify-between">
                    <div className="">
                        <p className="text-xs tracking-wide mb-1 font-bold text-gray-400 uppercase">SETS</p>
                        <p className="text-4xl font-extrabold">10</p>
                    </div>
                    <IncreaseDecrease count={10} setCount={() => { }} />
                </div>
            </div>

            <div className="border-b border-gray-300 p-2">
                <div className="flex items-center justify-between">
                    <div className="">
                        <p className="text-xs tracking-wide mb-1 font-bold text-gray-400 uppercase">Workout Time</p>
                        <p className="text-4xl font-extrabold">10</p>
                    </div>
                    <IncreaseDecrease count={10} setCount={() => { }} />
                </div>
            </div>

            <div className="border-b border-gray-300 p-2">
                <div className="flex items-center justify-between">
                    <div className="">
                        <p className="text-xs tracking-wide mb-1 font-bold text-gray-400 uppercase">Rest Time</p>
                        <p className="text-4xl font-extrabold">10</p>
                    </div>
                    <IncreaseDecrease count={10} setCount={() => { }} />
                </div>
            </div>

        </div>
    );
}

export default SetupBody;