//import SASS Styling
import "./App.scss";

//import Components
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoNav from "./components/VideoNav/VideoNav";

//import JSON Data + useState
import videoDetailsData from "./data/video-details.json";
import videos from "./data/videos.json";
import { useState } from "react";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);

  //event handler function
  const changeSelectedVideo = (id) => {
    const newSelectedVideo = videos.find((video) => {
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
      {/* <Comments /> */}
      <VideoNav
        videos={filteredVideos}
        changeSelectedVideo={changeSelectedVideo}
      />
    </div>
  );
}

export default App;
