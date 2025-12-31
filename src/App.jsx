import { useEffect, useState } from "react";
import "./App.css";

function randomIP() {
  return `${r()}.${r()}.${r()}.${r()}`;
}
function r() {
  return Math.floor(Math.random() * 255);
}
function randomPort() {
  return Math.floor(Math.random() * 9000) + 1000;
}
function randomHex() {
  return Math.random().toString(16).substring(2, 10);
}
function randomPercent() {
  return Math.floor(Math.random() * 100);
}

function App() {
  const [logs, setLogs] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;

    const sequence = [
      "Initializing system kernel...",
      "Establishing encrypted tunnel...",
      `Target IP locked: ${randomIP()}`,
      "Scanning open ports...",
      `Port ${randomPort()} OPEN`,
      "Injecting packets...",
      "Bypassing firewall...",
      `Encrypting files (${randomPercent()}%)`,
      `Decrypting credentials: ${randomHex()}`,
      "Uploading payload...",
      "Syncing data streams...",
      "Finalizing operation...",
      "ACCESS GRANTED ✔",
    ];

    const interval = setInterval(() => {
      if (index < sequence.length) {
        setLogs((prev) => [...prev, sequence[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setDone(true), 2000);
      }
    }, 1300); // ⏱ ~18–20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      <h1 className="alert">⚠ SYSTEM BREACH DETECTED ⚠</h1>

      <div className="terminal">
        {logs.map((log, i) => (
          <p key={i}> {log}</p>
        ))}
        {!done && <span className="cursor">█</span>}
      </div>

      {done && (
        <div className="reveal">
          😄 GOTCHA! <br />
          This is just a prank website. <br />
          No data was accessed.
          <button onClick={() => window.location.reload()}>
            Run Again
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
