import { useState } from 'react';
import { Link } from 'react-router-dom';


import { useMutation } from '@apollo/client';
import { ADD_FRIDGE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const fridgeCreate = () => {
    const [formState, setFormState] = useState({
        name: '',
        online: ''
    });

    const [selectedOption, setSelectedOption] = useState("isOnline");

    const [addFridge, { error, data }] = useMutation(ADD_FRIDGE);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addFridge({
                variables: { ...formState },
            });

            Auth.login(data.addFridge.token);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Add a Fridge</h4>
          <div className="card-body">
            {data ? (
              <p>
                Fridge Added Successfully!
                <Link to="/">Back Home?</Link>
                <Link to="/me">Return to Profile</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Fridge name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <span>Is Online?</span>
                <input
                  className="form-check-input"
                  type="radio"
                  name="isOnline"
                  id="flexRadioDefault1"
                  value="isOnline"
                  onChange={handleChange}
                  checked={selectedOption===isOnline}
                />
                <label 
                  className='form-check-label'
                  for="flexRadioDefault1"
                >
                    True
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="isFrozen"
                  id="flexRadioDefault2"
                /> 
                <label 
                  className='form-check-label'
                  for="flexRadioDefault2"
                >
                    False
                </label>
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};


