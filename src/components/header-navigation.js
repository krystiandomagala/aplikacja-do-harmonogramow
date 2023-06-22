import "../styles/header.css";
import { ReactComponent as UserLogo } from "../assets/user-logo.svg";


function HeaderNavigation() {
  return (
    <div className="header">
      <div className="user-info">
        <span  className="welcome-message">Welcome back</span>
        <span className="user">example@email.com</span>
      </div>
      <UserLogo />
    </div>
  );
}

export default HeaderNavigation;
