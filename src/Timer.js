import React, { useEffect, useState } from "react";

function Timer({ duration, resetTimer }) {
    const [secondsLeft, setSecondsLeft] = useState(duration);

    useEffect(() => {
        if (secondsLeft > 0) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        } else if (secondsLeft === 0) {
            const timerId = setTimeout(() => {
                alert('Time is up!!');
                resetTimer();
            }, 1000);
            return () => clearTimeout(timerId);
        }
    }, [secondsLeft, resetTimer]);

    return (
        <div>
            <h2>{secondsLeft} seconds left</h2>
        </div>
    );
}

export default Timer;