import "./App.css";
import Login from "/src/components/Authentication/Login";
import Homepage from "/src/components/homepage/Homepage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {

  const name = localStorage.getItem("name");

  if (name) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App;
