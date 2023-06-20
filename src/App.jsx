import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";

const App = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const body = document.querySelector("body");

    const localMode = localStorage.getItem("mode");

    if (localMode) {
      switch (localMode) {
        case "light": {
          body.classList.remove("dark");
          break;
        }
        case "dark": {
          body.classList.add("dark");
          break;
        }
        default: {
          body.classList.remove("dark");
          break;
        }
      }
      setMode(localMode);
    } else {
      localStorage.setItem("mode", "light");
    }
  }, [mode]);

  const handleMode = () => {
    switch (mode) {
      case "light": {
        localStorage.setItem("mode", "dark");
        setMode("dark");
        break;
      }
      case "dark": {
        localStorage.setItem("mode", "light");
        setMode("light");
        break;
      }
      default: {
        setMode("light");
        break;
      }
    }
  };

  return (
    <BrowserRouter>
      <div className="title-bar d-flex align-items-center justify-content-between p-2 px-5">
        <h3>Sary Mihetsika</h3>
        <i
          className={`fas ${
            mode === "light" ? "fa-sun  fa-2x" : "fa-moon fa-2x"
          } `}
          onClick={handleMode}
        ></i>
      </div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="detail/:slugg" element={<Detail />} />
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
