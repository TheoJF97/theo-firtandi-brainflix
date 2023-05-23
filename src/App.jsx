//import SASS Styling
import "./App.scss";

//import Components
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoNav from "./components/VideoNav/VideoNav";
import Comments from "./components/Comments/Comments";

//import Pages
import UploadPage from "./pages/UploadPage/UploadPage";

//import JSON Data + useState, useEffect + axios + BrowserRouter, Routes, Route
import videoDetailsData from "./data/video-details.json";
// import videos from "./data/videos.json";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/HomePage/HomePage";

// API Connection and Axios Global variables
const API_KEY = "?api_key=efc7ee7a-d6e2-4297-b2ba-510ce17bd8e2";
const API_URL = "https://project-2-api.herokuapp.com";
// axios.get equivalent to videos.json
const videosAPI = API_URL + "/videos" + API_KEY;

// axios.get equivalent to 1 ID of video-details.json
//    Note: the id reqd is from const videos
//    const videoDetailsData = API_URL + `/videos${video.id}` + API_KEY;

//Fetch Data, this is videos.json equivalent
axios.get(videosAPI).then((response) => {
  const videos = response.data;
  console.log(videos);
});

function App() {
  //delcare state variable
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);

  //Change selected video using setVariable() method
  const changeSelectedVideo = (id) => {
    const newSelectedVideo = videoDetailsData.find((video) => {
      return video.id === id;
    });
    setSelectedVideo(newSelectedVideo);
  };

  // create function filteredVideos
  const filteredVideos = videos.filter((video) => {
    return video.id !== selectedVideo.id;
  });

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
          <Route path="/:videoId" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
