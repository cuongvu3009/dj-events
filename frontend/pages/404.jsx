import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <Layout title='Page not found'>
      <div className={styles.error}>
        <h1>404</h1>

        <FaExclamationTriangle size={50} />

        <h4>Sorry, no thing here to show</h4>
        <Link href='/'>Back Home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
