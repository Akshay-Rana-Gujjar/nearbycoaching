import { IoMenu, IoNotificationsOutline } from "react-icons/io5";
import styles from "./styles.module.css";

export default function Navbar() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center py-2">
        <div className="navbar__menu-icon ">
          <IoMenu size={24} />
        </div>
        <div className="navbar__welcome-text">Welcome to NearbyCoaching</div>
        <div
          className={`${styles.navbarBellIcon} navbar__bell-icon border border-dark  p-2`}
        >
          <IoNotificationsOutline size={24} />
        </div>
      </div>
    </div>
  );
}
