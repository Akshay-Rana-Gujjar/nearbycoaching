import { useRouter } from "next/router";
import { FaRupeeSign } from "react-icons/fa";
import { IoArrowBackOutline, IoStar } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Course() {
    const router = useRouter();
    const { course } = router.query;

    const data = [
        {
            title: "IDBI Bank Executive by Safalta",
            courseBy: "Safalta",
            classType: "Video",
            startDate: "22 Oct, 2022",
            price: "999",
            imageSrc: "https://www.whoistheownerof.com/wp-content/uploads/2018/02/Owner-of-IDBI-Bank-India-Logo-Wiki-profile-1.jpg",
            backdropColor: "#00836c",
            permalink: "/course/idbi-bank-executive-by-safalta"
        },
        {
            title: "RBI ASSISTANT PRE And MAIN VIDEO COURSE",
            courseBy: "Make My Exam",
            classType: "Video",
            startDate: "22 Oct, 2022",
            price: "3795",
            imageSrc: "https://i0.wp.com/zeevector.com/wp-content/uploads/2021/02/RBI-Emblem-PNG.png?resize=600%2C609&ssl=1",
            backdropColor: "#eedfc0",
            permalink: "/course/rbi-assistant-pre-and-main-video-course"
        },
        {
            title: "SBI PO - Foundation Batch 2021 By Safalta.Com",
            courseBy: "Safalta",
            classType: "Video",
            startDate: "24 Nov, 2022",
            price: "2999",
            imageSrc: "https://i0.wp.com/www.atpos.in/wp-content/uploads/2019/08/2017-Design-Stack-new-logo-design-State-Bank-of-India.png?fit=520%2C321&ssl=1",
            backdropColor: "#290070",
            permalink: "/course/sbi-po-foundation-batch-2021"
        },
        {
            title: "SBI SO PRE VIDEO COURSE",
            courseBy: "Make My Exam",
            classType: "Video",
            startDate: "22 Oct, 2022",
            price: "2749",
            imageSrc: "https://i0.wp.com/www.atpos.in/wp-content/uploads/2019/08/2017-Design-Stack-new-logo-design-State-Bank-of-India.png?fit=520%2C321&ssl=1",
            backdropColor: "#290070",
            permalink: "/course/sbi-po-pre-video-course"
        },
        {
            title: "IBPS RRB ASSISTANT PRE VIDEO COURSE",
            courseBy: "Make My Exam",
            classType: "Video",
            startDate: "22 Oct, 2022",
            price: "3795",
            imageSrc: "https://cracku.in/latest-govt-jobs/wp-content/uploads/2019/06/IBPS-LOGO.jpg",
            backdropColor: "#fff",
            permalink: "/course/ibps-rrb-assistant-pre-video-course"
        },
    ].find(({ permalink }) => permalink === "/course/" + course) || {};


    //slider setting

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows:false
    };

    return <>
        <div className="container-fluid1 px-41 mb-5">
            <div className="bg-white">
                <div className="d-flex py-2 position-absolute px-2 m-3 rounded-circle bg-black" style={{ "--bs-bg-opacity": 0.5 }} >
                    <div
                        onClick={() => {
                            router.back();
                        }}

                    >
                        <IoArrowBackOutline size={24} color="white" />
                    </div>
                    <div className="fs-4 text-uppercase1
                 fw-bold text-muted"></div>
                </div>
                <img style={{backgroundColor: data.backdropColor, padding: "5px"}} src={data.imageSrc} className="img-fluid w-100" alt="" />
            </div>
            <div className="container px-2">
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
                <small className="fs-5 text-muted">By: {data.courseBy}</small>
                <div className="d-flex text-muted align-items-center fs-5 mb-2">
                    Course type: <span className="fw-bold ms-2 fs-5 rounded-pill border border-danger px-3 text-white1" >{data.classType}</span>
                </div>
                <div className="d-flex text-muted align-items-center fs-5 mb-2">
                    Start from: <span className="fw-bold ms-2 fs-5 rounded-pill border border-warning px-3 text-white1" >{data.startDate}</span>
                </div>

                <div
                    role={"button"}
                    className={`p-2 mb-11 fs-4 text-white text-center d-flex align-items-center justify-content-center bg-primary rounded`}
                >
                    Enroll now for &nbsp; <FaRupeeSign size={14} />
                    {data.price}
                </div>
                <hr />
                <div>
                    <div className="fs-3">Course Overview</div>
                    <div className="mb-2">This course includes Live classes, notes, doubt sessions, practice sessions, Mock Tests, and much more.It covers basic concepts as well as in-depth knowledge of all subjects required to pass the exam.</div>
                    <div className="table-responsive">

                        <table className="table table-bordered">
                            <thead>
                                <tr>

                                    <th scope="col" colSpan="3" className="text-center bg-primary text-white" >Course Details</th>

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
                <div className="course-faculty">
                    <div className="fs-3 mb-2 fw-bold">Our Expert Faculty</div>
                    <Slider {...settings}>

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
                                <div className="fw-bold fs-2">Pratiksha Ma'am</div>
                                <div className="fs-5 fw-bold">Faculty of Faculty  Awareness</div>
                                <div className="fs-5 text-muted">Experience: More than 8 years</div>
                            </div>
                        </div>

                    </Slider>

                </div>

            </div>
            <div className="mb-5 text-white">.</div>
            <div className="mb-5 text-white">.</div>
            <div className="mb-5 text-white">.</div>
            <div className="mb-5 text-white">.</div>
        </div>
    </>
}