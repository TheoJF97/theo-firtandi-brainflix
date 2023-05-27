//import useEffect, useParams, and axios
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//import Components
import Comments from "../../components/Comments/Comments";
import Header from "../../components/Header/Header";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoNav from "../../components/VideoNav/VideoNav";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

// API Connection and Axios Global variables
import { getVideosEndpoint } from "../../utils/api";

export default function HomePage() {
  const { videoId } = useParams();
  const [firstVideoId, setFirstVideoId] = useState(null);

  //get first plant when videoId is missing
  // axios.get equivalent to 1 ID of video-details.json
  //What's this useEffect saying? Retrieve the videos data and set the first video id to state variable if the videoId is null
  useEffect(() => {
    if (!videoId) {
      axios.get(getVideosEndpoint).then((response) => {
        setFirstVideoId(response.data[0].id);
      });
    }
  }, [videoId]);

  //If there is a videoId, make that the current Id, ELSE set it to our state variable
  const currentVideoId = videoId || firstVideoId;

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
