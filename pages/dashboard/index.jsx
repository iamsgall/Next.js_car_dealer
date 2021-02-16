import React from 'react';
import dynamic from 'next/dynamic';

const Admin = dynamic(() => import('../../components/dashboard/Admin'), {
  ssr: false,
});

export default function Dashboard() {
  return <Admin />;
}
