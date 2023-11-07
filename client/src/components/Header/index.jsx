import { Link, redirect } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();

  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="col-auto text-light" to="/">
            <h1 className="m-0">Philly Fridges</h1>
          </Link>
          <span className="m-0">Feeding our community.</span>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to={`/profiles/${Auth.getProfile().data.username}`} >
                {Auth.getProfile().data.username}'s profile
              </Link >
              <Link className="btn btn-lg btn-light m-2" to="/" onClick={logout} >
                Logout
              </Link >
            </>
          ) : (

            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link >
              <Link  className="btn btn-lg btn-light m-2" to="/signup" >
                Signup
              </Link >
            </>
          )}
        </div>
      </div>
    </header >
  );
};

export default Header;
