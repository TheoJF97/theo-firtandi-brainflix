// import play from "../../assets/images/play.svg";
// import pause from "../../assets/images/pause.svg";
// import volumeUp from "../../assets/images/volume_up.svg";
// import volumeOff from "../../assets/images/volume_off.svg";
// import play from "../../assets/images/play.svg";

export default function VideoPlayer({ image }) {
  return (
    <section className="video">
      <div className="video__container">
        <video controls poster={image} className="video__current"></video>
      </div>
    </section>
  );
}
