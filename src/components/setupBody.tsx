import React from 'react';
import { useWorkout } from '../hooks/useWorkout';
import BodySetSection from './bodySetSection';

function SetupBody() {
    const {
        sets,
        setSetsCount,
        workout,
        setWorkoutCount,
        rest,
        setRestCount,
    } = useWorkout();

    return (
        <div className="grid gap-2 px-4 pt-4">
            <BodySetSection
                text="SETS"
                count={sets || 0}
                setCount={setSetsCount}
            />
            <BodySetSection
                text="Workout Time"
                count={workout || 0}
                setCount={setWorkoutCount}
            />
            <BodySetSection
                text="Rest Time"
                count={rest || 0}
                setCount={setRestCount}
            />
        </div>
    );
}

export default SetupBody;