import React, { useState } from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';
import "./App.css";

function App() {
  const [duration, setDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = (seconds) => {
    setDuration(seconds);
    setIsRunning(true);
  }

  const resetTimer = () => {
    setDuration(0);
    setIsRunning(false);
  }

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <TimerForm startTimer={startTimer} />
      { isRunning && <Timer duration={duration} resetTimer={resetTimer} />}
    </div>
  );
}

export default App;
