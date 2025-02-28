import { useEffect, useState } from "react";

function TimerEx() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime-1 );
    }, 1000);

    // Clear the interval when component un-mounts(Refresh)
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run once on mount and clean up on unmount

  return(
    <>
        <h1> Exam Timer: </h1>
        <h2>Time Left: {time}</h2>

    </>
  )
}
export default TimerEx;