import { IoCheckmarkDone, IoCheckmarkOutline, IoCheckmarkSharp, IoCloseSharp, IoLocationSharp } from "react-icons/io5";
import styles from './styles.module.css';

const imgUrl = "/1.jpg";
export default function InstituteCard({data}) {
  return (
    <div className={` ${styles["institute_container"]} bg-white border overflow-hidden mb-3 shadow-sm`}>
      <div className="d-flex">
        <div className="w-50  bg-primary d-flex align-items-center justify-content-center" style={{"--bs-bg-opacity": .4}} >
          <img src={data?.img || imgUrl} alt="" style={{height: "100%"}} />
        </div>
        <div className=" p-2 w-50 ">
          <div className="fs-4 fw-bold text-truncate ">{data?.firstname && `${data?.firstname} ${data?.lastname}` ||  "Make my Exam"}</div>
          <div className="d-flex align-items-center text-muted">
            <IoLocationSharp color="grey" />
            <span>Jalandhar</span>
          </div>
          <div className="fw-bold1 small">
            <div className="d-flex align-items-center">
                <IoCheckmarkSharp color="green" />
                <span>Online Coaching</span>
            </div>
            <div className="d-flex align-items-center">
                <IoCheckmarkSharp color="green"/>
                <span>Offline Coaching</span>
            </div>
            <div className="d-flex align-items-center">
                <IoCheckmarkSharp color="green"/>
                <span>Video Course</span>
            </div>
            <div className="d-flex align-items-center">
                <IoCloseSharp color="red"/>
                <span>Hostle Facility</span>
            </div>
          </div>
        </div>
      </div>
      <div role={'button'} className={` ${styles['institute_cta']} text-center py-2 fw-bold text-white fs-5`}>Book Demo</div>
    </div>
  );
}
