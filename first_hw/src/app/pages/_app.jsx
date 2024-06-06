// src/app/pages/_app.jsx

import '../../styles/globals.css';
import { PageTitleProvider } from '../context/PageTitleContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <PageTitleProvider>
      <Component {...pageProps} />
    </PageTitleProvider>
  );
}

export default MyApp;
