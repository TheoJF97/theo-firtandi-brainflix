// import play from "../../assets/images/play.svg";
// import pause from "../../assets/images/pause.svg";
// import volumeUp from "../../assets/images/volume_up.svg";
// import volumeOff from "../../assets/images/volume_off.svg";
// import play from "../../assets/images/play.svg";
import videoDetails from "../../data/video-details.json";

export default function VideoPlayer() {
  let firstImgSrc = videoDetails[0].image;
  return (
    <section className="video">
      <video controls poster={firstImgSrc} className="video__current">
      </video>
    </section>
  );
}
