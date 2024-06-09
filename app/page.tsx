import type { NextPage } from 'next';
import Head from 'next/head';
import Nav  from '../components/Nav';
import Hero from '../components/Hero';
import Feature1 from '@/components/Feature1';
import Feature3 from '@/components/Featuere3';
import Feature2 from '@/components/Feature2';
import Feature4 from '@/components/Feature4';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Feature5 from '@/components/Feature5';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing page created with Next.js, TypeScript, and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main>
        <section className="hero">
          <Hero/>
        </section>
        <section className=" py-16">
          <div className="container mx-auto px-4">
            <Feature1 />
          </div>
        </section>
        <section className="advantages py-16">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <Feature3 />
          </div>
        </section>
        <section className="customizable py-16">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <Feature2/>
          </div>
        </section>
        <section className="testimonials py-16">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <Feature4 />
          </div>
        </section>
        <section className="faq py-16">
          <div className="container mx-auto px-4">
            <FAQ />
          </div>
        </section>
        <section className="image">
          <Feature5 />
        </section>
      </main>
      < Footer/>
    </div>
  );
};

export default Home;
