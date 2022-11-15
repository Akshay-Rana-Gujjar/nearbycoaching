import Link from "next/link";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import { IoMenu, IoNotificationsOutline } from "react-icons/io5";
import styles from "./styles.module.css";
import CategoryOverlay from "../CategoryOverlay";

export default function Navbar() {
  const router = useRouter();
  const activeRoute = router.pathname;
  return (
    <div>

      <div className="bg-white shadow mb-3">
        <div className="container  d-md-flex d-none justify-content-between p-3">

          <div className="navbar__welcome-text h3"><Link href="/">NearbyCoaching</Link></div>

          <div>
            <div className="d-flex gap-3 ">
              <div className={activeRoute === "/" && "fw-bold"}> <Link href={'/'} > Home</Link></div>

              <div className={(activeRoute === "#" && "fw-bold") + "  position-relative "+styles.categoryOverlayParent} > <Link href={'#'} > Categories</Link>
              
              <div className={"position-absolute translate-middle-x "+styles.categoryOverlay} style={{zIndex: 100}}>
                <CategoryOverlay/>
              </div>

              </div>
              <div className={activeRoute === "/blog" && "fw-bold"}> <Link href={'/blog'} > Blog</Link></div>
              <div className="d-flex border px-2 rounded" >
                <input type="text"  className="border-0" placeholder="search any course, institute..." />
                <div role={'button'} > <BsSearch /> </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.navbarMobContainer + " d-flex d-md-none  justify-content-between align-items-center pb-2"}>
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
