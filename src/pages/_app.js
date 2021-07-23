import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'rc-drawer/assets/index.css';
import 'swiper/swiper-bundle.min.css';
import 'typeface-dm-sans';
import '../theme/master.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return <Component {...pageProps} />;
}
