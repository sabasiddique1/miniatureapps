import React, { useState, useEffect } from 'react';

function PomodoroTimer() {
  const [seconds, setSeconds] = useState(1500);
  const [isActive, setIsActive] = useState(false);
  const [session, setSession] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (isActive && seconds === 0) {
      clearInterval(interval);
      setSession(session => !session);
      setSeconds(session ? 300 : 1500);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, session]);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setIsActive(false);
    setSeconds(1500);
    setSession(true);
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }

  return (
    <div className="timer-container">
      <h1 className="session-label">{session ? 'Session' : 'Break'}</h1>
      <h2 className="timer">{formatTime(seconds)}</h2>
      <div className="button-container">
        <button className={`button button-primary ${isActive ? 'active' : ''}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
