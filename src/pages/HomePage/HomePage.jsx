//import react + router hooks, and axios
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//import Components
import Comments from "../../components/Comments/Comments";
import Header from "../../components/Header/Header";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoNav from "../../components/VideoNav/VideoNav";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

// API Connection variables
import { getVideosEndpoint } from "../../utils/api";

export default function HomePage() {
  const { videoId } = useParams();
  const [firstVideoId, setFirstVideoId] = useState(null);

  //Retrieve the videos data and set the state variable to default first video id if the videoId is null
  useEffect(() => {
    if (!videoId) {
      axios.get(getVideosEndpoint).then((response) => {
        setFirstVideoId(response.data[0].id);
      });
    }
  }, [videoId]);

  //IF there is a videoId, make that the current Id, ELSE set it to our state variable
  const currentVideoId = videoId || firstVideoId;

  //If axios retrieval lags, show user it's loading
  if (!currentVideoId) {
    return <h1>LOADING</h1>;
  }

  return (
    <>
      <Header />
      <VideoPlayer currentVideoId={currentVideoId} />
      <div className="App__video-content">
        <div className="App__video-text">
          <VideoDetails currentVideoId={currentVideoId} />
          <Comments currentVideoId={currentVideoId} />
        </div>
        <VideoNav currentVideoId={currentVideoId} />
      </div>
    </>
  );
}
