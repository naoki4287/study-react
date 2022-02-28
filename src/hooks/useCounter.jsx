import { useCallback, useState } from "react";

export const useCounter = () => {
  const [foo, setFoo] = useState(1)
  const [isShow, setIsShow] = useState(true);
  
  const handleClick = useCallback(() => {
    if (foo < 10) {
      setFoo((prevfoo) => prevfoo + 1);
    }
  }, [foo]);

  const handleDisplay = useCallback(() => {
    setIsShow((previsShow) => !previsShow);
  }, []);

  return { foo, isShow, handleClick, handleDisplay };
};