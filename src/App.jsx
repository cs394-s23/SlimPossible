import "./App.css";
import Login from "/src/components/Authentication/Login";
import Homepage from "/src/components/homepage/Homepage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  const userName = localStorage.getItem("name");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {userName ? (
          <Route path="/" element={<Homepage />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
