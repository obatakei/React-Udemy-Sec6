import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入を使う
  const { color, children } = props;
  const contentLadystyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentLadystyle}>{children}</p>;
};

export default ColorfulMessage;
