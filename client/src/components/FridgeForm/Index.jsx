import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';

import { ADD_FRIDGE } from '../../utils/mutations';

import { QUERY_FRIDGES, QUERY_USER } from '../../utils/queries';

import Auth from '../../utils/auth';

const FridgeForm = () => {
  const [name, setFridgeName] = useState('');

  const [online, setOnline] = useState('true');

  const username = Auth.getProfile().data.username;

  const [addFridge, { error }] = useMutation(
    ADD_FRIDGE,
    {
      refetchQueries: [
        QUERY_FRIDGES,
        'getFridges',
        QUERY_USER,
        'user'
      ]
    }
  );

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log([name, online, username])
      console.log

      const { data } = await addFridge({
        variables: {
          name: name,
          online: online,
          username: username
        },
      });

      setFridgeName('');
      setOnlineTrue('true');

    } catch (error) {
      console.log(error);
    }
  };

    const handleChange = (event) => {
      const { name, value } = event.target;
  
      if (name === 'name' && value.length <= 280) {
        setFridgeName(value);
      }
    };

    const handleOnline = (event) => {
        setOnline(event.target.value)
    };

  return (
    <div >
      <form onSubmit={handleFormSubmit}>
        <input
          className="form-input"
          placeholder="Fridge name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        />
        <span>Is Online?</span>
        <input
          className="form-check-input"
          type="radio"
          name="isOnline"
          value="true"
          id="flexRadioDefault1"
          checked={online === 'true'}
          onChange={handleOnline}
        />
        <label
          className='form-check-label'
          htmlFor="flexRadioDefault1"
        >
          True
        </label>
        <input
          className="form-check-input"
          type="radio"
          name="isOnline"
          value="false"
          id="flexRadioDefault2"
          checked={online === 'false'}
          onChange={handleOnline}
        />
        <label
          className='form-check-label'
          htmlFor="flexRadioDefault2"
        >
          False
        </label>
        <button
          className="btn btn-block btn-primary"
          type="submit"
        >
          Submit
        </button>
      </form>

      {error && (
        <div className="my-3 p-3 bg-danger text-white">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default FridgeForm;


