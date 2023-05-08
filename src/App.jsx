import "./App.css";
import Login from "/src/components/Authentication/Login";
import Homepage from "/src/components/homepage/Homepage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Form from "./Components/Form/Form";

const App = () => {
  const name = localStorage.getItem("name");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        {name ? (
          <Route path="/" element={<Homepage />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
