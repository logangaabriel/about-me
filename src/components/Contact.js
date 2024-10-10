import { FaLinkedin, FaGithub, FaYoutube, FaEnvelope, FaFileAlt } from 'react-icons/fa';

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
      <a href="/caminho-para-o-seu-arquivo" target="_blank" rel="noopener noreferrer">
        <FaFileAlt size={30} />
      </a>
    </div>
  );
}

export default SocialIcons;
