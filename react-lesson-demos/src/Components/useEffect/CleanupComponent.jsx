import React, { useEffect } from "react";

// EXAMPLE 1: Event listener cleanup
function EventComponent() {
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized");
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once

  return <div>Resize the window and check the console</div>;
}

// EXAMPLE 2: Timer cleanup
function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array means this effect runs once

  return <div>Count: {count}</div>;
}

// EXAMPLE 3: Subscription cleanup
function SubscriptionComponent() {
  useEffect(() => {
    const subscription = someAPI.subscribe((data) => {
      console.log(data);
    });

    // Cleanup function to unsubscribe
    return () => {
      subscription.unsubscribe();
    };
  }, []); // Empty dependency array means this effect runs once

  return <div>Check the console for subscription data</div>;
}
