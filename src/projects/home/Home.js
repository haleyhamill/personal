import './Home.css';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Home() {
  return (
    <>
      <div className="welcome-message">
        <header>Hello</header>
      </div>
      <div className="home-content">
        I am a technical generalist driven by curiosity and a passion for understanding the world.
        My interests span current events, human development, artificial intelligence, nutrition,
        macroeconomics, fashion, and medicine. While I have spent much of my professional life as a
        software engineer at early-stage startups, my journey began with founding my own company,{' '}
        <a href="https://www.instagram.com/bestblackjeans/">bestblackjeans</a>, where I led
        research, marketing, and design initiatives.
      </div>
      <div className="home-content">
        I studied psychology and neuroscience at Duke University where I was awarded the Trinity
        Scholarship — an honor that provided full funding for tuition, summer programs, and living
        expenses. Following graduation, I have primarily lived and worked between London and San
        Francisco.
      </div>
      <div className="home-content center">
        <a
          href="https://x.com/hamillherself"
          rel="noopener noreferrer"
          aria-label="Twitter/X"
          className="social-icon"
        >
          <FaXTwitter size={32} />
        </a>
        <a href="https://github.com/haleyhamill" aria-label="GitHub" className="social-icon">
          <FaGithub size={32} />
        </a>
      </div>
    </>
  );
}

export default Home;
