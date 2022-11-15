import { useRouter } from "next/router";
import { IoArrowBackOutline } from "react-icons/io5";
import { BsFillBarChartFill } from "react-icons/bs";
import ActionCard2 from "../../components/ActionCard2";
import FAQContainer from "../../components/FAQContainer";
import InstituteCard from "../../components/InstituteCard";
import Subscription from "../../components/Subscription";
import Categories from "../../components/Categories";
import Navbar from "../../components/Navbar";
import styles from './styles.module.css';
import { FaRupeeSign } from "react-icons/fa";

const subcategory = {
  banking: [
    { name: "Canara Bank PO" },
    { name: "IBPS Clerk" },
    { name: "IBPS PO" },
    { name: "IBPS RRB" },
    { name: "IBPS SO" },
    { name: "IDBI Bank" },
    { name: "RBI Grade B" },
    { name: "SBI Clerk" }
  ],
  ssc: [],
  upsc: [],

}

export default function Category({ isMobile }) {
  const router = useRouter();
  const { query } = router.query;


  return (
    <>
      {!isMobile && <Navbar />}
      <div className="container px-4">
        <div className="d-flex py-2">
          {isMobile && <div
            onClick={() => {
              router.back();
            }}
          >
            <IoArrowBackOutline size={24} />
          </div>}
          <div className={(isMobile ? "fs-4" : "fs-6 border-start border-2 border-primary ps-3") + " text-uppercase fw-bold"}>{query}</div>
        </div>
        <div className={!isMobile && "container mb-4"}>
          <div className="bg-white shadow-sm p-2 rounded mb-3 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ea excepturi mollitia quasi itaque optio necessitatibus libero sit deserunt dolore delectus suscipit similique vero placeat, enim nobis dolores. Consectetur, numquam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ea excepturi mollitia quasi itaque optio necessitatibus libero sit deserunt dolore delectus suscipit similique vero placeat, enim nobis dolores. Consectetur, numquam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ea excepturi mollitia quasi itaque optio necessitatibus libero sit deserunt dolore delectus suscipit similique vero placeat, enim nobis dolores. Consectetur, numquam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ea excepturi mollitia quasi itaque optio necessitatibus libero sit deserunt dolore delectus suscipit similique vero placeat, enim nobis dolores. Consectetur, numquam.
            <div className="mb-3">  </div>
            <h6>Heading of bullet points:</h6>
            <ul>
              <li>item 1 lorem ipsum</li>
              <li>item 2 lorem ipsum</li>
              <li>item 3 lorem ipsum</li>
              <li>item 4 lorem ipsum</li>
            </ul>

          </div>
          <div className="table-responsive">

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
          </div>
          <div className={!isMobile && "bg-white p-2 border border-light shadow-sm rounded"}>

            <Categories />
          </div></div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <ActionCard2 />

          </div>
          <div className="col-12  col-sm-6">
            <ActionCard2 />

          </div>
          <div className="col-12  col-sm-6">
            <ActionCard2 />

          </div>
          <div className="col-12  col-sm-6">
            <ActionCard2 />

          </div>
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
