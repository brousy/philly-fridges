import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <header className="bg-primary text-light mb-4 py-3">
      <div className="container justify-space-between-lg ">
        <div className='row justify-center align-items-center'>
        <Link className="col text-light" to="/">
          <h1 className="m-0">Philly Fridges</h1>
        </Link>
        <div className='col'>
        <span className="m-0">Feeding our community.</span>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
