import logo from "../../assets/images/BrainFlix-logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="BrainFlix-Logo" className="header__logo" />
      <label htmlFor="search"></label>
      <input type="text" name="search" id="search" />
      <img
        src="../images/Mohan-muruge.jpg"
        alt="avatar-mohan-muruge"
        className="header__avatar"
      />
    </header>
  );
}
