import React, { useState } from "react";

function TimerForm({ startTimer, isRunning }) {
    const [seconds, setSeconds] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const duration = parseInt(seconds, 10);
        if (!isNaN(duration) && duration > 0) {
            startTimer(duration);
            setSeconds('');
        }
    };

    const handlePresetClick = (duration) => {
        startTimer(duration);
    }

    return (
        !isRunning && (
            <div>
                <div className="preset-buttons">
                    <button onClick={() => handlePresetClick(10)} className="preset-button">10秒</button>
                    <button onClick={() => handlePresetClick(30)} className="preset-button">30秒</button>
                    <button onClick={() => handlePresetClick(60)} className="preset-button">1分</button>
                    <button onClick={() => handlePresetClick(90)} className="preset-button">1分30秒</button>
                    <button onClick={() => handlePresetClick(120)} className="preset-button">2分</button>
                    <button onClick={() => handlePresetClick(180)} className="preset-button">3分</button>
                    <button onClick={() => handlePresetClick(300)} className="preset-button">5分</button>
                    <button onClick={() => handlePresetClick(600)} className="preset-button">10分</button>
                </div>
                <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                    placeholder="Enter seconds"
                    className="input"
                />
                <button type="submit" className="button">Start Timer</button>
                </form>
            </div>
        )
    );
}

export default TimerForm;