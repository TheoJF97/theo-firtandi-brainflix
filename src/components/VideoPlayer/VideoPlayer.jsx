import { useEffect, useState } from "react";
import axios from "axios";
import { getVideoEndpoint } from "../../utils/api";

export default function VideoPlayer({ currentVideoId }) {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios.get(getVideoEndpoint(currentVideoId)).then((response) => {
      setVideo(response.data);
    });
  }, [currentVideoId]);

  if (!video) {
    return <h1>Loading</h1>;
  }

  return (
    <section className="video">
      <div className="video__container">
        <video controls poster={video.image} className="video__current"></video>
      </div>
    </section>
  );
}
