import React, { useState, useContext } from "react";
import { ContextInput } from "./Context";
const FComp = () => {
  const { state, maping, setstate, handleSub } = useContext(ContextInput);

  console.log();

  return (
    <div>
      <input
        type="text"
        onChange={e => setstate(e.target.value)}
        value={state}
      />
      <button onClick={handleSub}>S</button>
      {maping.map(item => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
};

export default React.memo(FComp);
