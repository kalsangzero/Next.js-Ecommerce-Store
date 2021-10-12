import Head from 'next/head';
import Layout from '../Component/Layout';

export default function Account() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Account Page </title>
        </Head>

        <p>These thing are About Info.</p>
        <button>signin</button>
      </div>
    </Layout>
  );
}
