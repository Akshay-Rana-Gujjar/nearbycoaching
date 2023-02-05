import { useRouter } from "next/router";
import { IoArrowBackOutline } from "react-icons/io5";
import { BsFillBarChartFill } from "react-icons/bs";
import ActionCard2 from "../../components/ActionCard2";
import FAQContainer from "../../components/FAQContainer";
import InstituteCard from "../../components/InstituteCard";
import Subscription from "../../components/Subscription";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.css";
import { FaRupeeSign } from "react-icons/fa";
import NotFound404 from "../../components/NotFound404";
import { useEffect, useState } from "react";
import useCategoryCollection from "../../hooks/firebase/category";
import { CATEGORY_COLLECTION } from "../../constants/firebase";
import useCourseCollection from "../../hooks/firebase/course";

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
        <div className={!isMobile && "container mb-4"}>
          {categoryData.htmlDesc && <div
            className="bg-white shadow-sm p-2 rounded mb-3 "
            dangerouslySetInnerHTML={{
              __html: categoryData.htmlDesc,
            }}
          />}
          {/* <div className="table-responsive">

            <table className="table table-bordered  bg-white shadow-sm">
              <thead>
                <tr>

                  <th scope="col" colSpan="3" className="text-center bg-primary1 text-white1" >Banking Details</th>

                </tr>
              </thead>
              <tbody className="border-1">
                <tr>
                  <td>Course Type</td>
                  <td>Video</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>Banking | IDBI Bank</td>
                </tr>
                <tr>
                  <td>Course Total Duration</td>
                  <td>67 Days</td>

                </tr>
                <tr>
                  <td>Course Total Hours</td>
                  <td>60 hrs</td>

                </tr>
                <tr>
                  <td>Class Total Days</td>
                  <td>60 Days</td>
                </tr>
                <tr>
                  <td>Class Timing</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Class Strength</td>
                  <td>50 Students</td>
                </tr>
                <tr>
                  <td>Course Fee</td>
                  <td><FaRupeeSign size={12} />

                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
          {/* <div
            className={
              !isMobile && "bg-white p-2 border border-light shadow-sm rounded"
            }
          >
            <Categories />
          </div> */}
        </div>
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
          <FAQContainer />
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
