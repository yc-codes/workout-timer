import React from 'react';

function IncreaseDecrease({ count, setCount }: { count: number, setCount: Function }) {
    return (
        <div className="grid place-items-center grid-cols-2 gap-1">
            <div
                className="plus-minus-button"
                onClick={() => { setCount(count - 1) }}>
                -
            </div>
            <div
                className="plus-minus-button"
                onClick={() => { setCount(count + 1) }}>
                +
            </div>
        </div>
    );
}

export default IncreaseDecrease;