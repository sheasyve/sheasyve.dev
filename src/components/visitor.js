import React, { useState, useEffect } from 'react';

const VisitorComponent = () => {
  const [count, setCount] = useState('...'); 

  useEffect(() => {
    const trackAndFetch = async () => {
      try {
        if (!sessionStorage.getItem('visited')) {
          await fetch('/api/increment', { method: 'POST' });
          sessionStorage.setItem('visited', 'true');
        }

        const response = await fetch('/api/count');
        const data = await response.json();
        setCount(data.count);
      } catch (err) {
        console.error("Failed to update visitor count:", err);
        setCount('N/A');
      }
    };

    trackAndFetch();
  }, []);

  return (
    <div className="visitor-count">
      <p>Unique Visitors: <strong>{count}</strong></p>
    </div>
  );
};

export default VisitorComponent;