//import SASS Styling
import "./App.scss";

//import Pages
import UploadPage from "./pages/UploadPage/UploadPage";
import HomePage from "./pages/HomePage/HomePage";

//import react-router-dom router + routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route
            path="/videos/:videoId"
            element={<HomePage/>}
          />
        </Routes>
      </Router>
    </div>
  );
}
