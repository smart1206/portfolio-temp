import Home from "./pages/Home";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
// import Projects from "./pages/Projects";
import { useEffect } from "react";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="App dark:bg-black bg-primary-400 transition-all duration-200 ">
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
