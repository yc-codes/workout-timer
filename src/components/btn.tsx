import React from 'react';


function Btn({ text }: { text: string }) {
    return (
        <div className="mx-4 text-center bg-primary rounded-full py-2 mt-4">
            <p className="uppercase font-bold text-white">{text}</p>
        </div>
    );
}

export default Btn;