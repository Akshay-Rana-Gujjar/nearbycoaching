import { useRouter } from "next/router";
import { IoArrowBackOutline } from "react-icons/io5";
import { BsFillBarChartFill } from "react-icons/bs";
import ActionCard2 from "../../components/ActionCard2";
import FAQContainer from "../../components/FAQContainer";
import InstituteCard from "../../components/InstituteCard";
import Subscription from "../../components/Subscription";

export default function Category() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="container">
      <div className="d-flex">
        <div
          onClick={() => {
            router.back();
          }}
        >
          <IoArrowBackOutline size={24} />
        </div>
        <div className="fs-4 text-uppercase fw-bold">{category}</div>
      </div>
      <ActionCard2 />
      <ActionCard2 />
      <ActionCard2 />

      <div className="mb-2">
            <BsFillBarChartFill color="#FFE381" size={24} />
            <span className="fw-bold fs-4 ms-2">Top 5 National Institutes</span>
          </div>
      <InstituteCard/>
      <InstituteCard/>
      <InstituteCard/>
      <InstituteCard/>

      <FAQContainer />

      <Subscription />

          
      <div className="mb-5">&nbsp; </div>
      <div className="mb-5 small">copyright &copy;</div>
      <div className="mb-5"> </div>
    </div>
  );
}
