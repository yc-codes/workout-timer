import React from 'react';
import IncreaseDecrease from './IncreaseDecrease';

function BodySetSection({
    text, count, setCount
}: {
    text: string,
    count: number,
    setCount: Function,
}) {
    return (
        <div className="border-b border-gray-300 p-2">
            <div className="flex items-center justify-between">
                <div className="">
                    <p className="text-xs tracking-wide mb-1 font-bold text-gray-400 uppercase">{text}</p>
                    <p className="text-4xl font-extrabold">{count}</p>
                </div>
                <IncreaseDecrease count={count} setCount={setCount} />
            </div>
        </div>
    );
}

export default BodySetSection;