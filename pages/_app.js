import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BottomNavBar from '../components/BottomNavBar'
import '../utils/firebase';

function MyApp({ Component, pageProps }) {

  return <div>
  <Component {...pageProps} />
  <BottomNavBar/>
  </div>
}

export default MyApp
