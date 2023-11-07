import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_ITEM } from '../../utils/mutations';
import { QUERY_FRIDGE_ITEMS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const ItemForm = () => {
    // Defines the state 
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        quantity: 1,
    });

    // defines mutation 
    const [addItem, { error }] = useMutation(ADD_ITEM);
    
    // Handles form input changes 
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData ({
            ...formData,
            [name]: value,
        });
    };

    // handles form submission 
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addItem({
                variables: { ...formData },
                refetchQueries: [{ query: QUERY_FRIDGE_ITEMS }, { query: QUERY_ME }],
            });
            // clears form fields after user submits 
            setFormData({
                name: '',
                description: '',
                quantity: 1,
            });
        }   catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
          {Auth.loggedIn() ? (
            <form onSubmit={handleFormSubmit}>
              <h2>Add an Item to the Fridge</h2>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                />
              </div>
              {error && <p className="error">{error.message}</p>}
              <button type="submit">Add Item</button>
            </form>
          ) : (
            <p>You need to be logged in to add items to the fridge.</p>
          )}
        </div>
      );
  
};

export default ItemForm;
