import React from 'react';


function SetupBody() {
    return (
        <div className="grid gap-4 px-4 pt-4">
            <div className="border-b border-gray-300 p-2">
                <div className="flex items-center justify-between">
                    <div className="">
                        <p className="text-xs tracking-wide mb-1 font-bold text-gray-400 uppercase">SETS</p>
                        <p className="text-4xl font-extrabold">10</p>
                    </div>
                    <div className="grid place-items-center grid-cols-2 gap-1">
                        <div className="plus-minus-button">
                            <p>-</p>
                        </div>
                        <div className="plus-minus-button">
                            <p>+</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-300 p-2">
                <div className="flex items-center justify-between">
                    <div className="">
                        <p className="text-xs tracking-wide mb-1 font-bold text-gray-400 uppercase">Workout Time</p>
                        <p className="text-4xl font-extrabold">10</p>
                    </div>
                    <div className="grid place-items-center grid-cols-2 gap-1">
                        <div className="plus-minus-button">
                            <p>-</p>
                        </div>
                        <div className="plus-minus-button">
                            <p>+</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-300 p-2">
                <div className="flex items-center justify-between">
                    <div className="">
                        <p className="text-xs tracking-wide mb-1 font-bold text-gray-400 uppercase">Rest Time</p>
                        <p className="text-4xl font-extrabold">10</p>
                    </div>
                    <div className="grid place-items-center grid-cols-2 gap-1">
                        <div className="plus-minus-button">
                            <p>-</p>
                        </div>
                        <div className="plus-minus-button">
                            <p>+</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SetupBody;