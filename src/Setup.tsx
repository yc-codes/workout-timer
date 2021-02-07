import Btn from './components/btn';
import Header from './components/header';
import SetupBody from './components/setupBody';
import { useWorkout } from './hooks/useWorkout';
import { useLocation } from "wouter";

function Setup() {
    const {
        sets,
        workout,
        rest,
    } = useWorkout();
    const [, setLocation] = useLocation();

    return (
        <>
            <Header />
            <SetupBody />
            <Btn
                text="LET’S WORK"
                onClick={() => {
                    setLocation(`/workout/${sets}-${workout}-${rest}`)
                }}
            />
        </>
    );
}

export default Setup;