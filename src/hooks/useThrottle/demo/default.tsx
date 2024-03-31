import React, { useEffect, useState } from 'react';
import { useThrottle } from 'yxhooks';

export default function App() {
  const [content, setContent] = useState<any[]>([]);
  const a = (...args) => {
    console.log(...args);
    setContent(args);
  };

  const b = useThrottle(a, 5);

  useEffect(() => {
    setTimeout(() => {
      b(1, 2, 3);
    }, 1000);
    setTimeout(() => {
      b(1, 2, 3, 4);
    }, 1500);
    setTimeout(() => {
      b(1, 2, 3, 4, 5);
    }, 2500);
    setTimeout(() => {
      b(1, 2, 3, 4, 5);
    }, 5100);
    setTimeout(() => {
      b(1, 2, 3, 4, 5, 6);
    }, 11000);
  }, []);

  return <div>{JSON.stringify(content)}</div>;
}
