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
    <div className="app">
      <div className="container">
        <h1>Contador de Texto</h1>

        <p className="subtitle">
          Ferramenta simples para contar caracteres, palavras e linhas.
        </p>

        <textarea
          placeholder="Digite seu texto aqui..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="stats">
          <div className="card">
            <h2>Caracteres</h2>
            <span>{characters}</span>
          </div>

          <div className="card">
            <h2>Palavras</h2>
            <span>{words}</span>
          </div>

          <div className="card">
            <h2>Linhas</h2>
            <span>{lines}</span>
          </div>
        </div>

        <footer>
          Texto salvo automaticamente no navegador com localStorage
        </footer>
      </div>
    </div>
  );
}

export default App;