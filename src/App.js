import React, { useState, useEffect, useRef } from "react";
import propTypes from "prop-types";
import "./App.css";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const subRef = useRef(null);
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  const handlefirst = e => {
    e.keyCode === 13
      ? lastNameRef.current.focus()
      : firstNameRef.current.focus();
  };
  const handlelast = e => {
    e.keyCode === 13 ? subRef.current.focus() : lastNameRef.current.focus();
  };
  const handlesub = () => {};
  return (
    <div className="App">
      <input
        type="text"
        ref={firstNameRef}
        placeholder="enter fisrt"
        onKeyDown={handlefirst}
      />
      <input
        type="text"
        placeholder="enter"
        ref={lastNameRef}
        onKeyDown={handlelast}
      />
      <button ref={subRef} onKeyDown={handlesub}>
        click
      </button>
    </div>
  );
}

export default App;
