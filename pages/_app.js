import { useState } from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import LoadingScreen from '../components/LoadingScreen';

export default function App({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Don't wrap layout around landing page
  if (router.pathname === '/landing') {
    return <Component {...pageProps} />;
  }

  // Show loading screen on every page load
  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
