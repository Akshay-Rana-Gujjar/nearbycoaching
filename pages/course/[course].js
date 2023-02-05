import { useRouter } from "next/router";
import { FaRupeeSign } from "react-icons/fa";
import { IoArrowBackOutline, IoStar } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../components/Navbar";
import styles from './styles.module.css';
import Link from 'next/link';
import ActionCardsContainer from '../../components/ActionCardsContainer'
import { useEffect, useState } from "react";
import useCourseCollection from "../../hooks/firebase/course";


export default function Course({ isMobile }) {
    const router = useRouter();
    const { course } = router.query;

    const [courseId] = course?.split("-").slice(-1) || [];

    const [courseData, setCourseData] = useState([]);

    const data = courseData || {};

    const {getDocument} = useCourseCollection();
    
    useEffect(() => {
      if(courseId){
        fetchCourseById(courseId);
      }
    }, [courseId])
    

    //slider setting

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 2,
        slidesToScroll: 1,
        centerMode: true,
        arrows: !isMobile
    };

    async function fetchCourseById(id){

        if(!id){
            throw "document id is mandatory."
        }

        const doc = await getDocument(id);
        
        console.log({doc});

        setCourseData(doc);
    }

    return <>
        {!isMobile && <Navbar />}
        <div className="container-fluid1 px-41 mb-5">
            <div className="bg-white">
                {isMobile && <div className="d-flex py-2 position-absolute px-2 m-3 rounded-circle bg-black" style={{ "--bs-bg-opacity": 0.5 }} >
                    {<div
                        onClick={() => {
                            router.back();
                        }}

                    >
                        <IoArrowBackOutline size={24} color="white" />
                    </div>}
                    <div className="fs-4 text-uppercase1
                 fw-bold text-muted"></div>
                </div>}
                {isMobile && <img style={{ backgroundColor: data.backdropColor, padding: "5px" }} src={data.imageSrc || "/1.jpg"} className="img-fluid w-100" alt="" />}
            </div>
            <div className="container px-2">
                <div className={!isMobile && "d-flex justify-content-between mb-3"}>
                    <div>

                        <h1 className="text-bold">
                            {data.title}
                        </h1>
                        <div className={`d-flex`}>
                            <IoStar color="#FFD233" />
                            <IoStar color="#FFD233" />
                            <IoStar color="#FFD233" />
                            <IoStar color="#FFD233" />
                            <IoStar color="#FFD233" />
                        </div>
                        <small className={(isMobile ? "fs-5" : "fs-6") + " text-muted"}>By: <Link href={"/profile/" + data.courseBy}  ><span className="text-decoration-underline" role="button">{data.courseBy}</span></Link></small>
                        <div className="d-flex text-muted align-items-center fs-5 mb-2">
                            Course type: <span className="fw-bold ms-2 fs-5 rounded-pill border border-danger px-3 text-white1" >{data.courseType}</span>
                        </div>
                        <div className="d-flex text-muted align-items-center fs-5 mb-2">
                            Start from: <span className="fw-bold ms-2 fs-5 rounded-pill border border-warning px-3 text-white1" >{data.startDate}</span>
                        </div>
                    </div>
                    {!isMobile && <img style={{ backgroundColor: data.backdropColor, padding: "5px" }} src={data.imageSrc || "/1.jpg"} className="img-fluid w-25 rounded" alt="" />}

                </div>

                <div
                    role={"button"}
                    className={`p-2 mb-11  text-white text-center d-flex align-items-center justify-content-center bg-primary1 rounded ${!isMobile && "w-25 fs-5" || "fs-4"} `}
                    style={{ backgroundColor: "var(--primary)" }}
                >
                    Enroll now for &nbsp; <FaRupeeSign size={14} />
                    {data.price}
                </div>
                <hr />
                <div>
                    <div className="fs-3">Course Overview</div>
                    <div className="mb-2">{data.description}</div>
                    <div className="table-responsive">

                        <table className="table table-bordered  bg-white shadow-sm">
                            <thead>
                                <tr>

                                    <th scope="col" colSpan="3" className="text-center bg-primary1 text-white1" >Course Details</th>

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
                                        {data.price}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="course-faculty mb-5">
                    <div className="fs-3 mb-2 fw-bold">Our Expert Faculty</div>
                    <style>{`
                        .faculty-carousel .slick-prev:before,.faculty-carousel .slick-next:before{
                            color: black;
                        }
                    `}
                    </style>
                    <Slider {...settings} className={"faculty-carousel"}>

                        <div className="">
                            <div className="mx-3 my-1 card py-3 px-2 shadow-sm">
                                <div className="fw-bold fs-2">Bhagwati Sir</div>
                                <div className="fs-5 fw-bold">Faculty of Maths</div>
                                <div className="fs-5 text-muted">Experience: More than 18 years</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="mx-3 my-1 card py-3 px-2 shadow-sm">
                                <div className="fw-bold fs-2">Santosh Sir</div>
                                <div className="fs-5 fw-bold">Faculty of English</div>
                                <div className="fs-5 text-muted">Experience: More than 18 years</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="mx-3 my-1 card py-3 px-2 shadow-sm">
                                <div className="fw-bold fs-2">Anukool Sir</div>
                                <div className="fs-5 fw-bold">Faculty of Reasoning</div>
                                <div className="fs-5 text-muted">Experience: More than 10 years</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="mx-3 my-1 card py-3 px-2 shadow-sm">
                                <div className="fw-bold fs-2">Dheerendra Sir</div>
                                <div className="fs-5 fw-bold">Faculty of Computer</div>
                                <div className="fs-5 text-muted">Experience: More than 8 years</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="mx-3 my-1 card py-3 px-2 shadow-sm">
                                <div className="fw-bold fs-2">Pratiksha Ma&apos;am</div>
                                <div className="fs-5 fw-bold">Faculty of Faculty  Awareness</div>
                                <div className="fs-5 text-muted">Experience: More than 8 years</div>
                            </div>
                        </div>

                    </Slider>

                </div>
                <div className=" mb-4">
                    <div className="table-responsive mb-4">
                        <table className="table table-bordered  bg-white shadow-sm">
                            <thead>
                                <tr>
                                    <th scope="col" colSpan="3" className="text-center bg-primary1 text-white1" >Class Timings </th>
                                </tr>
                            </thead>
                            <tbody className="border-1">
                                <tr>
                                    <td>Session 1</td>
                                    <td>5:00 PM to 6:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Session 2</td>
                                    <td>6:15 PM to 7:15 PM</td>
                                </tr>
                                <tr>
                                    <td>Session 3</td>
                                    <td>7:30 PM to 8:30 PM</td>

                                </tr>
                                <tr>
                                    <td>Session 4</td>
                                    <td>7:00 AM</td>

                                </tr>
                                <tr>
                                    <td>Session 5</td>
                                    <td>9:00 AM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-white shadow-sm p-2 border rounded">
                        <div className="fs-4">Class Details</div>
                        <ul>
                            <li>
                                60+ hrs. Live Interactive Sessions
                            </li>
                            <li>
                                NOW WITH TRUE LIFETIME* VALIDITY
                            </li>
                            <li>
                                Course duration 20 Days
                            </li>
                            <li>
                                50+ Downloadable PDF study material to boost your preparation
                            </li>
                            <li>
                                Experienced Faculties (Selection oriented)
                            </li>
                            <li>
                                Weekly Test as per Real Exam Pattern
                            </li>
                            <li>
                                Special Q&A Sessions
                            </li>
                            <li>
                                Daily 3 hrs Class (Monday to Saturday)
                            </li>
                            <li>
                                Counseling Sessions by Expert Faculties
                            </li>
                            <li>
                                Recorded Backup available for quick Revision.
                            </li>
                            <li>
                                Solve unlimited doubts with Subject matter experts.
                            </li>
                            <li>
                                A strategy session on how to attempt the exam.
                            </li>
                            <li>
                                Experienced Faculties (Selection oriented)
                            </li>
                            <li>
                                Dedicated Telegram Group for regular updates
                            </li>
                            <li>
                                Special Current Affairs on Safalta YouTube Channel (7:00 AM & 9 PM  Mon-Sat)
                            </li>
                        </ul>

                    </div>
                </div>

                <div className="bg-white p-2 border rounded mb-4">
                    <div className="fs-4">Course Syllabus</div>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Maths
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">5 Lectures</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Reasoning | Bank Special
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">6 Lectures</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    English
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">4 Lectures</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree1" aria-expanded="false" aria-controls="flush-collapseThree1">
                                    Computer
                                </button>
                            </h2>
                            <div id="flush-collapseThree1" className="accordion-collapse collapse" aria-labelledby="flush-headingThree1" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">  3 Lectures</div>
                            </div>
                        </div>
                        
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree2" aria-expanded="false" aria-controls="flush-collapseThree2">
                                   Prime Time 9PM with Safalta (Youtube)
                                </button>
                            </h2>
                            <div id="flush-collapseThree2" className="accordion-collapse collapse" aria-labelledby="flush-headingThree2" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">109 Lectures</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-2 border shadow-sm">
                    <div className="fs-4">
                        Realted Course
                    </div>
                    <div className={(!isMobile && "container")}>

                        <ActionCardsContainer exploreMoreLink="/category/upsc" />
                    </div>
                </div>
            </div>
            <div className="mb-5 text-white">.</div>

        </div>
    </>
}