
import Image from 'next/image';
import ready from '../Images/RG.png'; 

const Img = () => {
  return (
    <div>
      <div className="flex-1 mt-8 md:mt-0 md:ml-8">
        <Image src={ready} alt="Phone showing app" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Img;