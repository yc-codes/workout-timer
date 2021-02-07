import React from 'react';

function Btn({ text, onClick }: { text: string, onClick?: Function }) {
    return (
        <div
            className="text-center bg-primary rounded-full py-2"
            onClick={(e) => {
                if (typeof onClick !== 'function') return;
                onClick(e);
            }}
        >
            <p className="uppercase font-bold text-white">{text}</p>
        </div>
    );
}

export default Btn;