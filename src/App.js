import React, { useState, useEffect } from "react";
import GhostContentAPI from "@tryghost/content-api";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
function App(props) {
  const [data, setData] = useState([]);

  const api = new GhostContentAPI({
    url: "http://localhost:2368",
    key: "e2c84415dc9f2e7eb4e4e94ece",
    version: "v3"
  });

  useEffect(() => {
    api.posts
      .browse({ limit: 5, include: "tags,authors" })
      .then(posts => {
        setData(posts); // Set data into state on line 11
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      {data[0] ? <Main data={data} /> : <div></div>}
    </div>
  );
}

export default App;
