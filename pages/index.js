import { useContext, useEffect, useState } from "react";
import ActionCardsContainer from "../components/ActionCardsContainer";
import Categories from "../components/Categories";
import FAQContainer from "../components/FAQContainer";
// import FAQItems from "../components/FaqItem";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Search";
import Subscription from "../components/Subscription";
import useCourseCollection from "../hooks/firebase/course";
import useIsMobile from "../hooks/useIsMobile";
import { StoreContext } from "../provider/StoreProvider";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./styles.module.css";

export default function Home() {
  const [categoryData, setCategoryData] = useState([]);
  const [featuredCategory, setFeaturedCategory] = useState([]);
  const [featuredCourse, setFeaturedCourse] = useState({});

  const isMobile = useIsMobile();

  const { getCategoriesCollection } = useContext(StoreContext);

  const { getDocumentsByQuery } = useCourseCollection();

  useEffect(() => {
    fetchCategory();
  }, []);

  async function fetchCategory() {
    const _categoryData = await getCategoriesCollection();
    setCategoryData(_categoryData);
    const featuredCategoryData = _categoryData.filter((item) => {
      return item.featureAtHome;
    });
    setFeaturedCategory(featuredCategoryData);
    fetchFeaturedCourses(featuredCategoryData);
  }

  async function fetchFeaturedCourses($featuredCategoryData = []) {
    const titles = $featuredCategoryData.map((item) => {
      return item.title;
    });

    const query = [
      {
        property: "category",
        operator: "in",
        value: titles,
      },
      {
        property: "featured",
        operator: "==",
        value: true,
      },
    ];

    const $featuredCourses = await getDocumentsByQuery(query);

    const featureCourseObj = $featuredCourses.reduce((obj, item) => {
      if (!obj[item.category]) obj[item.category] = [];

      obj[item.category]?.push(item);

      return obj;
    }, {});

    setFeaturedCourse(featureCourseObj);
  }

  function FeatureCategoryItem({ itemData = {} }) {
    if (
      !featuredCourse[itemData.title] ||
      !featuredCourse[itemData.title].length
    ) {
      return null;
    }

    return (
      <>
        <div
          className={
            "d-flex justify-content-between " + (!isMobile && "container")
          }
        >
          <h2
            className={
              isMobile ? "h6" : "h5 border-start border-primary border-2 ps-2"
            }
          >
            {itemData.title}
          </h2>
          {isMobile && <div className="text-muted">see more</div>}
        </div>
        {featuredCourse[itemData.title] &&
          featuredCourse[itemData.title].length && (
            <div className={!isMobile && "container"}>
              <ActionCardsContainer
                carditems={featuredCourse[itemData.title]}
                exploreMoreLink={`/category/${itemData?.title?.replaceAll(
                  " ",
                  "-"
                )}-${itemData.id}`}
              />
            </div>
          )}
      </>
    );
  }

  return (
    <div className={isMobile ? "container" : ""}>
      <Navbar />
      {isMobile && (
        <>
          <div className="w-500">
            <div className="h2">Let&apos;s find the Best Course for You!</div>
          </div>
          {/* <SearchBar /> */}
        </>
      )}
      {/* <div className="mb-2"></div> */}
      {!isMobile && (
        <div
          className="container-fluid mb-2 text-white mb-4 "
          style={{
            "background-color": "#0093E9",
            "background-image":
              "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
          }}
        >
          <div className="d-flex container justify-content-between align-items-center px-5">
            <div>
              <div className="h1">Near By Coaching</div>

              <div className="mb-5">
                Nearbycoaching is your one-stop location for all education
                <br />
                providers and students.
              </div>

              <div>
                <div className="btn bnt-lg btn-outline-light">Explore More</div>
              </div>
            </div>
            <div>
              <img
                src="https://testbook.com/assets/img/index/home-banner__illust.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      )}

      {!isMobile && (
        <>
          <div className="container">
            <div className="h5 border-start border-primary border-2 ps-2">
              Popular Exams
              <br />
            </div>
            <small className="text-muted">
              Get exam-ready with concepts, questions and study notes as per the
              latest pattern
            </small>
          </div>
        </>
      )}
      <div className={!isMobile && "container mb-4"}>
        <div
          className={
            !isMobile && "bg-white p-2 border border-light shadow-sm rounded"
          }
        >
          {categoryData.length ? (
            <Categories categoryList={categoryData} />
          ) : (
            <>
              <Skeleton circle height={"70px"} width={"70px"} />
              <Skeleton width={"70px"} />
            </>
          )}
        </div>
      </div>
      <div className="mb-2"></div>
      {featuredCategory.length ? (
        featuredCategory.map((item) => <FeatureCategoryItem itemData={item} />)
      ) : (
        <div
          className={
            "d-flex justify-content-between " + (!isMobile && "container")
          }
        >
          {new Array(6).fill(5).map(a=><Skeleton height={"230px"} width={"180px"} />)}
          
        </div>
      )}
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
