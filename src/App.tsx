import React from 'react';
import { Route, Switch } from "wouter";
import { ProviderWorkout } from './hooks/useWorkout';
import Setup from './Setup';
import Workout from './Workout';

function App() {
  return (
    <div className="App">
      <ProviderWorkout>
        <Switch>
          <Route path="/workout/:sets-:workout-:rest" component={Workout} />
          <Route path="/" component={Setup} />
        </Switch>
      </ProviderWorkout>
    </div>
  );
}

export default App;
