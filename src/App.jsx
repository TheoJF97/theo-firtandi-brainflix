import "./App.scss";
//import components 
import Header from "./components/header/Header";
import VideoPlayer from "./components/video-player/video-player";
import VideoDetails from "./components/video-details/video-details";
//import JSON Data 
import videoDetailsData from "./data/video-details.json";
// import videos from "./data/videos.json";
import { useState } from "react";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);

  return (
    <div className="App">
      <Header />
      <VideoPlayer
      // To add when in video-player branch
      // image = {selectedVideo.image}
      // duration = {selectedVideo.duration}
      />
      <VideoDetails
        title={selectedVideo.title}
        channel={selectedVideo.channel}
        timestamp={selectedVideo.timestamp}
        views={selectedVideo.views}
        likes={selectedVideo.likes}
        description={selectedVideo.description}
      />
      {/* <Comments />
      <VideosNav />  */}
    </div>
  );
}

export default App;
