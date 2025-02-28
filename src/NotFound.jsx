import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './NotFound.css';

function Notfound() {
    const [countdown, setCountdown] = useState(5); // New state for countdown
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    navigate("/Home");
                    clearInterval(timer); // Clear the timer once we navigate
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer); // Clean up the interval on unmount
    }, [navigate]);

    return (
        <div className="notfound-container">
            <h1>404 Page Not Found</h1>
            <img
                src="https://www.wp-assistance.fr/files/2023/05/erreur-404-WordPress.jpg"
                style={{ height: '500px', width: '1000px' }}
                alt="A humorous image of a 404 error page"
            />
            <p>Redirecting you to the homepage in {countdown} seconds...</p>
        </div>
    );
}

export default Notfound;
