import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    const savedText = localStorage.getItem("savedText");

    if (savedText) {
      setText(savedText);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedText", text);
  }, [text]);

  const characters = text.length;

  const words =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  const lines =
    text === ""
      ? 0
      : text.split("\n").length;

  return (
    <div className="container">
      <h1>Contador de Texto</h1>

      <textarea
        placeholder="Digite seu texto aqui..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="cards">
        <div className="card">
          <h2>Caracteres</h2>
          <p>{characters}</p>
        </div>

        <div className="card">
          <h2>Palavras</h2>
          <p>{words}</p>
        </div>

        <div className="card">
          <h2>Linhas</h2>
          <p>{lines}</p>
        </div>
      </div>
    </div>
  );
}

export default App;