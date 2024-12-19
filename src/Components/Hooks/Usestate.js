import { useEffect, useState } from "react";

export const Usestate = () => {
  const [state, setState] = useState(0);
  console.log(state);
  function Hello (){
    console.log("hitting");
    
  }
  Hello();
  return (
    <div>
      <button
        onClick={() => {
          setState(6457);
        }}
      >
        Change name
      </button>
    </div>
  );
};
