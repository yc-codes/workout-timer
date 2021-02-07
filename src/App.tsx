import React from 'react';
import Btn from './components/btn';
import Header from './components/header';
import SetupBody from './components/setupBody';

function App() {
  return (
    <div className="App">
      <Header />
      <SetupBody />
      <Btn text="LET’S WORK" />
    </div>
  );
}

export default App;
