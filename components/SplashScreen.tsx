'use client';
import { useState, useEffect } from 'react';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Splash screen will be visible for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${!isVisible ? 'splash-screen-hidden' : ''}`}>
      <div className="splash-content">
        <h1>Welcome</h1>
        <div className="loading-bar"></div>
      </div>
    </div>
  );
};

export default SplashScreen;