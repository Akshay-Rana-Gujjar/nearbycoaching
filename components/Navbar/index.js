import Link from "next/link";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import { IoMenu, IoNotificationsOutline } from "react-icons/io5";
import styles from "./styles.module.css";
import CategoryOverlay from "../CategoryOverlay";
import { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "../../provider/StoreProvider";
import SearchBar from "../Search";
import search from "../../api/search";

export default function Navbar() {
  const router = useRouter();
  const activeRoute = router.pathname;
  const env = process.env.NODE_ENV;

  const { getCurrentUser, deleteCurrentUser } = useContext(StoreContext);

  const [userInputData, setUserInputData] = useState({});
  const [searchSuggestionList, setSearchSuggestionList] = useState([]);
  const navBarRef = useRef(null);

  console.log({ env });

  let SERVER_DOMAIN = env === "development" ? "http://localhost:5000" : "/";

  const [showPopup, setShowPopup] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  const [shouldFixedNabvar, setShouldFixedNabvar] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;

    setUserInputData((prev) => ({ ...prev, [name]: value }));
  }

  function handleLogin() {
    const { password, username } = userInputData;

    if (!password || !username) {
      return alert("All fields are mandatory.");
    }

    login({ username, password });
  }

  function handleSingUp() {
    const { confirm_password, password, username } = userInputData;

    if (!confirm_password || !password || confirm_password != password)
      return alert("Password & Confirm Password are not same.");

    if (!username) return alert("Email is mandatory.");

    signup({ username, password });
  }

  function signup(data) {
    if (!data) throw "Data for signup required.";

    const SINGUP_ENDPOINT = "/api/v1/signup";
    const FULL_SIGNUP_URL = SERVER_DOMAIN + SINGUP_ENDPOINT;

    fetch(FULL_SIGNUP_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Your account is created now you can log into your account.");
      })
      .catch((err) => {
        console.log({ err });
      });
  }

  function login(data) {
    if (!data) throw "Data for login required.";
    const LOGIN_ENDPOINT = "/api/v1/login";
    const FULL_LOGIN_URL = SERVER_DOMAIN + LOGIN_ENDPOINT;

    fetch(FULL_LOGIN_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          localStorage.setItem("token", data.token);
          setCurrentUser(getCurrentUser());
          setShowPopup(false);
        } else if (data?.message) {
          alert(data.message);
        }
        console.log(data);
      })
      .catch((err) => {
        if (err?.message) alert(err.message);
        console.log({ err });
      });
  }

  function handleLogout() {
    console.log("logout called");
    deleteCurrentUser();
    setCurrentUser(null);
  }

  console.log({ currentUser });

  async function handleSearch(e){
    const {value} = e.target;
    if(value?.length < 2) return setSearchSuggestionList([]);
    const {data: searchResult} = await search(value);
    console.log({searchResult});
    setSearchSuggestionList(searchResult);
  }

  useEffect(() => {
    setCurrentUser(getCurrentUser());
    window.onscroll = function(){
        setShouldFixedNabvar(navBarRef.current && scrollY > parseInt(getComputedStyle(navBarRef.current).height));
    }
  }, []);

  return (
    <>
      <div>
        <div className={"bg-white shadow mb-31 "+(shouldFixedNabvar && "position-fixed start-0 end-0 ")} style={{zIndex: 10}} ref={navBarRef}>
          <div className="container  d-md-flex d-none justify-content-start gap-5 align-items-center p-3">
            <div className="navbar__welcome-text h3">
              <Link href="/">NearbyCoaching</Link>
            </div>

            <div>
              <div className="d-flex gap-3 ">
                {/* <div className="d-flex border px-2 rounded">
                  <input
                    type="text"
                    className={`border-0 ${styles["navbar-search-input"]}`}
                    placeholder="search any course, institute..."
                  />
                  <div role={"button"}>
                    {" "}
                    <BsSearch />{" "}
                  </div>
                </div> */}
                <div className="d-flex" style={{"width": "500px"}}>
                  {/* <input type="text" className="form-cntrol w-100" placeholder="search any course, institute..." onChange={handleSearch} /> */}
                  <SearchBar onChange={handleSearch} suggestionsList={searchSuggestionList} />
                </div>
                <div className={activeRoute === "/" && "fw-bold"}>
                  {" "}
                  <Link href={"/"}> Home</Link>
                </div>

                <div
                  className={
                    (activeRoute === "#" && "fw-bold") +
                    "  position-relative " +
                    styles.categoryOverlayParent
                  }
                >
                  {" "}
                  <Link href={"#"}> Categories</Link>
                  <div
                    className={
                      "position-absolute translate-middle-x1 " +
                      styles.categoryOverlay
                    }
                    style={{ zIndex: 100 }}
                  >
                    <CategoryOverlay />
                  </div>
                </div>
                <div className={activeRoute === "/blog" && "fw-bold"}>
                  {" "}
                  <Link href={"/blog"}> Blog</Link>
                </div>
                {!currentUser ? (
                  <div
                    role="button"
                    onClick={() => {
                      setShowPopup("login");
                    }}
                  >
                    Login
                  </div>
                ) : (
                  <div role="button" onClick={() => handleLogout()}>
                    Logout
                  </div>
                )}
                
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            styles.navbarMobContainer +
            " d-flex d-md-none  justify-content-between align-items-center pb-2"
          }
        >
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
      {showPopup === "login" && (
        <div
          className="position-fixed top-0 bottom-0 start-0 end-0 bg-dark"
          style={{ "--bs-bg-opacity": 0.9, zIndex: 100 }}
        >
          <div
            className={
              "position-fixed translate-middle top-50 start-50 bg-white px-3 py-2 w-25 rounded"
            }
          >
            <div>
              <div className="h3">Login</div>
              <div
                role={"button"}
                className="btn-close position-absolute end-0 top-0"
                onClick={() => setShowPopup(false)}
              ></div>
              <input
                type="text"
                placeholder="email"
                className="form-control mb-3"
                name="username"
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="password"
                name="password"
                onChange={handleInputChange}
              />
              <button className="btn btn-primary mb-4" onClick={handleLogin}>
                Login
              </button>

              <div>
                Don't have account sign up{" "}
                <span
                  role="button"
                  className="text-primary"
                  onClick={() => setShowPopup("signup")}
                >
                  here
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPopup === "signup" && (
        <div
          className="position-fixed top-0 bottom-0 start-0 end-0 bg-dark"
          style={{ "--bs-bg-opacity": 0.9, zIndex: 100 }}
        >
          <div
            className={
              "position-fixed translate-middle top-50 start-50 bg-white px-3 py-2 w-25 rounded"
            }
          >
            <div>
              <div className="h3">Sign up</div>
              <div
                role={"button"}
                className="btn-close position-absolute end-0 top-0"
                onClick={() => setShowPopup(false)}
              ></div>
              <input
                type="text"
                placeholder="email"
                className="form-control mb-3"
                name="username"
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="password"
                name="password"
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="confirm password"
                name="confirm_password"
                onChange={handleInputChange}
              />
              <button className="btn btn-primary mb-4" onClick={handleSingUp}>
                Sign up
              </button>

              <div>
                Have account already login{" "}
                <span
                  role="button"
                  className="text-primary"
                  onClick={() => setShowPopup("login")}
                >
                  here
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
