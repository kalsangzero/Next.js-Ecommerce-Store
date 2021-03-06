import GlobalStyles from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyles />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
