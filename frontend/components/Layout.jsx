import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Showcase from './Showcase';
import styles from '@/styles/Layout.module.css';
import { useRouter } from 'next/router';

const Layout = ({ title, keywords, desc, children }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={desc} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />

      {router.pathname === '/' && <Showcase />}

      <div className='styles.container'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
