import { useEffect, useState } from "react";

const useClickOutside = (ref: any): [boolean, (reset: boolean) => void] => {
  const [isClickedOutside, setIsClickedOutside] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClickedOutside(true);
      } else {
        setIsClickedOutside(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      setIsClickedOutside(false);
    };
  }, [ref]);

  return [isClickedOutside, setIsClickedOutside];
};

export default useClickOutside;
