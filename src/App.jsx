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
          {/* Route 1: The Home/Video Player Page for 
          displaying details of a video */}
          <Route path="/" element={<HomePage />} />

          {/* Route 2: The Video Upload Page */}
          <Route path="/upload" element={<UploadPage />} />

          {/* Route 3: Route that will load the video with the 
          provided video id to be displayed using the Video Player Page */}
          <Route path="/videos/:videoId" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}
