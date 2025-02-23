import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import AiBot from "./pages/AiBot";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aibot" element={<AiBot />} />
      </Routes>
    </Router>
  );
}

export default App;
