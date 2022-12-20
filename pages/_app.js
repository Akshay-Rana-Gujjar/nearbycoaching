import { useEffect } from 'react';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BottomNavBar from '../components/BottomNavBar'
import '../utils/firebase';
import useIsMobile from '../hooks/useIsMobile';
import Footer from '../components/Footer';
import StoreProvider from '../provider/StoreProvider';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap")

    return () => {

    }
  }, [])


  const isMobile = useIsMobile();

  return <div>
    <StoreProvider>
      <>
        <Component {...pageProps} isMobile={isMobile} />
        <Footer />
        {isMobile && <BottomNavBar />}
      </>
    </StoreProvider>
  </div>
}

export default MyApp
