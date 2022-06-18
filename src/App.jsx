// Reactではキャメルケースで書くのが普通
// import reactは必ず最初に書いておく
/* eslint react-hooks/exhaustive-deps:off*/
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

// JSX記法では1つのタグにまとめるようにする
// divタグではなく、<></>で囲むのもOK
const App = () => {
  const [num, setNum] = useState(0);
  // 表示・非表示のStateを用意
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickCountUpButton = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    // 逆の動きになるように！を入れておく
    setFaceShowFlag(!faceShowFlag);
  };
  // カウント数が3の倍数の時だけ顔文字を出す
  // useEffectの使い方を確認しておく
  useEffect(() => {
    if (num % 3 === 0) {
      // re-renderのエラーのため下記のように記述
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);
  // if (num % 3 === 0) {
  //   // re-renderのエラーのため下記のように記述
  //   faceShowFlag || setFaceShowFlag(true);
  // } else {
  //   faceShowFlag && setFaceShowFlag(false);
  // }

  const contentstyle = {
    color: "blue",
    fontSize: "27px"
  };

  return (
    <>
      <h1 style={contentstyle}>Hello</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUpButton}>ボタンカウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ..)φメモメモ</p>}
    </>
  );
};

export default App;
