import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import FridgeList from '../components/FridgeList/fridgelist';
import FridgeForm from '../components/FridgeForm/fridgeform';
import UserItems from '../components/UserItemList';

import { QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  console.log(userParam)

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam },
  });

  const user = data?.user || {};

  console.log(user)

  // navigate to personal profile page if username is yours
  if (loading) {
    return <div>Loading...</div>;
  }
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return (
      <main>
        <div className="d-flex justify-center">
          <div className='row'>
            <div className="col-12 col-lg-6 mt-2">
              <div className="card bg-light">
                <div className="row">
                  <div>
                    <FridgeList fridges={user.fridges} />
                  </div>
                  <div className='card-body rounded addForm m-3 mt-1'>
                    <h4 className="card-header text-light p-2">Add a Fridge</h4>
                    <FridgeForm />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mt-2">
              <div className="card bg-light">
                <div>
                  {loading ? (
                    <div>Loading...</div>) : (
                    <UserItems items={user.items} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile;