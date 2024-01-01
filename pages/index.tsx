import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Typography } from '@mui/material';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Typography variant="h1" >Hello Next.js 👋</Typography>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
);

export default IndexPage;
