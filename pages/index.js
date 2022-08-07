import ActionCardsContainer from "../components/ActionCardsContainer";
import Categories from "../components/Categories";
import FAQContainer from "../components/FAQContainer";
import FAQItems from "../components/FaqItem";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Search";
import Subscription from "../components/Subscription";

export default function Home() {
  return (
    <div className={"container"}>
      <Navbar />
      <div className="w-50">
        <h2>Let&apos;s find the Best Course for You!</h2>
      </div>
      <SearchBar/>
      <div className="mb-2"></div>
      <Categories/>
      <div className="mb-2"></div>
      <div className="d-flex justify-content-between">
        <h2 className="h5">Banking</h2>
        <div className="text-muted">see more</div>
      </div>
      <ActionCardsContainer/>
      <div className="d-flex justify-content-between">
        <h2 className="h5">Civil Service</h2>
        <div className="text-muted">see more</div>
      </div>
      <ActionCardsContainer/>

      <FAQContainer/>

      <Subscription/>
    </div>
  );
}
