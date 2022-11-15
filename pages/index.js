import ActionCardsContainer from "../components/ActionCardsContainer";
import Categories from "../components/Categories";
import FAQContainer from "../components/FAQContainer";
// import FAQItems from "../components/FaqItem";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Search";
import Subscription from "../components/Subscription";
import useIsMobile from "../hooks/useIsMobile";
import styles from './styles.module.css';

export default function Home() {

  const isMobile = useIsMobile();

  const bg2 = {
    "background-color": "#FBAB7E",
    "background-image": "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"
  }
  const bg3 = {
    "background-color": "#8EC5FC",
    "background-image": "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
  }

  return (
    <div className={isMobile ? "container" : ""}>
      <Navbar />
      {isMobile && <>
        <div className="w-500">
          <div className="h2">Let&apos;s find the Best Course for You!</div>
        </div>
        <SearchBar />
      </>}
      <div className="mb-2"></div>
      {!isMobile && <div className="container mb-2 rounded text-white mb-4 " style={{
        "background-color": "#0093E9",
        "background-image": "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        // ...bg2,
        // ...bg3
      }} >

        <div className="d-flex justify-content-between align-items-center px-5">
          <div>
            <div className="h1">
              Near By Coaching
            </div>

            <div className="mb-5">
              Nearbycoaching is your one-stop location for all education
              <br />providers and students.

            </div>

            <div>
              <div className="btn bnt-lg btn-outline-light">Explore More</div>
            </div>


          </div>
          <div>
            <img src="https://testbook.com/assets/img/index/home-banner__illust.svg" alt="" />
          </div>
        </div>
      </div>}

      {!isMobile && <>

        <div className="container">
          <div className="h5 border-start border-primary border-2 ps-2">
            Popular Exams
            <br />
          </div>
          <small className="text-muted">Get exam-ready with concepts, questions and study notes as per the latest pattern</small>
        </div>
      </>
      }
      <div className={!isMobile && "container mb-4"}>
        <div className={!isMobile && "bg-white p-2 border border-light shadow-sm rounded"}>
          <Categories />
        </div>
      </div>
      <div className="mb-2"></div>
      <div className={"d-flex justify-content-between " + (!isMobile && "container")}>
        <h2 className={isMobile ? "h6" : "h5 border-start border-primary border-2 ps-2"}>Banking</h2>
        {isMobile && <div className="text-muted">see more</div>}
      </div>
      <div className={(!isMobile && "container")}>

        <ActionCardsContainer exploreMoreLink="/category/banking" />
      </div>
      <div className={"d-flex justify-content-between " + (!isMobile && "container")}>
        <h2 className={isMobile ? "h6" : "h5 border-start border-primary border-2 ps-2"}>Civil Service</h2>
        {isMobile && <div className="text-muted">see more</div>}
      </div>
      <div className={(!isMobile && "container")}>

        <ActionCardsContainer exploreMoreLink="/category/upsc" />
      </div>

      <div className={!isMobile && "container"}>

        <FAQContainer />
        <div className="d-flex justify-content-center">
          <div className={styles["subscription_container"] + ""}>
            <Subscription />
          </div>
        </div>
      </div>
    </div>
  );
}
