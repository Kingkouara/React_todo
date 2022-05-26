import React from "react";
import ColorfulMessage from "./components/colorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "18px"
  // };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue" message="お元気ですか" />
      <ColorfulMessage color="red" message="あひあひ" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
