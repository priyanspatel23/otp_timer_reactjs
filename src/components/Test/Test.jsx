const Test = ({ count, setIsRunning, setCount }) => {
    return (
        <div className="timer-section">
            <div className={`timer-display ${count === 0 ? 'expired' : ''}`}>
                <span className="timer-label">Wait for</span>
                <h1 className="timer-value">00:{count < 10 ? `0${count}` : count}</h1>
            </div>

            <div className="button-container">
                <button
                    className={`resend-btn ${count !== 0 ? 'disabled' : 'active'}`} {...count != 0 ? { disabled: true } : { disabled: false }} onClick={() => setCount(30)}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Test;
