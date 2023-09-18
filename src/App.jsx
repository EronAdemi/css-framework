import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./routes/Navigation";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
