// components/Testimonial.tsx

import Image from 'next/image';
import testimonialBg from '../Images/full.png'; // Ensure this matches the saved image name
import user1 from '../Images/user1.png';
import user2 from '../Images/user2.png';
import user3 from '../Images/user3.png';
import user4 from '../Images/user4.png';
import user5 from '../Images/user5.png';

const Testimonial = () => {
  return (
    <div className="relative bg-white p-8">
      <div className="text-center mb-12">
        <h2 className="text-gray-500 text-lg font-bold">TESTIMONIALS</h2>
        <h1 className="text-4xl font-bold mt-2">What Our Users Say About Us?</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center relative">
        <div className="absolute -top-32 -left-40 w-96 h-96 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full filter blur-3xl opacity-30"></div>
        <div className="relative z-10 flex-1 mt-8 md:mt-0 md:ml-8">
          <div className="relative">
            <Image src={testimonialBg} alt="Testimonial background" className="max-w-full h-auto" />
          </div>
        </div>
        <div className="flex-1 z-10 p-8">
          <h3 className="text-2xl font-bold">The Best Financial Accounting App Ever!</h3>
          <p className="text-gray-500 mt-4">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.”
          </p>
          <div className="flex items-center mt-4">
            <Image src={user1} alt="Nick Jonas" className="w-10 h-10 rounded-full border-4 border-white" />
            <div className="ml-4">
              <h4 className="font-bold">Nick Jonas</h4>
              <p className="text-gray-500">CEO, Example Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
