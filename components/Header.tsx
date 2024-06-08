// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import hot from '../Images/Hot.png'
import star from '../Images/S.png'
const Header = () => {
  return (
    <header className='grid grid-cols-9 gap-5 py-4 px-6 '>
      <div className="container mx-auto flex justify-start items-center py-4 px-6 col-start-2 col-span-4">
        <div className="flex items-center space-x-2">
          <Image src={hot} alt="Logo" width={30} height={30} className="rounded-md shadow-md" />
          <div className="text-2xl font-bold text-red-500 pr-8">uifry</div>
        </div>
        <nav className="space-x-6 flex justify-start">
          <Link href="/" className="text-gray-800 hover:text-red-500">Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-red-500">About Us</Link>
          <Link href="/testimonials" className="text-gray-800 hover:text-red-500">Testimonials</Link>
          <Link href="/features" className="text-gray-800 hover:text-red-500">Features</Link>
        </nav>
        
      </div>
      <div className='grid justify-items-end pl-56 py-6'>
      <Link href="/download" className="text-white size-10 w-32 bg-black px-6 py-2 rounded-md hover:bg-gray-700">
          Download
        </Link>
        
      </div>
      
    </header>
  );
};

export default Header;
