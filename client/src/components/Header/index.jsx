import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <header className="bg-primary text-light">
      <div className="container justify-space-between-lg">
        <div className='row justify-center align-items-center'>
          <Link className="col text-light" to="/">
            <h1 className="">Philly Fridges</h1>
          </Link>
          <div className='col'>
            <span className="">Feeding our community.</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
