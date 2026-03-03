import Test from "./Test/Test";
import { useState, useEffect } from "react";
import "./otp.css";

const Demo = () => {
    const [count, setCount] = useState(30);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                if (count != 0) {
                    setCount((prev) => prev - 1);
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [count]);

    return (
        <div className="otp-container">
            <div className="otp-card">
                <div className="otp-header">
                    <div className="icon-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <h1>OTP Sent</h1>
                    <p>Please check your phone for the verification code.</p>
                </div>
                <Test
                    count={count}
                    setIsRunning={setIsRunning}
                    setCount={setCount}
                />
                <div className="otp-footer">
                    <p>Didn't receive the code? <span>Resend now</span></p>
                </div>
            </div>
        </div>
    );
};

export default Demo;
