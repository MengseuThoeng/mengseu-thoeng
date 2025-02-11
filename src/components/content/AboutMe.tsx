import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About Me
      </h2>

      <p className="text-base text-gray-400">
        {/* Hey there! 👋 I'm <strong>{siteConfig.author}</strong>, and I've been
        passionate about coding since I was a child. I fell in love with
        programming at a young age, spending countless hours learning,
        experimenting, and creating small projects. Over the years, this passion
        has grown into a career as a Full Stack developer, where I continue to
        build innovative solutions that solve real-world problems. */}
        Hey there! 👋 My name is Thoeng Mengseu, but you can call me Reki. I’m a 21-year-old Software Engineering enthusiast with a lifelong passion for technology. My love for coding started when I was around 12 or 13 years old, and it has grown into a core part of who I am. From exploring the latest tech gadgets to building innovative solutions, I thrive on creativity and problem-solving.
      </p>

      <p className="text-base text-gray-400 mt-4">
        {/* As I’ve evolved in my career, I’ve expanded my expertise into new areas
        like Machine Learning (ML) and Artificial Intelligence (AI), diving deep
        into neural networks and other cutting-edge technologies. But no matter
        how much I learn, I always keep that same excitement and curiosity I had
        as a child, exploring new fields and technologies that push the
        boundaries of what’s possible. */}
        I’m currently working on platforms like CodeAdvisors, a tool to help administrators at ISTAD manage student information more efficiently. My expertise includes Spring Boot microservices, Next.js with TypeScript, and a tech stack that leverages Kafka, PostgreSQL, MongoDB, and Elasticsearch. I’m all about creating scalable, impactful software that makes life easier.
      </p>

      <p className="text-base text-gray-400 mt-4">
        {/* Today, I’m not just focused on building apps and websites; I’m also
        exploring DevOps tools like Docker, Kubernetes, and AWS to optimize and
        scale my projects. I believe in continuous learning and growth, and I’m
        always looking for new challenges that help me expand my skills. */}
        Outside of coding, I have a happy and optimistic vibe, and I believe in balancing work with creativity, whether it’s through music, exploring business ideas, or diving into my favorite anime, Freiren. If you’re looking to collaborate or just want to chat about tech, let’s connect and create something amazing together! 🚀
      </p>

      {/* <p className="text-base text-gray-400 mt-4">
        If you’re interested in collaborating on something exciting or need help
        with a project, feel free to reach out. Let’s create something amazing
        together!
      </p> */}
    </AnimationContainer>
  );
};

export default AboutMe;
