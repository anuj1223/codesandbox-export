import "./styles.css";
import Login from "./components/login";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="app">
      <h1>Goggle Docs Clone</h1>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
