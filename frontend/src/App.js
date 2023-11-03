import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/mycharacters" element={<Player />} />
        <Route exact path="/movies" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
