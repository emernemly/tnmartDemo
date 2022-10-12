import Sidebare from '../componets/Sidebare';
import '../styles/index.scss';
import '../styles/SideBar.scss';
import '../styles/Navebar.scss';
import { useRouter } from 'next/router';
import Navbare from '../componets/Navbare';
import '../styles/Homestyle/Cordonne.scss';
import '../styles/Homestyle/Bestselling.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  const Router = useRouter();
  return (
    <>
      <Sidebare />
      <div className={`${Router.locale === 'ar' ? 'allAr' : 'all'}`}>
        <Navbare />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
