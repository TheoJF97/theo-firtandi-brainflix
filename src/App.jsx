import "./App.scss";
import Header from "./components/header/Header";
import VideoPlayer from "./components/video-player/video-player";
// import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import { useState } from "react";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="App">
      <Header />
      <VideoPlayer />
      {/* <VideoDetails />
      <Comments />
      <VideosNav /> */}
    </div>
  );
}

export default App;
