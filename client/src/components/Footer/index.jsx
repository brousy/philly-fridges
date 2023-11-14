//Place holder code

import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer>
      <div className='text-center text-dark'>
        {location.pathname !== '/' && (
          <button
            className="btn bg-idie text-peach mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}     
        <p>Maintained by brousy with    
        <img className="inline-block p-1" src="/love.png" width="20px" ></img>  </p>
      </div>
    </footer>
  );
};

export default Footer;