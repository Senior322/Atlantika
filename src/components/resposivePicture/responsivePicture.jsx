import React, { useEffect, useState } from 'react';

export default function ResponsivePicture({ little, big, alt = 'image' }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <img src={windowWidth < 1439 ? little : big} alt={alt} />;
}
