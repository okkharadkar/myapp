// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import Advantages from '@/components/Advantages'
import Customizable from '@/components/Customizable'
import Testimonial from '@/components/Testimonial'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer';
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
      <main className="min-h-screen bg-gray-100">
        <FeatureSection />
      </main>
      <main className="flex flex-col items-center justify-center">
        <Advantages />
      </main>
      <main className="flex flex-col items-center justify-center">
        <Customizable />
      </main>
      <main className="flex flex-col items-center justify-center">
        <Testimonial />
      </main>
      <main className="container mx-auto p-4">
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
