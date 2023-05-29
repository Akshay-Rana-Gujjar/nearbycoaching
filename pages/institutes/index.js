import { useEffect, useState } from "react";
import InstituteCard from "../../components/InstituteCard";
import Navbar from "../../components/Navbar";
import useUserCollection from "../../hooks/firebase/user";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default ({ isMobile }) => {
  const [userData, setUserData] = useState([]);
  const { getUser, processing } = useUserCollection();

  console.log({ userData });

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    setUserData(await getUser());
  }

  return (
    <>
      {!isMobile && <Navbar />}
      <div className="container pt-2">
        <div className="row">
          {processing ? (
            <>
              <div className="col-12 col-sm-6">
                <Skeleton height={"230px"} />
              </div>
              <div className="col-12 col-sm-6">
                <Skeleton height={"230px"} />
              </div>
              <div className="col-12 col-sm-6">
                <Skeleton height={"230px"} />
              </div>
              <div className="col-12 col-sm-6">
                <Skeleton height={"230px"} />
              </div>
            </>
          ) : (
            userData.map((user) => {
              return (
                <>
                  <div className="col-12 col-sm-6">
                    <InstituteCard data={user} />
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
