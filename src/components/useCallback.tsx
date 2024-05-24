import { useCallback, useState } from "react";

function MyForm2() {
  const [count, setCount] = useState<number>(0);
  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <p>{count}</p>
      <button onClick={add}>ini button</button>
    </>
  );
}

export default MyForm2