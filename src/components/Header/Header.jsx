import { Link } from "react-router-dom";
import logo from "../../assets/images/BrainFlix-logo.svg";
import Mohan from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/upload.svg";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="BrainFlix-Logo" className="header__logo" />
      </Link>
      <div className="header__container">
        <input
          type="text"
          name="search"
          id="search"
          className="header__search"
          placeholder="Search"
        />

        <img src={Mohan} alt="avatar-mohan-muruge" className="header__avatar" />

        <button className="header__upload">
          <img src={upload} alt="upload-icon" className="header__upload-icon" />
          UPLOAD
        </button>
      </div>
    </header>
  );
}
