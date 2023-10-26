import React from 'react';
import { useLocation } from 'react-router-dom';

export default function NavigationWay() {
  let location = useLocation();
  let current = location.pathname;

  const ways = [{ name: '/about', way: 'Про нас' }];

  let currentPageName = ways.find(item => item.name === current)?.way || '';
  return (
    <div>
      <p>{currentPageName}</p>
    </div>
  );
}
