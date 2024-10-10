import { FaLinkedin, FaGithub, FaYoutube, FaEnvelope, FaFileAlt, FaMedium } from 'react-icons/fa';

function SocialIcons() {
  return (
    <div className='icons'>
      <a href="https://www.linkedin.com/in/gabriel-logan/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/logangaabriel" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://www.youtube.com/@gaabriellogan" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={30} />
      </a>
      <a href="mailto:contatologangabriel@gmail.com">
        <FaEnvelope size={30} />
      </a>
      <a href="https://drive.google.com/file/d/1JV-vaLGHevt_4hE-wuJAQS5DNPWzNT27/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        <FaFileAlt size={30} />
      </a>
      <a href="https://medium.com/@gabriellogan.0804" target="_blank" rel="noopener noreferrer">
        <FaMedium size={30} />
      </a>
    </div>
  );
}

export default SocialIcons;
