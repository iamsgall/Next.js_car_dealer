import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./Navbar.jsx'));
const Footer = dynamic(() => import('./Footer.jsx'));

import Head from 'next/head';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import NProgress from 'nprogress';

export default function Layout({title, children, description}) {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
    return () => {
      router.events.off('routeChangeStart', () => NProgress.start());
      router.events.off('routeChangeComplete', () => NProgress.done());
      router.events.off('routeChangeError', () => NProgress.done());
    };
  }, []);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={description} />
        <link rel='shortcut icon' href='/images/favicon.ico' />
      </Head>

      <div className='outer'>
        <Navbar />
        <div className='container-fluid'>{children}</div>
        {/* <Footer /> */}
      </div>

      <style jsx>{`
        .outer {
          display: flex;
          flex-flow: column;
          height: 100%;
        }
      `}</style>
    </>
  );
}
