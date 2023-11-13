import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_ITEM } from '../../utils/mutations';
import { QUERY_FRIDGE_ITEMS, QUERY_USER } from '../../utils/queries';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

import Auth from '../../utils/auth';

const ItemForm = ({ name }) => {

  // Defines the state 
  const [formData, setFormData] = useState({
    itemName: '',
    itemQuantity: '',
    isFrozen: 'true'
  });

  const [expiryDate, setExpiryDate] = useState(new Date());

  // defines mutation 
  const [addItem, { error }] = useMutation(ADD_ITEM, {
    refetchQueries: [
      QUERY_FRIDGE_ITEMS,
      'getFridgeItems'
    ]
  });


  // Handles form input changes 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // handles form submission 
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addItem({
        variables: {
          ...formData,
          itemUsername: Auth.getProfile().data.username,
          itemFridgename: name,
        },
      });
      // clears form fields after user submits 
      setFormData({
        itemName: '',
        itemQuantity: '',
        isFrozen: '',
        expiryDate: ''
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='single'>
      {Auth.loggedIn() ? (
        <form onSubmit={handleFormSubmit}>

          <h2 className=" text-primary ">Add an Item to the Fridge</h2>
            <div className="form-group ">
              <label className='addIlabel' htmlFor="itemName">Name:</label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group ">
              <label className='addIlabel' htmlFor="itemQuantity">Quantity:</label>
             <input
                type="number"
                id="itemQuantity"
                name="itemQuantity"
                value={formData.itemQuantity}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <span className='addIlabel'>Is Frozen?</span>
              <input
                className="form-check-input"
                type="radio"
                name="isFrozen"
                value="true"
                id="flexRadioDefault1"
                checked={formData.isFrozen === 'true'}
                onChange={handleInputChange}
              />
              <label
                className='addIlabel form-check-label'
                htmlFor="flexRadioDefault1"
              >
                True
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="isFrozen"
                value="false"
                id="flexRadioDefault2"
                checked={formData.isFrozen === 'false'}
                onChange={handleInputChange}
              />
              <label
                className='addIlabel form-check-label'
                htmlFor="flexRadioDefault2"
              >
                False
              </label>
            </div>
            <div className="form-group">
             
              <label
                className=' addIlabel form-check-input' id='datePicker'>Expiration Date
              </label> 
              <DatePicker id="datePicker" selected={expiryDate} onChange={(date) => setExpiryDate(date)} />
                {error && <p className="error">{error.message}</p>}
             </div>
             <button type="submit">Add Item</button>
         </form>
      ) : (
        <p>You need to be logged in to add items to the fridge.</p>
      )}
    </div>
  );

};

export default ItemForm;
