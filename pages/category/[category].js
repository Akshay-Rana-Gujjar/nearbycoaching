import { useRouter } from "next/router";
import { IoArrowBackOutline } from "react-icons/io5";
import { BsFillBarChartFill } from "react-icons/bs";
import ActionCard2 from "../../components/ActionCard2";
import FAQContainer from "../../components/FAQContainer";
import InstituteCard from "../../components/InstituteCard";
import Subscription from "../../components/Subscription";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.css";
import NotFound404 from "../../components/NotFound404";
import { useEffect, useState } from "react";
import useCategoryCollection from "../../hooks/firebase/category";
import { CATEGORY_COLLECTION } from "../../constants/firebase";
import useCourseCollection from "../../hooks/firebase/course";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Category({ isMobile }) {
  const router = useRouter();

  const { getCategory, processing } =
    useCategoryCollection(CATEGORY_COLLECTION);

  const [categoryData, setCategoryData] = useState({});

  const { category } = router.query;

  const [categoryId] = category?.split("-").slice(-1) || [];

  const { getDocumentsByQuery } = useCourseCollection();

  const [featuredCourse, setFeaturedCourse] = useState([]);

  console.log({categoryId});

  useEffect(() => {
    if (categoryId){ 
      fetchCategory();
    }
  }, [categoryId]);

  async function fetchCategory() {
    const cat = await getCategory(categoryId);
    setCategoryData(cat);
    console.log({ cat });
    fetchFeaturedCourses(cat);
  }

  async function fetchFeaturedCourses($featuredCategoryData){

    const titles = [$featuredCategoryData.title];

    console.log({titles});

    const query = [
      {
        property: "category",
        operator: "in",
        value: titles
      },
      {
        property: "featured",
        operator: "==",
        value: true
      }
    ];

    const $featuredCourses = await getDocumentsByQuery( query );
    setFeaturedCourse($featuredCourses);
    console.log({$featuredCourses})
  }

  if (!categoryId && router.isReady) {
    return <NotFound404 isMobile={isMobile} />;
  }



  return (
    <>
      {!isMobile && <Navbar />}
      <div className="container px-4">
        <div className="d-flex py-2">
          {isMobile && (
            <div
              onClick={() => {
                router.back();
              }}
            >
              <IoArrowBackOutline size={24} />
            </div>
          )}
          <div
            className={
              (isMobile
                ? "fs-4"
                : "fs-6 border-start border-2 border-primary ps-3") +
              " text-uppercase fw-bold"
            }
          >
            {categoryData.title}
          </div>
        </div>
        {processing ? <div className="mb-3">
            <Skeleton height={"150px"} />
          </div> :
          
          <div className={!isMobile && "container mb-4"}>
          {categoryData.htmlDesc && <div
            className="bg-white shadow-sm p-2 rounded mb-3 "
            dangerouslySetInnerHTML={{
              __html: categoryData.htmlDesc,
            }}
          />}
          {/* <div
            className={
              !isMobile && "bg-white p-2 border border-light shadow-sm rounded"
            }
          >
            <Categories />
          </div> */}
        </div>}
        <div className="row">
          {featuredCourse.map(course=><div className="col-12 col-sm-6">
            <ActionCard2 {...course} />
          </div>)}
        </div>

        <div className="mb-2">
          <BsFillBarChartFill color="#FFE381" size={24} />
          <span className="fw-bold fs-4 ms-2">Top 5 National Institutes</span>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <InstituteCard />
          </div>
          <div className="col-12 col-sm-6">
            <InstituteCard />
          </div>
          <div className="col-12 col-sm-6">
            <InstituteCard />
          </div>
          <div className="col-12 col-sm-6">
            <InstituteCard />
          </div>
        </div>

        <div className={!isMobile && "container"}>
          {processing ? <div className="mb-3">
            <Skeleton height={"100px"} />
          </div> :
          <FAQContainer  data={categoryData.faqs}/>}
          <div className="d-flex justify-content-center">
            <div className={styles["subscription_container"] + ""}>
              <Subscription />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
