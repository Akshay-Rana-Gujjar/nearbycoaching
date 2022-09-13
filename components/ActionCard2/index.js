/* eslint-disable @next/next/no-img-element */
import { FaRupeeSign } from 'react-icons/fa';
import { IoStar } from 'react-icons/io5';
import styles from './styles.module.css';

export default function ActionCard2({
  title = "IDBI Bank Executive by Safalta",
  courseBy = "Safalta",
  classType = "Video",
  startDate = "18 Aug",
  price = "999",
  imageSrc = "https://www.whoistheownerof.com/wp-content/uploads/2018/02/Owner-of-IDBI-Bank-India-Logo-Wiki-profile-1.jpg",
  backdropColor = "#00836c",
}) {
  return (
    <div className={`${styles["action_card_2_container"]} bg-white d-flex border shadow-sm overflow-hidden mb-3`}>
      <div style={{backgroundColor: backdropColor}}  className={`${styles["action_card_2_img"]} w-50 p-4 d-flex justify-content-center align-items-center`} >
        <img src={imageSrc} alt="a" className='img-fluid' width={"100%"}
            height={"100%"}
            loader={({ src }) => src}
            layout="cover"  />
      </div>
      <div className='p-2'>
        <div className='text-truncate fs-6 fw-bold'>
        {title}
        </div>
        <div className="d-flex justify-content-between text-muted mb-2">
            by {courseBy}
            <div className={`d-flex ${styles["action_card__item_rating"]}`}>
              <IoStar color="#FFD233" />
              <IoStar color="#FFD233" />
              <IoStar color="#FFD233" />
              <IoStar color="#FFD233" />
              <IoStar color="#FFD233" />
            </div>
        </div>
        <div  className='mb-2'>
            Class type: <span className='rounded-pill bg-danger p-1 px-2' style={{"--bs-bg-opacity":.3}}>{classType}</span>
        </div>
        <div className='mb-2'>
            Start on <span className='rounded-pill bg-warning p-1 px-2' style={{"--bs-bg-opacity":.3}}>{startDate}</span>
        </div>
        <div
          role={"button"}
          className={`${styles["action_card_2_item_cta"]} rounded p-2 text-white text-center d-flex align-items-center justify-content-center`}
        >
          Enroll now for &nbsp; <FaRupeeSign size={12} />
          {price}
        </div>

      </div>
    </div>
  );
}
