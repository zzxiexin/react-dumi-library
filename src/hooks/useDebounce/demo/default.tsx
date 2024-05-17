import React, { useEffect, useState } from 'react';
import { useDebounce } from 'yxhooks';

export default function App() {
  const [content, setContent] = useState<any[]>([]);
  const a = (...args) => {
    console.log(...args);
    setContent(args);
  };

  const b = useDebounce(a, 1);

  useEffect(() => {
    b(1, 2, 3);
    b(1, 2, 3, 4);
    b(1, 2, 3, 4, 5);
  }, []);

  return <div>{JSON.stringify(content)}</div>;
}
