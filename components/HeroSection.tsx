
import Image from 'next/image';
import phone from '../Images/phone.jpg'
import star2 from '../Images/star.png'
import A from '../Images/A.png'
import shade1 from '../Images/shade1.png'
const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left max-w-lg">
        <div className="absolute -top-10 -left-40 w-96 h-96 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full filter blur-3xl opacity-30"></div>
          <h1 className="text-5xl font-bold mb-4">Make The Best Financial Decisions</h1>
            <p className="text-lg text-gray-600 mb-6">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          <div className="flex justify-center md:justify-start space-x-4">
          <button className="flex items-center bg-black text-white px-6 py-3 rounded-md hover:bg-red-600">
  Get Started 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
</button>

<button className="flex items-center bg-white px-6 py-3 rounded-md hover:bg-gray-100">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2 ">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
  </svg>
  Watch Video 
  
</button>

          </div>
          <div className="mt-14 md:mt-4">
            <Image className="mt-32 mb-12 ml-36" src={star2} alt="App Mookup" width={50} height={50}/>
          </div>
          <div className="mt-4 md:mt-0">
            <Image className="my-8 ml-8" src={A} alt="App Mookup" width={600} height={200.74}/>
          </div>
        </div>
        <div className="mt-8 md:mt-0 float-right mr-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("../path/to/Group 35899 (3).png")', width: '500px', backgroundPosition: '80% 60%' }}>
          <Image src={phone} alt="App Mookup" width={600} height={600}/>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
