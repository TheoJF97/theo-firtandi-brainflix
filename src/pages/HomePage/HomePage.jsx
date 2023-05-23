import Comments from "../../components/Comments/Comments";
import Header from "../../components/Header/Header";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoNav from "../../components/VideoNav/VideoNav";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

export default function HomePage() {
  return (
    <>
      <Header />
      <VideoPlayer image={selectedVideo.image} />
      <div className="App__video-content">
        <div className="App__video-text">
          <VideoDetails
            title={selectedVideo.title}
            channel={selectedVideo.channel}
            timestamp={selectedVideo.timestamp}
            views={selectedVideo.views}
            likes={selectedVideo.likes}
            description={selectedVideo.description}
          />
          <Comments comments={selectedVideo.comments} />
        </div>
        <VideoNav
          videos={filteredVideos}
          changeSelectedVideo={changeSelectedVideo}
        />
      </div>
    </>
  );
}
