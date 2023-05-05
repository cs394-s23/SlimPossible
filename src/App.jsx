import "./App.css";
import Login from "/src/components/Authentication/Login";
import Homepage from "/src/components/homepage/Homepage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  const userName = localStorage.getItem("name");

  const name = localStorage.getItem("name");

  console.log("name: " + name);

  if (name) {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;
