import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import axios from "axios";

function App() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios
      .get("/api/smth")
      // .get("http://localhost:3000/api/smth")
      .then((response) => {
        setContents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <p id="top">Number of contents: {contents.length}</p>

      {contents.map((content) => (
        <div key={content.id}>
          <p id="title">{content.title}</p>
          <p id="desc">{content.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
