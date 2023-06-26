import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        backgroundColor: "RGB(200, 162, 200)",
        color: "white",
        fontSize: "45px",
        padding: "10px",
      }}
    >
      <div class="test_obj">
        <span>🎉</span>
        <span>영</span>
        <span>화</span>
        <span>를</span>
        <span>소</span>
        <span>개</span>
        <span>합</span>
        <span>니</span>
        <span>다</span>
      </div>
    </div>
  );
};

export default Nav;
