import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarNavigation from "./components/sidebar-navigation";
import HeaderNavigation from "./components/header-navigation";
import Home from "./views/Home";
import Schedules from "./views/Schedules";
import Lecturers from "./views/Lecturers";
import Rooms from "./views/Rooms";
import Modules from "./views/Modules";
import Groups from "./views/Groups";
import AddLecturer from "./views/AddLecturer";
import "./index";

function App() {
  return (
    <>
      <Router>
        <SidebarNavigation />
        <div className="wrapper">
          <HeaderNavigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/lecturers" element={<Lecturers />} />
            <Route path="/lecturers/add" element={<AddLecturer />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/groups" element={<Groups />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
