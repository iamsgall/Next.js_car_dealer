import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../components/Layout.jsx'));

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title='test' description='test'>
      <div className='container'>
        <p>testing</p>
      </div>
    </Layout>
  );
}
