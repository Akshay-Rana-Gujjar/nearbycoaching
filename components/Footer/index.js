import styles from './styles.module.css';
import useIsMobile from '../../hooks/useIsMobile';

export default function Footer() {
    const isMobile = useIsMobile();

    return <>
        <div className={`${styles["footer-container"]} p-3`} >
            <div className="d-block d-md-flex justify-content-around">
                <div>
                    <div className="h4">Near By Coaching</div>
                    <small className="text-muted1 mb-4">Nearbycoaching is your one-stop location for all education
                        <br />providers and students.
                        <br /> Check out the largest directory of all education providers and
                        <br />courses under one domain.
                    </small>

                    <br />
                    <br />
                    <div className='mb-2 text-muted'>
                        <small>info_nbc@nearbycoaching.com</small>

                    </div>
                    <div className='text-muted mb-4'>
                        <small>+91-9667863669</small>

                    </div>
                </div>
                <div>
                    <div className="h5">Categories</div>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item bg-transparent text-white' > Banking </li>
                        <li className='list-group-item bg-transparent text-white' > SSC </li>
                        <li className='list-group-item bg-transparent text-white' > UPSC </li>
                        <li className='list-group-item bg-transparent text-white' > CBSE </li>
                        <li className='list-group-item bg-transparent text-white' > CAT </li>
                        <li className='list-group-item bg-transparent text-white' > NEET </li>
                    </ul>
                </div>
                <div>
                    <div className="h5">Exams</div>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item bg-transparent text-white' > Banking Exams</li>
                        <li className='list-group-item bg-transparent text-white' > SSC Exams</li>
                        <li className='list-group-item bg-transparent text-white' > UPSC Exams</li>
                        <li className='list-group-item bg-transparent text-white' > CBSE Exams</li>
                        <li className='list-group-item bg-transparent text-white' > CAT Exams</li>
                        <li className='list-group-item bg-transparent text-white' > NEET Exams</li>
                    </ul>
                </div>
                <div>
                    <div className="h5">Company</div>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item bg-transparent text-white' > Contact us</li>
                        <li className='list-group-item bg-transparent text-white' > About us</li>
                        <li className='list-group-item bg-transparent text-white' > Careers</li>
                        <li className='list-group-item bg-transparent text-white' > FAQs</li>
                        <li className='list-group-item bg-transparent text-white' > Blog</li>
                        <li className='list-group-item bg-transparent text-white' > Help & Support</li>
                    </ul>
                </div>
                <div>
                    <div className="h5">State Institutes</div>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item bg-transparent text-white' > Institutes in Delhi</li>
                        <li className='list-group-item bg-transparent text-white' > Institutes in Uttar Pardesh</li>
                        <li className='list-group-item bg-transparent text-white' > Institutes in Maharashtra</li>
                        <li className='list-group-item bg-transparent text-white' > Institutes in Bihar</li>
                        <li className='list-group-item bg-transparent text-white' > Institutes in Rajasthan</li>
                        <li className='list-group-item bg-transparent text-white' > Institutes in Madhya Pardesh</li>
                    </ul>
                </div>

            </div>
        </div>
            {/* <div className="mb-5">&nbsp; </div> */}
            <div className={(isMobile && "mb-5") + " small text-center bg-dark text-muted"} >copyright &copy; 2022 | All Right Reserved | Nearbycoaching.com</div>
            {isMobile && <div className="mb-2"> &nbsp;</div>}
            {/* {isMobile && <div className="mb-5"> &nbsp;</div>} */}
    </>
}