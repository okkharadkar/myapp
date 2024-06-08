//components/HeroSection.tsx
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
          {/* <div className="mt-14 md:mt-4">
            <Image className="ml-36 bg-img " src={shade1} alt="App Mookup" width={300} height={300}/>
            
          </div> */}
          <h1 className="text-5xl font-bold mb-4">Make The Best Financial Decisions</h1>
            <p className="text-lg text-gray-600 mb-6">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-black text-white px-14 py-3 rounded-md hover:bg-red-600">
              Get Started 
            </button>
            <button className="text-black bg-white px-6 py-3 rounded-md hover:bg-gray-100">
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
