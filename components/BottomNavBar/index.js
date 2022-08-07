import React from "react";
import styles from "./styles.module.css";
import { AiFillHome, AiOutlineHome, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoPersonOutline, IoPerson, IoNewspaperOutline, IoNewspaper } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomNavBar() {
  const router = useRouter();
  const activeRoute = router.pathname;
  console.log({activeRoute});



  return (
    <div
      className={`${styles.bottom_navbar__container} position-fixed bottom-0 w-100 bg-white d-flex justify-content-around p-3 py-1`}
    >
      <Link href={"/"}>
        <div className={` border1 d-flex flex-column align-items-center`}>
          {activeRoute == "/" ? <AiFillHome size={24} /> : <AiOutlineHome size={24} />}
          Home
        </div>
      </Link>
      <Link href={"/test"}>
        <div className={` border1 d-flex flex-column align-items-center`}>
          {activeRoute =="/test" ? <IoNewspaper size={24} /> : <IoNewspaperOutline size={24} />}
          Test
        </div>
      </Link>
      <Link href={"/wishlist"}>
        <div className={` border1 d-flex flex-column align-items-center`}>
          {activeRoute === '/wishlist' ? <AiFillHeart size={24}/> : <AiOutlineHeart size={24} />}
          Wishlist
        </div>
      </Link>
      <Link href={"/account"}>
        <div className={` border1 d-flex flex-column align-items-center`}>
          {activeRoute ==='/account'? <IoPerson size={24}/> :<IoPersonOutline size={24} />}
          Account
        </div>
      </Link>
    </div>
  );
}
