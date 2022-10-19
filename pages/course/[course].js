import { useRouter } from "next/router";
import { IoArrowBackOutline } from "react-icons/io5";


export default function Course() {
    const router = useRouter();
    const { course } = router.query;

    const data = [
        {
            title: "RBI ASSISTANT PRE And MAIN VIDEO COURSE",
            courseBy: "Make My Exam",
            classType: "Video",
            startDate: "22 Oct",
            price: "3795",
            imageSrc: "https://i0.wp.com/zeevector.com/wp-content/uploads/2021/02/RBI-Emblem-PNG.png?resize=600%2C609&ssl=1",
            backdropColor: "#eedfc0",
            permalink: "/course/rbi-assistant-pre-and-main-video-course"
        },
        {
            title: "SBI PO - Foundation Batch 2021 By Safalta.Com",
            courseBy: "Safalta",
            classType: "Video",
            startDate: "24 Nov",
            price: "2999",
            imageSrc: "https://i0.wp.com/www.atpos.in/wp-content/uploads/2019/08/2017-Design-Stack-new-logo-design-State-Bank-of-India.png?fit=520%2C321&ssl=1",
            backdropColor: "#290070",
            permalink: "/course/sbi-po-foundation-batch-2021"
        },
        {
            title: "SBI SO PRE VIDEO COURSE",
            courseBy: "Make My Exam",
            classType: "Video",
            startDate: "22 Oct",
            price: "2749",
            imageSrc: "https://i0.wp.com/www.atpos.in/wp-content/uploads/2019/08/2017-Design-Stack-new-logo-design-State-Bank-of-India.png?fit=520%2C321&ssl=1",
            backdropColor: "#290070",
            permalink: "/course/sbi-po-pre-video-course"
        },
        {
            title: "IBPS RRB ASSISTANT PRE VIDEO COURSE",
            courseBy: "Make My Exam",
            classType: "Video",
            startDate: "22 Oct",
            price: "3795",
            imageSrc: "https://cracku.in/latest-govt-jobs/wp-content/uploads/2019/06/IBPS-LOGO.jpg",
            backdropColor: "#fff",
            permalink: "/course/ibps-rrb-assistant-pre-video-course"
        },
    ].find(({ permalink }) => permalink === "/course/" + course) || {};



    return <>
        <div className="container-fluid1 px-41">
            <div className="bg-white">
                <div className="d-flex py-2 position-absolute px-2 m-3 rounded-circle bg-black" style={{"--bs-bg-opacity":0.5}} >
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
                <img src={data.imageSrc} className="img-fluid rounded" alt="" />
            </div>
            <div className="container px-4">
                <h1 className="text-capitalize">
                    {data.title}
                </h1>
                <small>By: {data.courseBy}</small>
            </div>

        </div>
    </>
}