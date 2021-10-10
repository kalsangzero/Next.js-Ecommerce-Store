import Layout from '../Component/Layout';
import GlobalStyles from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
