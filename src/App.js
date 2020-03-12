import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  createContext
} from "react";
import "./App.css";

import ContextInputProvider from "./comp/Context";

function App() {
  return <ContextInputProvider></ContextInputProvider>;
}

export default App;
