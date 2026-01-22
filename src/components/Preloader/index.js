// components/Preloader.jsx
import React from 'react';
import Image from 'next/image';
import './preloader.css'; // Optional CSS if you're styling it

export default function Preloader() {
  return (
    <div className="preloader">
      <Image
        src="/images/smaitlogo.jpeg" 
        alt="Loading..."
        width={180}
        height={180}
      />
      <p>Loading...</p>
    </div>
  );
}
