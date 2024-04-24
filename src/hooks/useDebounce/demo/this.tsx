import React, { useEffect, useState } from 'react';
import { useDebounce } from 'yxhooks';

export default function App() {
  const [content, setContent] = useState<any[]>([]);
  const [value, setValue] = useState(undefined);
  const obj = {
    a: 2,
    b: function (...args) {
      setContent(args);
      setValue(this.a);
      console.log(this.a, ...args);
    },
  };

  const b = useDebounce(obj.b, 2, obj);

  useEffect(() => {
    b(1, 2, 3);
    b(1, 2, 3, 4);
    b(1, 2, 3, 4, 5);
  }, []);

  return (
    <>
      <div>参数:{JSON.stringify(content)}</div>
      <div>this.a:{value}</div>
    </>
  );
}
