import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import Advantages from '@/components/Advantages';
import Customizable from '@/components/Customizable';
import Testimonial from '@/components/Testimonial';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Img from '@/components/Img';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing page created with Next.js, TypeScript, and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <section className="hero">
          <HeroSection />
        </section>
        <section className=" py-16">
          <div className="container mx-auto px-4">
            <FeatureSection />
          </div>
        </section>
        <section className="advantages py-16">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <Advantages />
          </div>
        </section>
        <section className="customizable py-16">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <Customizable />
          </div>
        </section>
        <section className="testimonials py-16">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <Testimonial />
          </div>
        </section>
        <section className="faq py-16">
          <div className="container mx-auto px-4">
            <FAQ />
          </div>
        </section>
        <section className="image">
          <Img />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
