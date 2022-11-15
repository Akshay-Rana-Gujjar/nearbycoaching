import {useEffect} from 'react';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap';
import BottomNavBar from '../components/BottomNavBar'
import '../utils/firebase';
import useIsMobile from '../hooks/useIsMobile';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap")
  
    return () => {
      
    }
  }, [])
  

  const isMobile = useIsMobile();

  return <div>
  <Component {...pageProps} isMobile={isMobile} />
  <Footer/>
  {isMobile && <BottomNavBar/>}
  </div>
}

export default MyApp
