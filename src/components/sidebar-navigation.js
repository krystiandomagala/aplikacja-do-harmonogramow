import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Group } from "../assets/groups.svg";
import { ReactComponent as Module } from "../assets/modules.svg";
import { ReactComponent as Room } from "../assets/room.svg";
import { ReactComponent as Schedule } from "../assets/schedule.svg";
import { ReactComponent as Lecturer } from "../assets/lecturer.svg";

function SidebarNavigation() {
  const location = useLocation();

  return (
    <nav>
      <div className="logo">
        <Logo />
        <h2>Harmonogramy</h2>
      </div>
      <div className="menu">
        <h3>Menu</h3>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" className="link">
              <Home />
              <span>Strona główna</span>
            </Link>
          </li>
          <li className={location.pathname === "/schedules" ? "active" : ""}>
            <Link to="/schedules" className="link">
              <Schedule />
              <span>Harmonogramy</span>
            </Link>
          </li>
          <li className={location.pathname === "/lecturers" || location.pathname === "/lecturers/add" ? "active" : ""}>
            <Link to="/lecturers" className="link">
              <Lecturer />
              <span>Prowadzący</span>
            </Link>
          </li>
          <li className={location.pathname === "/rooms" ? "active" : ""}>
            <Link to="/rooms" className="link">
              <Room />
              <span>Pracownie</span>
            </Link>
          </li>
          <li className={location.pathname === "/modules" ? "active" : ""}>
            <Link to="/modules" className="link">
              <Module />
              <span>Moduły</span>
            </Link>
          </li>
          <li className={location.pathname === "/groups" ? "active" : ""}>
            <Link to="/groups" className="link">
              <Group />
              <span>Grupy</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SidebarNavigation;
