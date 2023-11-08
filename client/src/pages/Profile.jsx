import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import FridgeList from '../components/FridgeList/fridgelist';
import FridgeForm from '../components/FridgeForm';
import ItemList from '../components/ItemList';

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
        <div className="flex-row justify-center">
          <div className="col-12 col-lg-5">
            <div className="card">
              <h4 className="card-header bg-primary text-light p-2">User Fridges</h4>
              <div className="card-body">
                <div>
                  <FridgeList fridges={user.fridges} />
                </div>
                <div className='card-body'>
                  <h4 className="card-header bg-success text-light p-2">Add a Fridge</h4>
                  <FridgeForm />
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 col-12 col-lg-5">
            <div className="card">
              <h4 className="card-header bg-primary text-light p-2">User Items</h4>
              <div className="card-body">
                {loading ? (
                  <div>Loading...</div>) : (
                  <ItemList items={user.items} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile;