import { IoCheckmarkSharp, IoCloseSharp, IoLocationSharp } from "react-icons/io5";
import styles from './styles.module.css';

const imgUrl = "https://www.makemyexam.in/web_assets/img/logo.png";
export default function InstituteCard() {
  return (
    <div className={` ${styles["institute_container"]} bg-white border overflow-hidden mb-3 shadow-sm`}>
      <div className="d-flex">
        <div className="w-50  bg-primary d-flex align-items-center justify-content-center" style={{"--bs-bg-opacity": .4}} >
          <img src={imgUrl} alt="" />
        </div>
        <div className=" p-2 ">
          <div className="fs-4 fw-bold">Make my Exam</div>
          <div className="d-flex align-items-center text-muted">
            <IoLocationSharp color="grey" />
            <span>Jalandhar</span>
          </div>
          <div className="fw-bold">
            <div className="d-flex align-items-center">
                <IoCheckmarkSharp/>
                <span>Online Coaching</span>
            </div>
            <div className="d-flex align-items-center">
                <IoCheckmarkSharp/>
                <span>Offline Coaching</span>
            </div>
            <div className="d-flex align-items-center">
                <IoCheckmarkSharp/>
                <span>Video Course</span>
            </div>
            <div className="d-flex align-items-center">
                <IoCloseSharp/>
                <span>Hostle Facility</span>
            </div>
          </div>
        </div>
      </div>
      <div role={'button'} className={` ${styles['institute_cta']} text-center py-2 fw-bold text-white fs-5`}>Book Demo</div>
    </div>
  );
}
