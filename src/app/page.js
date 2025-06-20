'use client';
import { useState, useEffect } from 'react';

import Preloader from '@/components/Preloader';
import ComingSoon from '@/components/pages/ComingSoon';


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <main>
      <ComingSoon/>
    </main>
  );
}

const styles = {
  preloaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff',
  },
  spinner: {
    border: '6px solid #f3f3f3', 
    borderTop: '6px solid #3498db', 
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
  },
};
