//import SASS Styling
import "./App.scss";

//import Pages
import UploadPage from "./pages/UploadPage/UploadPage";
import HomePage from "./pages/HomePage/HomePage";

//import react-router-dom router + routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

//IMPORT serverURL
const { REACT_APP_SERVER_URL: serverUrl } = process.env;

export default function App() {
  //state variable: videos
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    axios
      .get(`${serverUrl}/`)
      .then(({ data }) => {
        console.log(data);
        console.table(data);
        setVideos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (videos.length === 0) {
    return <h1>LOADING</h1>;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/videos/:videoId" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}
