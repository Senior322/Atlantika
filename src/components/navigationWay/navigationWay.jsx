import React from 'react';
import { useLocation } from 'react-router-dom';

export default function NavigationWay({ className = '' }) {
  let location = useLocation();
  let current = location.pathname;
  const ways = [
    { name: '/about', way: 'Про нас' },
    { name: '/discounts', way: 'Система знижок' },
    { name: '/drop', way: 'Дропшипінг' },
    { name: '/delivery', way: 'Доставка і оплата' },
    { name: '/contacts', way: 'Контакти' },
  ];
  let currentPageName = ways.find(item => item.name === current)?.way || '';
  return (
    <div className={className}>
      <p>{currentPageName}</p>
    </div>
  );
}
