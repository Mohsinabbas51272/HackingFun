import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [logs, setLogs] = useState([]);
  const [done, setDone] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    let index = 0;

    // 🔴 SYSTEM
    const systemLogs = [
      "Initializing system kernel...",
      "Root access requested...",
      "Security protocols disabled...",
      "Bypassing firewall...",
      "Admin privileges granted ✔",
    ];

    // 🌐 NETWORK
    const networkLogs = [
      "Scanning network...",
      "Analyzing traffic packets...",
      "External IP detected: 103.45.122.91",
      "Proxy bypassed...",
      "Secure tunnel established...",
    ];

    // 📍 FAKE LOCATION
    const locationLogs = [
      "Requesting GPS permissions...",
      "Triangulating device location...",
      "Location locked ✔",
      "City: Lahore",
      "Coordinates: 31.5204° N, 74.3587° E",
    ];

    // 📱 DEVICE ACCESS (FAKE)
    const deviceLogs = [
      "Accessing device information...",
      "Reading contacts database...",
      "Scanning gallery files...",
      "Media indexed successfully...",
      "Microphone status: ACTIVE",
    ];

    // 🔔 NOTIFICATIONS
    const notificationLogs = [
      "Generating system alerts...",
      "⚠ Unusual activity detected",
      "⚠ Device under monitoring",
      "⚠ Data transfer in progress",
    ];

    // 🔐 DATA
    const dataLogs = [
      "Encrypting user files...",
      "Compressing data packets...",
      "Uploading to remote server...",
      "Upload progress: 92%",
      "Upload completed ✔",
    ];

    // ☠️ FINAL
    const finalLogs = [
      "Remote access established...",
      "Session locked...",
      "Do not turn off your device...",
      "Finalizing operation...",
      "ACCESS GRANTED ✔",
    ];

    const prankEnd = [
      "--------------------------------",
      "😄 GOTCHA!",
      "This is just a prank website.",
      "No data was accessed.",
    ];

    const sequence = [
      ...systemLogs,
      ...networkLogs,
      ...locationLogs,
      ...deviceLogs,
      ...notificationLogs,
      ...dataLogs,
      ...finalLogs,
      ...prankEnd,
    ];

    const interval = setInterval(() => {
      if (index < sequence.length) {
        setLogs((prev) => [...prev, sequence[index]]);
        index++;
      } else {
        clearInterval(interval);
        setDone(true);
      }
    }, 1200); // ⏱ ~25–30 seconds

    return () => clearInterval(interval);
  }, []);

  // 🔥 AUTO SCROLL
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop =
        terminalRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="wrapper">
      <h1 className="alert">⚠ SYSTEM BREACH DETECTED ⚠</h1>

      <div className="terminal" ref={terminalRef}>
        {logs.map((log, i) => (
          <p key={i}> {log}</p>
        ))}
        {!done && <span className="cursor">█</span>}
      </div>
    </div>
  );
}

export default App;
