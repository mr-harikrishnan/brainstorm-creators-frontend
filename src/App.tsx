import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing-page/LandingPage";
import EstimationPage from "./pages/estimation-page/EstimationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/estimation" element={<EstimationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
