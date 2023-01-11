import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1 id="title">가위바위보</h1>
    <button class="hand">가위</button>
    <button class="hand">바위</button>
    <button class="hand">보</button>
  </>
);
