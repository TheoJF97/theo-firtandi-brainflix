//import icons 
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/images/publish.svg";

//import react router hooks
import { Link, useNavigate } from "react-router-dom";

export default function UploadForm() {

  const navigate = useNavigate();
  const uploadAlert = (event) => {
    event.preventDefault();
    alert("Uploaded");
    navigate("/");
  };

  return (
    <section className="upload">
      <div className="upload__container">
        <h1 className="upload__header">Upload Video</h1>

        <form className="upload__form">
          <div className="upload__thumbnail-container">
            <h4 className="upload__thumbnail-header">VIDEO THUMBNAIL</h4>
            <img
              src={thumbnail}
              alt="blue-bike-in-motion"
              className="upload__thumbnail"
            />
          </div>

          <div className="upload__form-inputs">
            <label className="upload__title">
              TITLE YOUR VIDEO
              <input
                type="text"
                className="upload__title-input"
                placeholder="Add a title to your video"
              />
            </label>

            <label className="upload__description">
              ADD A VIDEO DESCRIPTION
              <textarea
                id="videoTitle"
                className="upload__description-input"
                placeholder="Add a description to your video"
              ></textarea>
            </label>
          </div>
        </form>
        <div className="upload__buttons">
          <Link to="/" className="upload__publish-link">
            <button className="upload__publish" onClick={uploadAlert}>
              <img
                src={publish}
                alt="publish-icon"
                className="upload__publish-icon"
              />
              PUBLISH
            </button>
          </Link>

          <button className="upload__cancel">
            {/* Add publish icon for button's centering in mobile viewport */}
            <img
              src={publish}
              alt="publish-icon"
              className="upload__publish-icon"
            />
            CANCEL
          </button>
        </div>
      </div>
    </section>
  );
}
