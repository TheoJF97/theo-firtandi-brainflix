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

export default function HomePage() {
  //IMPORT serverURL
  const { REACT_APP_SERVER_URL: serverUrl } = process.env;

  //useParams
  const { videoId } = useParams();

  //State variable
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    axios
      .get(`${serverUrl}/videos`)
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //IF there is a videoid, make that the current,
  //  ELSE set it to our state variable firstVideoId
  const firstVideoId = videos[0]?.id;
  const currentVideoId = videoId || firstVideoId;

  useEffect(() => {
    if (!currentVideoId) {
      return;
    }
    axios
      .get(`${serverUrl}/videos/${currentVideoId}`)
      .then((response) => {
        console.log(response.data);
        setCurrentVideo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentVideoId]);

  console.log(currentVideo);

  //If axios retrieval lags, show user it's loading
  if (!currentVideo) {
    return <h1>holup</h1>;
  }
  if (!videos) {
    return <h1>LOADING</h1>;
  }

  return (
    <>
      <Header />
      <VideoPlayer currentVideo={currentVideo} />
      <div className="App__video-content">
        <div className="App__video-text">
          <VideoDetails currentVideo={currentVideo} />
          <Comments currentVideo={currentVideo} />
        </div>
        <VideoNav videos={videos} currentVideo={currentVideo} />
      </div>
    </>
  );
}
