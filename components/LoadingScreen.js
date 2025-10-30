import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Display for 2 seconds, then fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for fade out animation, then notify parent
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-screen ${!isVisible ? 'fade-out' : ''}`}>
      <div className="loading-text">
        <span className="name-bold">Gihan Wanninayaka</span>
        <span className="name-regular">Portfolio</span>
      </div>
    </div>
  );
}
