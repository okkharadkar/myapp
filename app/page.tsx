// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing page created with Next.js, TypeScript, and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection />
    </div>
  );
};

export default Home;
