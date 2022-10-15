import { useRouter } from "next/router";
import { IoArrowBackOutline } from "react-icons/io5";
import { BsFillBarChartFill } from "react-icons/bs";
import ActionCard2 from "../../components/ActionCard2";
import FAQContainer from "../../components/FAQContainer";
import InstituteCard from "../../components/InstituteCard";
import Subscription from "../../components/Subscription";
import Categories from "../../components/Categories";

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

export default function Category() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="container px-4">
      <div className="d-flex py-2">
        <div
          onClick={() => {
            router.back();
          }}
        >
          <IoArrowBackOutline size={24} />
        </div>
        <div className="fs-4 text-uppercase fw-bold">{category}</div>
      </div>
      <Categories />
      <ActionCard2 />
      <ActionCard2 />
      <ActionCard2 />

      <div className="mb-2">
        <BsFillBarChartFill color="#FFE381" size={24} />
        <span className="fw-bold fs-4 ms-2">Top 5 National Institutes</span>
      </div>
      <InstituteCard />
      <InstituteCard />
      <InstituteCard />
      <InstituteCard />

      <FAQContainer />

      <Subscription />


      <div className="mb-5">&nbsp; </div>
      <div className="mb-5 small">copyright &copy;</div>
      <div className="mb-5"> </div>
    </div>
  );
}
