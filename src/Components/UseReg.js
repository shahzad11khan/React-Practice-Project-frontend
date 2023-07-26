import React, { useRef, useEffect, useState } from 'react'

const UseReg = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, []);
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count & Also useEffect & UseReg: {count.current}</h1>
    </>
  )
}

export default UseReg
