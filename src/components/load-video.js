import React, { useState } from 'react';

const LoadVideo = ({ src, className, style, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`video-wrapper ${className || ''}`} style={{ position: 'relative', ...style }}>
      {isLoading && (
        <div className="spinner-overlay">
          <div className="loader"></div> 
        </div>
      )}
      
      <video
        src={src}
        onLoadedData={() => setIsLoading(false)}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
        style={{ 
          width: '100%', 
          display: 'block', 
          opacity: isLoading ? 0 : 1, 
          transition: 'opacity 0.3s ease' 
        }}
        {...props}
      />
    </div>
  );
};

export default LoadVideo;