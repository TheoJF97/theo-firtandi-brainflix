import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/images/publish.svg";
import { Link, useNavigate } from "react-router-dom";

export default function UploadForm() {
  const navigate = useNavigate();
  const alertUpload = (event) => {
    event.preventDefault();
    alert("Uploaded");
    navigate("/");
  };

  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <h4 className="upload__subtitle">VIDEO THUMBNAIL</h4>
      <img
        src={thumbnail}
        alt="blue-bike-in-motion"
        className="upload__thumbnail"
      />

      <label htmlFor="videoTitle" className="upload__title">
        TITLE YOUR VIDEO
        <input type="text" className="upload__title-input" />
      </label>

      <label htmlFor="videoTitle" className="upload__title">
        ADD A VIDEO DESCRIPTION
        <textarea
          name="videoTitle"
          id="videoTitle"
          className="upload__title-input"
          placeholder="Add a description to your video"
        ></textarea>
      </label>
      <Link to="/">
        <button className="upload__publish" onClick={alertUpload}>
          <img
            src={publish}
            alt="publish-icon"
            className="upload__publish-icon"
          />
          PUBLISH
        </button>
      </Link>
      <button className="upload__cancel">CANCEL</button>
    </section>
  );
}
