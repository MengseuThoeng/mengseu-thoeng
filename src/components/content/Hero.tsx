import Image from 'next/image';
import { siteConfig } from '@/src/configs/config'; // Import siteConfig
import AnimationContainer from '../utils/AnimationContainer';

const Hero = () => {
  return (
    <div className="w-full flex justify-between flex-col-reverse lg:flex-row items-center">
      <AnimationContainer customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
        <h1 className="font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:mx-0">
          {siteConfig.author} {/* Dynamic author name */}
        </h1>

        <h2 className="flex items-center gap-2 text-1xl lg:text-1xl text-gray-200 mb-8 mx-auto lg:mx-0">
          <span className="relative w-[max-content] font-mono typing-animation">
            I'm a Software Engineer
          </span>
        </h2>
      </AnimationContainer>

      {/* <AnimationContainer customClassName="w-[150px] sm:w-[250px] relative mb-6 lg:mb-0">
        <Image
          alt={siteConfig.author} // Dynamic alt text
          height={300} // Increased height
          width={300} // Increased width
          src={siteConfig.profile_image} // Dynamic profile image URL
          sizes="30vw"
          priority
          className="rounded-[12px]  hover:grayscale-0 transition ease" // filter grayscale removed
        />
      </AnimationContainer> */}
      <AnimationContainer customClassName="w-[150px] sm:w-[250px] relative mb-6 lg:mb-0">
        {/* LED effect container */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[16px] animate-led-run opacity-75 blur-sm"></div>
        
        {/* Image container with relative positioning to appear above the LED effect */}
        <div className="relative rounded-[12px] overflow-hidden">
          <Image
            alt={siteConfig.author}
            height={300}
            width={300}
            src={siteConfig.profile_image}
            sizes="30vw"
            priority
            className="rounded-[12px] filter grayscale hover:grayscale-0 transition ease bg-background/30 dark:bg-background/30"
          />
        </div>
      </AnimationContainer>
    </div>
  );
};

export default Hero;
