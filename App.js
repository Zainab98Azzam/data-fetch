import React from "react";
import "./App.css";
import FetchRandomUser from "./datafetch";
import PostData from "./dataPost";

function App() {
  return (
    <div className="App">
      <p>hi</p>
      <FetchRandomUser />
      <PostData />
      <form />
    </div>
  );
}

export default App;
