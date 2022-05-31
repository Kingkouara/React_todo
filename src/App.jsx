import React, { useState } from "react";
import ColorfulMessage from "./components/colorfulMessage";

const App = () => {
const [num,setNum] = useState(0);  
const onClickCountUp = () =>{
  setNum(num+1);
}

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue" ><ColorfulMessage/>
      <ColorfulMessage color="red" message="あひあひ" />
      <button onClick={onClickCountUp}>カウントアップ！</button>
 　　　<p>{num}</p>
    </>
  );
};

export default App;
