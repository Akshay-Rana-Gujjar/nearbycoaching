import { useRouter } from "next/router";
import { useState } from "react";
import { BsFillBarChartFill } from "react-icons/bs";
import { IoArrowBackOutline, IoStar } from "react-icons/io5";
import ActionCard1 from "../../components/ActionCard1";
import FacultyCard from "../../components/FacultyCard";
import FAQContainer from "../../components/FAQContainer";
import InstituteCard from "../../components/InstituteCard";
import Subscription from "../../components/Subscription";
import styles from './styles.module.css';
import Navbar from '../../components/Navbar';

export default function Profile({ isMobile }) {

    const router = useRouter();

    const { profile } = router.query;

    const [activeCourseTab, setActiveCourseTab] = useState(1);

    const data = {
        pp: "https://nearbycoaching.com/uploads/institute_banner/faap1622879698.png",
        name: "Make My Exam",
        discription: "Best App for Bank, SSC and Government Exam Preparation - MakeMyExam App Aspirants looking for the assistance for various government job exams, makemyexam have all the features to extend educational assistance such as Daily dose, Video course, Test series, study material, free live class sessions and many more with just a click away. MakeMyExam App is like a MENTOR IN POCKET to provide relevant educational assistance required for BANK, SSC and Government exam preparation. Free Government Exam Preparation App It will work as an ultimate bank exam preparation App, SSC exam preparation app, Government exam preparation app, NET Exam preparation app, Defence Exams preparation app, UPSC Exam preparation app, MBA Exams preparation app, Teaching Exam preparation app, State Exams preparation app, Insurance Exams preparation app and Railway Exam preparation App. Hope you will be able to get the desired assistance from MAKEMYEXAM fleet of subject experts. It has given outstanding outcomes hence o",
        offerings: [
            {
                name: "Banking"
            },
            {
                name: "Insurance"
            },
            {
                name: "SSC"
            },
            {
                name: "Civil Service"
            },
            {
                name: "Police"
            }
        ],
        address: "SCO 116, Puda Pocket –II, Opp. Bus Stand Gate No. 3, Jalandhar - 144001 , Jalandhar, Punjab, 144001",
        map: "",
        facilities: [
            {
                name: "Online coaching",
                available: true
            }, {
                name: "Offline coaching",
                available: true
            }, {
                name: "Video coaching",
                available: true
            }, {
                name: "Hostel Facility",
                available: false
            }
        ],
        courses: {
            banking: [
                {
                    "backdropColor": "#fff",
                    "title": "RBI ASSISTANT PRE VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624265598.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRBI Grade B\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "RBI ASSISTANT MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624265980.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRBI Grade B\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "RBI ASSISTANT PRE and MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624266134.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRBI Grade B\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "RBI GRADE B PHASE- I VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624266316.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRBI Grade B\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "SBI SO PRE VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624266637.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI SO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS RRB ASSISTANT PRE VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624271717.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS RRB\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS RRB ASSISTANT MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624272235.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS RRB\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS RRB ASSISTANT PRE - MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624272462.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS RRB\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS RRB OFFICER - ASSISTANT SCALE 1 PRE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624272667.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS RRB\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS RRB OFFICER -ASSISTANT SCALE 1 PRE - MAIN Video course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624272882.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS RRB\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS RRB OFFICER SCALE 1 PRE VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624273158.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS RRB\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS RRB OFFICER SCALE 1 MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624273371.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS RRB\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS RRB OFFICER SCALE 1 PRE - MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624273575.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS RRB\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS RRB Officer - ASSISTANT SCALE 1 PRE - Video course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624273956.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS RRB\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS RRB OFFICER and ASSISTANT SCALE 1 PRE and MAIN",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624274289.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS RRB\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS SO LAW OFFICER PRE VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624274483.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS SO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS SO RAJBHASHA ADHIKARI PRE VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624274911.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS SO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS SO IT OFFICER VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624275194.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS SO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS SO AFO PRE VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624275430.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS SO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS SO HR PRE VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624275633.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS SO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS SO MARKETING OFFICER PRE VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624275838.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS SO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "SBI CLERK PRE VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624276089.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI Clerk\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "SBI CLERK MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624277688.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI Clerk\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "SBI CLERK PRE And MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624278018.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI Clerk\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "SBI PO And CLERK PRE And MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624278232.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI Clerk\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "20 Free Videos author SBI PO PRE VIDEO COURSE",
                    "courseBy": "Make My Exam",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624278433.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "SBI PO MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624278604.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "SBI PO PRE And  MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624282556.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "REASONING ABILITY SBI PO VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624283268.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "SBI PO And CLERK PRE And MAIN - VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624283526.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS PO And CLERK PRE VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624283923.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS PO And CLERK MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624284420.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS PO And CLERK PRE And  MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624284837.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS CLERK PRE VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624285129.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS Clerk\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Bank IBPS PO  Live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624355270.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Bank SBI PO Live courses",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624361113.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Canara Bank PO live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624361625.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCanara Bank PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Bank - SBI clerk Live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624461232.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI Clerk\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Bank- IBPS PO live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624461551.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Bank- SBI PO live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624461882.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Bank - IBPS Clerk live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624514611.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS Clerk\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Bank - IBPS SO Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624521114.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS SO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Bank - RBI Grade-B Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624521433.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRBI Grade B\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Bank - SBI SO live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624521842.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI SO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Bank - Syndicate bank live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624522976.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSyndicate Bank\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Bank - Canara Bank PO Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624523441.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCanara Bank PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Bank - IBPS RRB live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624523819.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS RRB\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "SBI - Clerk online live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624529825.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI Clerk\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS PO - Online live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624530244.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "SBI - PO Online live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624531528.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS - Clerk Online live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624531893.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS Clerk\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS - SO Online live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624532102.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS SO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "RBI Grade - B Online live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624532497.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRBI Grade B\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "SBI - SO Online live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624532875.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSBI SO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Syndicate Bank - Online live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624533130.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSyndicate Bank\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "Canara Bank- PO Online live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624533343.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCanara Bank PO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "IBPS - RRB online live course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624533553.jpg",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIBPS RRB\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                }],
            ssc: [
                {
                    "backdropColor": "#fff",
                    "title": "SSC - MTS Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624362426.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - MTS "
                },
                {
                    "backdropColor": "#fff",
                    "title": "SSC- CHSL Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624456285.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - CHSL "
                },
                {
                    "backdropColor": "#fff",
                    "title": "SSC - CGL Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624456771.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - CGL "
                },
                {
                    "backdropColor": "#fff",
                    "title": "SSC - General Duty",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624457238.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - General Duty "
                },
                {
                    "backdropColor": "#fff",
                    "title": "SSC - Stenographer Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624457720.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - Stenographer "
                },
                {
                    "backdropColor": "#fff",
                    "title": "SSC - JE Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624458387.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - JE "
                },
                {
                    "backdropColor": "#fff",
                    "title": "SSC - CPO Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624458925.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - CPO "
                },
                {
                    "backdropColor": "#fff",
                    "title": "All SSC MTS Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624524125.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - MTS "
                },
                {
                    "backdropColor": "#fff",
                    "title": "ALl SSC CHSL Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624524398.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - CHSL "
                },
                {
                    "backdropColor": "#fff",
                    "title": "All SSC CGL Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624524822.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - CGL "
                },
                {
                    "backdropColor": "#fff",
                    "title": "ALL SSC - GENERAL DUTY Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624525172.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - General Duty "
                },
                {
                    "backdropColor": "#fff",
                    "title": "All SSC Stenographer Live Courses",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624525436.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - Stenographer "
                },
                {
                    "backdropColor": "#fff",
                    "title": "All SSC JE Live Courses",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624525657.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - JE "
                },
                {
                    "backdropColor": "#fff",
                    "title": "All SSC CPO Live Courses",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624525858.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - CPO "
                },
                {
                    "backdropColor": "#fff",
                    "title": "SSC - MTS Online Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624527953.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - MTS "
                },
                {
                    "backdropColor": "#fff",
                    "title": "SSC - CHSL Online Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624528195.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - CHSL "
                },
                {
                    "backdropColor": "#fff",
                    "title": "SSC - CGL Online Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624528436.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - CGL "
                },
                {
                    "backdropColor": "#fff",
                    "title": "SSC - General Duty Online Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624528730.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - General Duty "
                },
                {
                    "backdropColor": "#fff",
                    "title": "SSC - Stenographer Online Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624528958.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - Stenographer "
                },
                {
                    "backdropColor": "#fff",
                    "title": "SSC - JE Online Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624529244.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - JE "
                },
                {
                    "backdropColor": "#fff",
                    "title": "SSC - CPO Online Live Course",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624529470.jpg",
                    "courseBy": "Make My Exam",
                    "author": "SSC - CPO "
                }
            ],
            insurance: [
                {
                    "backdropColor": "#fff",
                    "title": "LIC AAO - AE PRE VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624263505.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLIC AAO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "LIC AAO - AE MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624263955.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLIC AAO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "LIC AAO- AE PRE and  MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624264188.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLIC AAO\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "LIC ASSISTANT PRE VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624264383.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLIC Assistant\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "LIC ASSISTANT MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624264632.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLIC Assistant\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                },
                {
                    "backdropColor": "#fff",
                    "title": "LIC ASSISTANT PRE and MAIN VIDEO COURSE",
                    "imageSrc": "https://nearbycoaching.com/uploads/courses/course_intro_file1624264804.png",
                    "courseBy": "Make My Exam",
                    "author": "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLIC Assistant\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                }
            ]
        },
        faculty: [
            {
                "name": "Sanjay Sharma",
                "img": "https://nearbycoaching.com/uploads/faculty/img_faculty1624094717.png",
                "job": "Quant Trainer",
                "education": "BTECH",
                "yoe": "11 YRS OF EXP."
            },
            {
                "name": "Neeraj Sharma",
                "img": "https://nearbycoaching.com/uploads/faculty/img_faculty1624262848.png",
                "job": "Reasoning Trainer",
                "education": ".",
                "yoe": "8 YRS OF EXP."
            },
            {
                "name": "Jagmeet Kaur",
                "img": "https://nearbycoaching.com/uploads/faculty/img_faculty1624262942.png",
                "job": "English Trainer",
                "education": ".",
                "yoe": "9 YRS OF EXP."
            },
            {
                "name": "Prashant Gupta",
                "img": "https://nearbycoaching.com/uploads/faculty/img_faculty1624263031.png",
                "job": "Data Interpretation Trainer",
                "education": ".",
                "yoe": "8 YRS OF EXP."
            },
            {
                "name": "Kumar Sambhav",
                "img": "https://nearbycoaching.com/uploads/faculty/img_faculty1624274654.png",
                "job": "Banking Trainer",
                "education": ".",
                "yoe": "8 YRS OF EXP."
            },
            {
                "name": "Dinesh Lohiya",
                "img": "https://nearbycoaching.com/uploads/faculty/img_faculty1624284582.jpg",
                "job": "Computer Trainer",
                "education": ".",
                "yoe": "9 YRS OF EXP."
            },
            {
                "name": "Silony",
                "img": "https://nearbycoaching.com/uploads/faculty/img_faculty1624362700.jpg",
                "job": "English Trainer",
                "education": ".",
                "yoe": "6 YRS OF EXP."
            },
            {
                "name": "Prakul Saxena",
                "img": "https://nearbycoaching.com/uploads/faculty/img_faculty1624362774.jpg",
                "job": "Reasoning Ability Trainer",
                "education": ".",
                "yoe": "4 YRS OF EXP."
            }
        ]
    }

    function getCourses() {

        let currentactiveCourse = 'banking';

        switch (activeCourseTab) {
            case 0:
                currentactiveCourse = 'banking'
                break;
            case 1:
                currentactiveCourse = 'ssc'
                break;
            case 2:
                currentactiveCourse = 'insurance'
                break;
            default:
                currentactiveCourse = 'banking'
                break;
        }

        const _data = data.courses[currentactiveCourse];

        return _data.map(_ => {
            return <ActionCard1 key={_.title}  {..._} />
        })



    }


    function strindTruncate(str, maxLen) {

        if (str.length <= maxLen)
            return str;

        return str.substring(0, maxLen - 3) + "..."

    }

    const gradient1 = {
        "background-image": "linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )"
    }

    const gd2 = {
        "background-image": "radial-gradient( circle 400px at 6.8% 8.3%,  rgba(255,244,169,1) 0%, rgba(255,244,234,1) 100.2% )"
    }

    function openMap(){
        window.open("https://www.google.com/maps/search/?api=1&query="+window.encodeURI(data.address))
    }



    return <>
        {!isMobile && <Navbar/>}
        <div className={!isMobile && "container"}>
            {isMobile && <div className="d-flex py-2 position-absolute px-2 m-3 rounded-circle bg-black" style={{ "--bs-bg-opacity": 0.5 }} >
                <div
                    onClick={() => {
                        router.back();
                    }}

                >
                    <IoArrowBackOutline size={24} color="white" />
                </div>
                <div className="fs-4 text-uppercase1
                 fw-bold text-muted"></div>
            </div>}
            <div className={(isMobile ? "flex-column  align-items-center" : "flex-row") + "  d-flex  bg-white p-4 shadow-sm mb-4"}>
                <div className={"flex-shrink "+(!isMobile && "ps-5")}>

                    <div className={!isMobile && "d-flex" || "d-flex flex-column align-items-center"} >

                        <img
                            style={{ objectFit: "contain", width: "100px" }}
                            src={data.pp} alt={data.name}
                            className="img-fluid rounded-circle border mb-3 me-3"

                        />
                        <div className={isMobile && "d-flex flex-column align-items-center"} >

                            <h1 className={(!isMobile && "h3") + " fw-bold mb-2"}>{data.name}</h1>
                            <div className={`d-flex`}>
                                <IoStar color="#FFD233" />
                                <IoStar color="#FFD233" />
                                <IoStar color="#FFD233" />
                                <IoStar color="#FFD233" />
                                <IoStar color="#FFD233" />
                                <div className="text-decoration-underline">(9999)</div>
                            </div>
                        </div>
                    </div>
                    <div className={(isMobile ? " w-1001 text-truncate1  d-inline-block1" : " w-50") + "    mb-4"}  >{strindTruncate(data.discription, 250)}</div>
                    <div className="" >{data.address} <span onClick={openMap} role="button" className="text-primary text-decoration-underline" >show on map</span></div>
                </div>
                <div className="flex-fill" >


                    <div className={(isMobile? "h4": "h6")+" mb-3 "}>Coaching Offered</div>
                    <div className="d-flex gap-3 ">
                        {
                            data.offerings.map((o, i) => <div key={i} className="">
                                <div className="border rounded p-3 text-truncate mb-2" style={{ borderColor: "var(--primary) !important", color: "var(--primary)" }} >
                                    {o.name}

                                </div>
                            </div>)
                        }
                    </div>
                    <div className={(isMobile ? "h4":"h6" )+" mb-3  "}>Available Facilities</div>
                    <div className="d-flex flex-wrap gap-3 mb-4">
                        {
                            data.facilities.map((f, i) => f.available && <span key={i} className="badge rounded-pill bg-light text-dark fs-6 border">{f.name}</span>)
                        }
                    </div>
                    <div className="d-flex gap-3 w-100">
                        <div className={(isMobile ? "h2":"h6")+" border flex-fill p-3 text-center rounded"} style={{ borderColor: "var(--primary) !important", color: "var(--primary)" }} >
                            Call
                        </div>
                        <div className={(isMobile ? "h2":"h6")+" border flex-fill p-3 text-center rounded text-white"} style={{ background: "var(--primary)" }}>
                            Book Demo
                        </div>
                    </div>
                </div>

            </div>

            <div className=" bg-white p-4 mb-4 shadow">
                <div className="d-flex gap-5 mb-4">
                    <div className={"flex-fill text-center p-2 border-dark " + (activeCourseTab === 0 && "border-bottom")} onClick={() => setActiveCourseTab(0)}>Banking</div>
                    <div className={"flex-fill text-center p-2 border-dark " + (activeCourseTab === 1 && "border-bottom")} onClick={() => setActiveCourseTab(1)}>SSC</div>
                    <div className={"flex-fill text-center p-2 border-dark " + (activeCourseTab === 2 && "border-bottom")} onClick={() => setActiveCourseTab(2)}>Insurance</div>
                </div>
                <div className="d-flex flex-wrap gap-3 mb-5">
                    {getCourses()}
                </div>
            </div>
            <div className=" bg-white p-4 mb-4 shadow d-flex gap-3 flex-column" style={gd2} >
                <div className="h3">Faculty of {data.name}</div>
                <div className="row gap-3">
                    {data.faculty.map((fc, i) => <div key={i} className="col-5 col-sm-2" ><FacultyCard  {...fc} imgSrc={fc.img} /></div>)}
                </div>
            </div>

            <div className="bg-white mb-4 p-4 shadow">
                <div className="h3">Contact us:</div>
                <div className="text-muted">Any Question? Submit your query with us.</div>

                <form action="#">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" />
                        <div id="emailHelp" className="form-text">We&apos;ll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea type="text" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            <div className="bg-white mb-4 p-4 shadow rounded">
                <div className="mb-2">
                    <BsFillBarChartFill color="#FFE381" size={24} />
                    <span className="fw-bold fs-4 ms-2">Related Institutes</span>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <InstituteCard />

                    </div>
                    <div className="col-12 col-sm-6">
                        <InstituteCard />

                    </div>
                    <div className="col-12 col-sm-6">

                        <InstituteCard />
                    </div>
                    <div className="col-12 col-sm-6">
                        <InstituteCard />

                    </div>
                </div>
            </div>
            <div className="bg-white mb-4 p-4 shadow rounded">
                <div className={!isMobile && "container"}>

                    <FAQContainer />
                    <div className="d-flex justify-content-center">
                        <div className={styles["subscription_container"] + ""}>
                            <Subscription />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-5">&nbsp;</div>
            {/* <div className="mb-5">&nbsp;</div> */}
        </div>
    </>
}