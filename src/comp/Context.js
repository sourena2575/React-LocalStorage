import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  createContext
} from "react";
import FComp from "./FComp";
export const ContextInput = createContext();

function ContextInputProvider(props) {
  const [state, setstate] = useState("");
  const [maping, setmaping] = useState([{ name: "LocalStorage", id: 1 }]);
  useEffect(() => {
    const dat = localStorage.getItem("data");
    setmaping(JSON.parse(dat));
  }, []);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(maping));
  }, [maping]);

  const handleSub = e => {
    e.preventDefault();
    setmaping(prev => {
      return [...prev, { name: state, id: Math.random() }];
    });
    setstate("");
  };
  return (
    <ContextInput.Provider
      value={{ state, setstate, setmaping, maping, handleSub }}
    >
      <FComp />
    </ContextInput.Provider>
  );
}

export default ContextInputProvider;
