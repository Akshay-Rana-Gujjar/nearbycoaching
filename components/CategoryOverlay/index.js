import style from "./styles.module.css";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import useCategoryCollection from "../../hooks/firebase/category";
import Link from "next/link";

export default function CategoryOverlay() {
  const [categoryData, setCategoryData] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const catgeory = [
    {
      name: "SSC Exams",
      subCategory: [
        {
          name: "SSC GD Constable",
        },
        {
          name: "SSC CGL",
        },
        {
          name: "SSC CPO",
        },
        {
          name: "SSC CHSL",
        },
        {
          name: "SSC MTS",
        },
        {
          name: "SSC Stenographer",
        },
        {
          name: "SSC JE CE",
        },
        {
          name: "SSC Head Constable AWO TPO",
        },
        {
          name: "SSC JE EE",
        },
        {
          name: "SSC JE ME",
        },
        {
          name: "SSC Scientific Assistant",
        },
        {
          name: "IB Security Assistant",
        },
        {
          name: "SSC JHT",
        },
        {
          name: "Delhi Police MTS",
        },
        {
          name: "SSC Selection Post",
        },
        {
          name: "IB ACIO",
        },
        {
          name: "Supreme Court Junior Court Assistant",
        },
        {
          name: "SSC Havaldar",
        },
        {
          name: "Delhi Forest Guard",
        },
        {
          name: "ICMR Assistant",
        },
        {
          name: "SSC JE",
        },
        {
          name: "NBE",
        },
        {
          name: "RSMSSB JE",
        },
        {
          name: "Supreme Court Law Clerk",
        },
        {
          name: "NTA Delhi University NonTeaching",
        },
        {
          name: "Delhi Police Constable",
        },
        {
          name: "Delhi Police Head Constable",
        },
        {
          name: "Delhi Police Driver",
        },
      ],
    },
    {
      name: "Banking Exams",
      subCategory: [
        {
          name: "SBI Clerk",
        },
        {
          name: "IBPS PO",
        },
        {
          name: "SBI PO",
        },
        {
          name: "NABARD Development Assistant",
        },
        {
          name: "IBPS Clerk",
        },
        {
          name: "RRB Officer Scale - I",
        },
        {
          name: "JAIIB Exam",
        },
        {
          name: "CAIIB Exam",
        },
        {
          name: "IDBI Executive",
        },
        {
          name: "SBI CBO",
        },
        {
          name: "RRB Office Assistant",
        },
        {
          name: "SIDBI Assistant Manager",
        },
        {
          name: "AXIS Bank CSO",
        },
        {
          name: "OSCB Assistant Manager",
        },
        {
          name: "OSCB Junior Manager",
        },
        {
          name: "TJSB Bank Trainee Officer",
        },
        {
          name: "ECGC PO",
        },
        {
          name: "APCOB Manager",
        },
        {
          name: "Nainital Bank PO",
        },
        {
          name: "NHB Assistant Manager",
        },
        {
          name: "EXIM Bank Management Trainee",
        },
        {
          name: "Bank of Baroda PO",
        },
        {
          name: "Indian Bank Security Guard",
        },
        {
          name: "OSCB Banking Assistant",
        },
        {
          name: "Canara Bank PO",
        },
        {
          name: "IDBI Assistant Manager",
        },
        {
          name: "SBI Apprentice",
        },
        {
          name: "PSCB Clerk Cum DEO",
        },
        {
          name: "PSCB",
        },
        {
          name: "HPSCB Junior Clerk",
        },
        {
          name: "Nainital Bank",
        },
        {
          name: "APCOB staff assistant",
        },
        {
          name: "Akola DCC Bank Junior Clerk",
        },
        {
          name: "Bank Note Press Dewas",
        },
        {
          name: "Nainital Bank Clerk",
        },
        {
          name: "Syndicate Bank PO",
        },
        {
          name: "J&K Bank PO",
        },
        {
          name: "South Indian Bank PO",
        },
        {
          name: "IBPS SO",
        },
        {
          name: "EPFO Assistant",
        },
        {
          name: "South Indian Bank Clerk",
        },
        {
          name: "J&K Bank Clerk",
        },
        {
          name: "EPFO SSA",
        },
        {
          name: "HARCO Bank Clerk",
        },
        {
          name: "NABARD Grade A",
        },
        {
          name: "Agricultural Field Officer - Scale I",
        },
        {
          name: "IT Officer - Scale I",
        },
        {
          name: "NABARD Grade B",
        },
        {
          name: "HR Personnel Officer - Scale I",
        },
        {
          name: "Marketing Officer - Scale I",
        },
        {
          name: "RBI Assistant",
        },
        {
          name: "RBI Grade B",
        },
        {
          name: "Law Officer - Scale I",
        },
        {
          name: "Rajbhasha Adhikari - Scale I",
        },
        {
          name: "Indian Bank SO",
        },
        {
          name: "SBI SO",
        },
        {
          name: "RBI JE",
        },
        {
          name: "SEBI Grade A",
        },
        {
          name: "RBI Office Attendant",
        },
        {
          name: "RBI Security Guard",
        },
        {
          name: "RSCB",
        },
        {
          name: "BSCB Assistant Multipurpose",
        },
        {
          name: "REPCO Bank Junior Assistant Clerk",
        },
      ],
    },
    {
      name: "Teaching Exams",
      subCategory: [
        {
          name: "CTET",
        },
        {
          name: "NVS TGT",
        },
        {
          name: "WB TET",
        },
        {
          name: "HTET",
        },
        {
          name: "Rajasthan 3rd Grade Teacher",
        },
        {
          name: "UP TGT",
        },
        {
          name: "SUPER TET",
        },
        {
          name: "DSSSB TGT",
        },
        {
          name: "KVS",
        },
        {
          name: "REET",
        },
        {
          name: "UPTET",
        },
        {
          name: "NVS PGT",
        },
        {
          name: "KVS PRT",
        },
        {
          name: "PSTET",
        },
        {
          name: "UP B.Ed JEE",
        },
        {
          name: "DSSSB PRT",
        },
        {
          name: "KVS TGT",
        },
        {
          name: "UGC NET",
        },
        {
          name: "Rajasthan Computer Teacher",
        },
        {
          name: "UPPSC Lecturer",
        },
        {
          name: "NTA Delhi University NonTeaching",
        },
        {
          name: "UP PGT",
        },
        {
          name: "AWES Army Public School",
        },
        {
          name: "SSA Chandigarh JBT",
        },
        {
          name: "Bihar CET B.Ed",
        },
        {
          name: "OTET",
        },
        {
          name: "Rajasthan PTET",
        },
        {
          name: "HP TET",
        },
        {
          name: "KVS PGT",
        },
        {
          name: "AEES PRT",
        },
        {
          name: "Allahabad University Group C Non-Teaching",
        },
        {
          name: "UP LT Grade Teacher",
        },
        {
          name: "Bihar STET",
        },
        {
          name: "NVS Lab Attendant",
        },
        {
          name: "Karnataka TET",
        },
        {
          name: "Rajasthan Teacher",
        },
        {
          name: "NVS Mess Helper",
        },
        {
          name: "Tripura TET",
        },
        {
          name: "DSSSB PGT",
        },
        {
          name: "BPSC Head Teacher",
        },
        {
          name: "DSE Odisha TGT",
        },
        {
          name: "MPTET",
        },
        {
          name: "TS TET",
        },
        {
          name: "NVS Catering Assistant",
        },
        {
          name: "Gujarat TET Exam",
        },
        {
          name: "UP Junior High School Teacher",
        },
        {
          name: "Bihar TET",
        },
        {
          name: "EMRS PGT",
        },
        {
          name: "AP TET",
        },
        {
          name: "MAH B.Ed. CET",
        },
        {
          name: "EMRS TGT",
        },
        {
          name: "TN TET",
        },
        {
          name: "CG TET",
        },
        {
          name: "Assam TET",
        },
        {
          name: "JTET Exam",
        },
        {
          name: "UTET",
        },
        {
          name: "MAHA TET",
        },
        {
          name: "KTET",
        },
        {
          name: "MP B.Ed.",
        },
        {
          name: "DU B.Ed.",
        },
        {
          name: "CG B.Ed.",
        },
        {
          name: "Haryana B.Ed.",
        },
        {
          name: "MP SET",
        },
        {
          name: "TN TRB PG Assistant",
        },
        {
          name: "Punjab Pre-Primary Teacher",
        },
        {
          name: "TN TRB CE",
        },
        {
          name: "NVS Group C",
        },
        {
          name: "UKPSC Lecturer",
        },
        {
          name: "NVS Group B",
        },
        {
          name: "TN TRB ME",
        },
        {
          name: "OSSTET Exam",
        },
        {
          name: "Allahabad University Group A Non-Teaching",
        },
        {
          name: "Allahabad University Group B Non-Teaching",
        },
        {
          name: "Navodaya Vidyalaya Samiti",
        },
        {
          name: "TN TRB EE",
        },
        {
          name: "TN TRB EC",
        },
        {
          name: "TN TRB CS",
        },
        {
          name: "SSA Chandigarh TGT",
        },
        {
          name: "NVS Staff Nurse",
        },
        {
          name: "NVS Junior Secretariat Assistant",
        },
        {
          name: "Bihar D.El.Ed",
        },
        {
          name: "JSSC TGT",
        },
        {
          name: "RPSC Senior Teacher Grade II",
        },
        {
          name: "NVS MTS",
        },
        {
          name: "WB SET Exam",
        },
        {
          name: "RSMSSB Lab Assistant",
        },
        {
          name: "OAVS",
        },
        {
          name: "RSMSSB PTI",
        },
        {
          name: "GSET",
        },
        {
          name: "MH SET",
        },
        {
          name: "RSMSSB Librarian",
        },
        {
          name: "KSET",
        },
        {
          name: "Kerala SET",
        },
        {
          name: "APSET",
        },
        {
          name: "Rajasthan Pre D.EL.ED.",
        },
        {
          name: "IGNOU B.Ed.",
        },
        {
          name: "DSSSB Librarian",
        },
        {
          name: "DSSSB Special Educator",
        },
        {
          name: "JSSC PGT",
        },
        {
          name: "JSSC Lab Assistant",
        },
        {
          name: "DSSSB Teacher",
        },
      ],
    },
    {
      name: "Civil Services Exam",
      subCategory: [
        {
          name: "UPSC Civil Services",
        },
        {
          name: "UPPCS",
        },
        {
          name: "BPSC Exam",
        },
        {
          name: "UPPSC RO ARO",
        },
        {
          name: "UPSC EPFO",
        },
        {
          name: "BPSC CDPO",
        },
        {
          name: "MPPSC State Service",
        },
        {
          name: "UPSC CAPF AC",
        },
        {
          name: "APPSC Group 1",
        },
        {
          name: "MPSC State Service",
        },
        {
          name: "WBCS",
        },
        {
          name: "TNPSC Group 1",
        },
        {
          name: "RPSC RAS",
        },
        {
          name: "TSPSC Group 1",
        },
        {
          name: "OPSC OAS",
        },
        {
          name: "UKPSC Combined Upper Subordinate Service",
        },
        {
          name: "MPPSC Forest Service",
        },
        {
          name: "Haryana Civil Services",
        },
        {
          name: "UKPSC Lower PCS",
        },
        {
          name: "JPSC Civil Services",
        },
        {
          name: "KPSC KAS",
        },
        {
          name: "CGPSC",
        },
        {
          name: "Punjab Civil Service",
        },
        {
          name: "Gujarat Administrative Service",
        },
        {
          name: "JKPSC KAS",
        },
        {
          name: "HPPSC HPAS",
        },
        {
          name: "WBPSC WBCS",
        },
        {
          name: "Kerala PSC KAS",
        },
      ],
    },
    {
      name: "Railways Exams",
      subCategory: [
        {
          name: "RRB NTPC",
        },
        {
          name: "RRB Group D",
        },
        {
          name: "RRB ALP",
        },
        {
          name: "RPF SI",
        },
        {
          name: "RPF Constable",
        },
        {
          name: "RRB JE",
        },
        {
          name: "RRB SSE",
        },
        {
          name: "RRB Ministerial and Isolated Categories",
        },
        {
          name: "RRB Junior Stenographer",
        },
        {
          name: "RRB Junior Translator",
        },
        {
          name: "RRB JE EC",
        },
        {
          name: "DFCCIL Operations BD",
        },
        {
          name: "RPSF",
        },
        {
          name: "RRB ASM",
        },
        {
          name: "RRB JE ME",
        },
        {
          name: "RRB JE CE",
        },
        {
          name: "RRB JE EE",
        },
        {
          name: "RRB JE IT",
        },
        {
          name: "RRB Staff Nurse",
        },
        {
          name: "UPMRC Station Controller",
        },
        {
          name: "DFCCIL Executive",
        },
        {
          name: "Gujarat Metro SCTO",
        },
        {
          name: "DFCCIL Junior Executive",
        },
        {
          name: "RRB Paramedical Staff",
        },
        {
          name: "DFCCIL Junior Manager",
        },
        {
          name: "DMRC CRA",
        },
        {
          name: "DFCCIL Recruitment",
        },
      ],
    },
    {
      name: "Engineering Recruitment Exams",
      subCategory: [
        {
          name: "DRDO STA",
        },
        {
          name: "SSC JE CE",
        },
        {
          name: "SSC JE EE",
        },
        {
          name: "SSC JE ME",
        },
        {
          name: "SSC Scientific Assistant",
        },
        {
          name: "RSMSSB JE",
        },
        {
          name: "DRDO Technician A",
        },
        {
          name: "FCI JE",
        },
        {
          name: "MP Vyapam Sub Engineer",
        },
        {
          name: "Indian Coast Guard Yantrik",
        },
        {
          name: "BSF SI",
        },
        {
          name: "TN TRB CE",
        },
        {
          name: "BRO Multi Skilled Worker",
        },
        {
          name: "TN TRB ME",
        },
        {
          name: "DRDO RAC",
        },
        {
          name: "TN TRB EE",
        },
        {
          name: "TN TRB EC",
        },
        {
          name: "TN TRB CS",
        },
        {
          name: "AFCAT EKT",
        },
        {
          name: "RRB SSE",
        },
        {
          name: "RRB JE EC",
        },
        {
          name: "MP ITI Training Officer",
        },
        {
          name: "RRB JE ME",
        },
        {
          name: "RRB JE CE",
        },
        {
          name: "UPPCL JE",
        },
        {
          name: "RRB JE EE",
        },
        {
          name: "RRB JE IT",
        },
        {
          name: "UPPSC AE",
        },
        {
          name: "UPPSC Polytechnic Lecturer",
        },
        {
          name: "UPAVP JE",
        },
        {
          name: "UPSSSC Junior Engineer",
        },
        {
          name: "UPAVP AE",
        },
        {
          name: "HPCL Engineer",
        },
        {
          name: "UPMRC JE",
        },
        {
          name: "GATE ME",
        },
        {
          name: "Chandigarh JE",
        },
        {
          name: "NHPC JE",
        },
        {
          name: "HAL Management Trainee",
        },
        {
          name: "GATE CS",
        },
        {
          name: "BPSC Asst. Sanitary and Waste Mgmt. Officer",
        },
        {
          name: "BHEL Engineer Trainee",
        },
        {
          name: "GATE CE",
        },
        {
          name: "UPSC IES",
        },
        {
          name: "UPSSSC Assistant Boring Technician",
        },
        {
          name: "UPSSSC ITI Instructor",
        },
        {
          name: "UPPCL Technician",
        },
        {
          name: "BPSC AE",
        },
        {
          name: "GATE EC",
        },
        {
          name: "APPSC Assistant Executive Engineer",
        },
        {
          name: "GATE EE",
        },
        {
          name: "NVS Electrician",
        },
        {
          name: "GATE Chemistry",
        },
        {
          name: "HSSC ALM",
        },
        {
          name: "IOCL Apprentice",
        },
        {
          name: "UPRVUNL TG2",
        },
        {
          name: "UPRVUNL AE",
        },
        {
          name: "NFL MT",
        },
        {
          name: "RBI JE",
        },
        {
          name: "ICAR Assistant",
        },
        {
          name: "BDL Management Trainee",
        },
        {
          name: "UPMRC Station Controller",
        },
        {
          name: "BARC OCES",
        },
        {
          name: "AAI JE ATC",
        },
        {
          name: "NFL Junior Engineering Assistant Grade II",
        },
        {
          name: "PGCIL Diploma Trainee",
        },
        {
          name: "APPSC AE",
        },
        {
          name: "HSSC JE",
        },
        {
          name: "GATE IN",
        },
        {
          name: "CIL MT",
        },
        {
          name: "HAL",
        },
        {
          name: "HAL Design Trainee",
        },
        {
          name: "UPRVUNL JE",
        },
        {
          name: "BPSC Assistant Professor",
        },
        {
          name: "ICAR Technician",
        },
        {
          name: "GATE PI",
        },
        {
          name: "NIC Technical Assistant A",
        },
        {
          name: "DFCCIL Executive",
        },
        {
          name: "NIC Scientist B",
        },
        {
          name: "RSEB Informatics Assistant",
        },
        {
          name: "BPSC Lecturer",
        },
        {
          name: "AAI Junior Assistant",
        },
        {
          name: "GATE CH",
        },
        {
          name: "BPSC Motor Vehicle Inspector",
        },
        {
          name: "CIL MT CS",
        },
        {
          name: "FSSAI Assistant",
        },
        {
          name: "UKPSC JE",
        },
        {
          name: "Oil India Grade 3",
        },
        {
          name: "FSSAI Technical Officer",
        },
        {
          name: "RVUNL JEN",
        },
        {
          name: "NALCO HEMM Operator",
        },
        {
          name: "Vizag Steel Junior Trainee",
        },
        {
          name: "UPPCL Assistant Engineer",
        },
        {
          name: "TSNPDCL Assistant Engineer",
        },
        {
          name: "WBSETCL JE",
        },
        {
          name: "NBCC JE",
        },
        {
          name: "Gujarat Metro SCTO",
        },
        {
          name: "TSPSC AEE",
        },
        {
          name: "TSSPDCL Sub Engineer",
        },
        {
          name: "UKPSC AE",
        },
        {
          name: "TANGEDCO Assistant Engineer",
        },
        {
          name: "UPCL AE",
        },
        {
          name: "DFCCIL Junior Executive",
        },
        {
          name: "SJVN Junior Field Engineer",
        },
        {
          name: "UJVNL AE",
        },
        {
          name: "MPPSC AE",
        },
        {
          name: "LMRC AM",
        },
        {
          name: "Vizag Steel Management Trainee",
        },
        {
          name: "UPMRC JE EE",
        },
        {
          name: "ONGC Non-Executive",
        },
        {
          name: "HPCL Technician",
        },
        {
          name: "IFFCO AGT",
        },
        {
          name: "RSMSSB Sanganak",
        },
        {
          name: "BEL Engineering Assistant Trainee",
        },
        {
          name: "Northern Coalfields Limited",
        },
        {
          name: "TANGEDCO Field Assistant",
        },
        {
          name: "UPPCL AE EE",
        },
        {
          name: "NRL GET",
        },
        {
          name: "RIICO Stenographer",
        },
        {
          name: "KPTCL JE",
        },
        {
          name: "UPRVUNL Computer Assistant",
        },
        {
          name: "KPTCL AE",
        },
        {
          name: "DSSSB JE",
        },
        {
          name: "BEL Senior Engineer",
        },
        {
          name: "OPTCL JMOT",
        },
        {
          name: "NLC Graduate Executive Trainee",
        },
        {
          name: "RCFL",
        },
        {
          name: "UPMRC Maintainer",
        },
        {
          name: "Rajasthan Fireman",
        },
        {
          name: "RIICO Junior Assistant",
        },
        {
          name: "NMDC Junior Officer",
        },
        {
          name: "JVVNL Technical Helper",
        },
        {
          name: "HPCL Asst. Maintenance Technician",
        },
        {
          name: "Oil India Senior Officer",
        },
        {
          name: "BEL Trainee Engineer",
        },
        {
          name: "IREL Diploma Trainee",
        },
        {
          name: "MIDHANI Management Trainee",
        },
        {
          name: "RIICO Assistant Site Engineer",
        },
        {
          name: "Cochin Shipyard Executive Trainee",
        },
        {
          name: "Mazagon Dock Shipbuilders Non Executive",
        },
        {
          name: "PTCUL AE",
        },
        {
          name: "ISRO Technician",
        },
        {
          name: "RSMSSB Motor Vehicle SI",
        },
        {
          name: "IREL Tradesman Trainee",
        },
        {
          name: "NIELIT CCC Exam",
        },
        {
          name: "MOIL Graduate Trainee",
        },
        {
          name: "SECL Operator",
        },
        {
          name: "Vizag Steel Trade Apprentice",
        },
        {
          name: "UPMRC JE CE",
        },
        {
          name: "UP Jal Nigam JE",
        },
        {
          name: "UPMRC JE EC",
        },
        {
          name: "UP Jal Nigam AE",
        },
        {
          name: "APPSC Polytechnic Lecturers",
        },
        {
          name: "ISRO Scientific Assistant",
        },
        {
          name: "UPRVUNL Lab Assistant",
        },
        {
          name: "AAI JE Technical",
        },
        {
          name: "UPPCL Technician Grade 2",
        },
        {
          name: "FSSAI",
        },
        {
          name: "AAI JE Airport Operations",
        },
        {
          name: "HURL Junior Engineer Assistant",
        },
        {
          name: "DFCCIL Junior Manager",
        },
        {
          name: "AAI Junior Executive",
        },
        {
          name: "RPSC AEN",
        },
        {
          name: "ISRO Scientist EE",
        },
        {
          name: "CIL MT ME",
        },
        {
          name: "ISRO Technical Assistant",
        },
        {
          name: "CIL MT CE",
        },
        {
          name: "CIL MT EE",
        },
        {
          name: "JKSSB JE",
        },
        {
          name: "Odisha Police ASI",
        },
        {
          name: "GPSC Assistant Engineer",
        },
        {
          name: "WB Municipal Service Commission",
        },
        {
          name: "ISRO Technician B Fitter",
        },
        {
          name: "NMDC Maintenance Assistant",
        },
        {
          name: "ISRO Scientist ME",
        },
        {
          name: "MSCWB Food Safety Officer",
        },
        {
          name: "ISRO Scientist CE",
        },
        {
          name: "DMRC CRA",
        },
        {
          name: "NMDC Field Attendant",
        },
        {
          name: "ISRO Scientist CS",
        },
        {
          name: "ISRO Draughtsman",
        },
        {
          name: "DSSSB AE",
        },
        {
          name: "ISRO Scientist EC",
        },
        {
          name: "KPSC Assistant Engineer",
        },
        {
          name: "Maharashtra Technical Services",
        },
        {
          name: "JSSC JE",
        },
        {
          name: "KPSC JE",
        },
        {
          name: "NIMCET",
        },
        {
          name: "DFCCIL Recruitment",
        },
        {
          name: "DDA JE",
        },
        {
          name: "RPSC Lecturer Tech Edu",
        },
        {
          name: "UPSC Data Processing Assistant",
        },
        {
          name: "TN MRB Food Safety Officer",
        },
        {
          name: "GPSC Engineering Services",
        },
        {
          name: "MPSC AE",
        },
        {
          name: "BIS Senior Secretariat Assistant",
        },
        {
          name: "PSTCL JE",
        },
        {
          name: "APSC JE",
        },
        {
          name: "JKPSC AE",
        },
        {
          name: "NCRTC Station Controller",
        },
        {
          name: "PGVCL Vidyut Sahayak JE",
        },
        {
          name: "CGPSC AE",
        },
        {
          name: "PSPCL JE",
        },
        {
          name: "CG Vyapam Sub Engineer",
        },
        {
          name: "Bhulekh Maharashtra",
        },
        {
          name: "PSPCL ALM",
        },
        {
          name: "NTPC Diploma Trainee",
        },
        {
          name: "CSPHCL JE",
        },
        {
          name: "PSTCL AE",
        },
        {
          name: "JPSC AE",
        },
        {
          name: "HPPSC Assistant Engineer",
        },
        {
          name: "APSC Assistant Engineer",
        },
        {
          name: "DMRC JE EE",
        },
        {
          name: "MAHATRANSCO AE",
        },
        {
          name: "DMRC Assistant Manager",
        },
        {
          name: "PSTCL ALM",
        },
        {
          name: "NPCIL Scientific Assistant",
        },
        {
          name: "NCRTC Technician",
        },
        {
          name: "PPSC JE",
        },
        {
          name: "BARC DAE",
        },
        {
          name: "GETCO Junior Engineer",
        },
        {
          name: "DSSSB Manager",
        },
        {
          name: "GSECL Vidyut Sahayak JE",
        },
        {
          name: "NCRTC Maintenance Associate",
        },
        {
          name: "IGCAR Stipendiary Trainee",
        },
        {
          name: "MPSC Motor Vehicle Inspector",
        },
        {
          name: "DMRC JE EC",
        },
        {
          name: "GPSSB Additional Assistant Engineer",
        },
        {
          name: "NFC Stipendiary Trainee",
        },
        {
          name: "PSSSB Junior Draftsman",
        },
        {
          name: "DMRC JE",
        },
        {
          name: "MGVCL JE",
        },
        {
          name: "DMRC Maintainer",
        },
        {
          name: "DMRC JE CE",
        },
        {
          name: "DSSSB Assistant Foreman",
        },
        {
          name: "GSECL Junior Programmer",
        },
        {
          name: "GSECL Vidyut Sahayak Plant Attendant",
        },
        {
          name: "TNPSC Combined Engineering Services",
        },
        {
          name: "NWDA JE",
        },
        {
          name: "MAHA Metro Train Operator",
        },
        {
          name: "TNPSC Junior Drafting Officer",
        },
        {
          name: "BARC NRB",
        },
        {
          name: "TSSPDCL AE",
        },
        {
          name: "BSNL TTA",
        },
        {
          name: "MPSC RTO",
        },
        {
          name: "NPCIL Plant Operator",
        },
        {
          name: "Goa PWD JE",
        },
        {
          name: "MAHA Metro Technician",
        },
        {
          name: "Goa PWD Technical Assistant",
        },
        {
          name: "IGCAR Technical Officer",
        },
        {
          name: "BARC Stipendiary Trainee",
        },
        {
          name: "NFC Chemical Plant Operator",
        },
        {
          name: "NPCIL Stipendiary Trainee",
        },
        {
          name: "IGCAR Work Assistant",
        },
        {
          name: "BIS Technical Assistant",
        },
        {
          name: "BIS",
        },
        {
          name: "BIS Senior Technician",
        },
        {
          name: "BIS Stenographer",
        },
      ],
    },
    {
      name: "Defence Exams",
      subCategory: [
        {
          name: "DRDO STA",
        },
        {
          name: "Airforce Group X",
        },
        {
          name: "DRDO Technician A",
        },
        {
          name: "Airforce Group Y",
        },
        {
          name: "Army GD Agniveer",
        },
        {
          name: "CISF Head Constable",
        },
        {
          name: "BSF Head Constable",
        },
        {
          name: "Indian Airforce Agniveer",
        },
        {
          name: "AFCAT",
        },
        {
          name: "Army Clerk Agniveer",
        },
        {
          name: "CISF Constable",
        },
        {
          name: "BSF RO",
        },
        {
          name: "BSF Constable",
        },
        {
          name: "NDA",
        },
        {
          name: "Indian Coast Guard Navik GD",
        },
        {
          name: "CDS",
        },
        {
          name: "AOC Material Assistant",
        },
        {
          name: "DRDO MTS",
        },
        {
          name: "Army Tradesman Agniveer",
        },
        {
          name: "Indian Army Agniveer",
        },
        {
          name: "Indian Coast Guard Navik DB",
        },
        {
          name: "Army Technical Agniveer",
        },
        {
          name: "ITBP Head Constable",
        },
        {
          name: "CISF ASI",
        },
        {
          name: "SSB Service Selection Board",
        },
        {
          name: "Indian Coast Guard Yantrik",
        },
        {
          name: "Indian Navy Agniveer",
        },
        {
          name: "SSB Head Constable",
        },
        {
          name: "Indian Coast Guard Assistant Commandant",
        },
        {
          name: "BSF SI",
        },
        {
          name: "ACC Exam",
        },
        {
          name: "Indian Air Force Group C",
        },
        {
          name: "BRO Multi Skilled Worker",
        },
        {
          name: "Navy MR Agniveer",
        },
        {
          name: "Territorial Army",
        },
        {
          name: "DRDO RAC",
        },
        {
          name: "Assam Rifles",
        },
        {
          name: "CRPF SI",
        },
        {
          name: "Indian Army BSc Nursing",
        },
        {
          name: "INET",
        },
        {
          name: "Navy AA",
        },
        {
          name: "AFCAT EKT",
        },
        {
          name: "Indian Army CEE",
        },
        {
          name: "SSB SI",
        },
        {
          name: "IMA Dehradun Group C",
        },
        {
          name: "IMU CET",
        },
        {
          name: "Army Havildar SAC",
        },
        {
          name: "DGAFMS Group C",
        },
        {
          name: "ASC Centre Group C",
        },
        {
          name: "Indian Coast Guard",
        },
        {
          name: "BSF Tradesman",
        },
        {
          name: "Navy Tradesman Mate",
        },
        {
          name: "DRDO Administrative Assistant",
        },
        {
          name: "DRDO Stenographer",
        },
        {
          name: "ISRO Scientific Assistant",
        },
      ],
    },
    {
      name: "State Govt. Exams",
    },
    {
      name: "Police Exams",
    },
    {
      name: "Insurance Exams",
    },
    {
      name: "Nursing Exams",
    },
    {
      name: "Other Govt. Exams",
    },
    {
      name: "NRA CET",
    },
    {
      name: "Campus Placement",
    },
    {
      name: "MBA Entrance Exam",
    },
    {
      name: "CUET and UG Entrance",
    },
    {
      name: "Accounting and Commerce",
    },
  ];

  const categoryObj = {};

  const { getCategoryByField, getDocumentsByQuery: getCategoriesByQuery } =
    useCategoryCollection();

  useEffect(() => {
    fetchCategory();
  }, []);

  async function fetchCategory() {
    const _categoryData = await getCategoriesByQuery(
      [{ property: "isParentCategory", operator: "==", value: true }],
      "title"
    );
    setCategoryData(_categoryData);
    fetchSubCategory(_categoryData[0].id);
    // const featuredCategoryData = _categoryData.filter((item) => {
    //   return item.featureAtHome;
    // });
    // setFeaturedCategory(featuredCategoryData);
    // fetchFeaturedCourses(featuredCategoryData);
  }

  async function fetchSubCategory(parentCategoryId) {
    if (!categoryObj[parentCategoryId]) {
      const _categoryData = await getCategoriesByQuery(
        [
          {
            property: "parentCategory",
            operator: "==",
            value: parentCategoryId,
          },
        ],
        "title"
      );
      categoryObj[parentCategoryId] = _categoryData;
    }

    setSubCategory(categoryObj[parentCategoryId]);
  }

  const [activeCategory, setActiveCategory] = useState(0);

  function handleCatgeoryClick(e) {
    // setActiveCategory(parseInt(e.target.dataset.index));
    console.log("cid", e.target.dataset.cid);
    e.target.dataset.cid && fetchSubCategory(e.target.dataset.cid);
  }

  return (
    <>
      <div
        className={
          style.category_overlay_container + " bg-white shadow-lg p-3 rounded "
        }
      >
        <div className="d-flex">
          <div
            className={style.category_overlay_main + " "}
            onClick={handleCatgeoryClick}
          >
            {categoryData.map((c, i) => (
              <div
                data-cid={c.id}
                data-index={i}
                key={i}
                role="button"
                className={
                  "border-bottom py-3 text-nowrap px-2 " +
                  (activeCategory === i && "bg-light")
                }
              >
                {c.title}{" "}
                <span>
                  <IoIosArrowForward />
                </span>
              </div>
            ))}
          </div>
          <div
            className={
              "d-flex flex-wrap gap-3 align-items-center ps-3  " +
              style.category_overlay_secondary
            }
          >
            {subCategory?.map((sc, i) => (
              <Link href={"/category/" + sc.title.toLowerCase().replaceAll(" ", "-")+"-"+sc.id }>
                <div key={sc.id} className="border rounded p-2" role="button">
                  {sc.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
