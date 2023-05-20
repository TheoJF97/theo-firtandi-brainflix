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
  //delcare state variable
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);

  //Change selected video using setVariable() method
  const changeSelectedVideo = (id) => {
    const newSelectedVideo = videoDetailsData.find((video) => {
      return video.id === id;
    });
    setSelectedVideo(newSelectedVideo);
  };

  // selected video shows: channel, id, image, title
  // should show: title, channel, timestamp, views, likes, description from videoDetailsData
  console.log(selectedVideo);

  // create function filteredVideos
  const filteredVideos = videos.filter((video) => {
    return video.id !== selectedVideo.id;
  });

  return (
    <div className="App">
      <Header />
      <VideoPlayer image={selectedVideo.image} />
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
