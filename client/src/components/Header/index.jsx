import { Link, redirect } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();

  };
  return (
    <header className="bg-idie mb-4 py-3 justify-space-between-lg">
        <div className=''>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn m-2 text-light border-light" to={`/profiles/${Auth.getProfile().data.username}`} >
                {Auth.getProfile().data.username}'s profile
              </Link >
              <Link className="btn m-2 text-light border-light" to="/" onClick={logout} >
                Logout
              </Link >
            </>
          ) : (

            <>
              <Link className="btn m-2 text-light border-light" to="/login">
                Login
              </Link >
              <Link  className="btn m-2 text-light border-light" to="/signup" >
                Signup
              </Link >
            </>
          )}
        </div>
        <div className="text-center">
          <Link className="col-auto" to="/">
            <h1 className="m-0 text-peach ">Philly Fridges</h1>
          </Link>
          <span className="text-peach m-0">Feeding our community</span>
        </div>
        
    </header >
  );
};

export default Header;
