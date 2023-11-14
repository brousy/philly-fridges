import { useQuery, useMutation } from '@apollo/client';

import { UPDATE_ITEM } from '../../utils/mutations';
import { QUERY_FRIDGE_ITEMS } from "../../utils/queries";



const ItemList = ({ id }) => {

  console.log( id )


  const { loading, data } = useQuery(QUERY_FRIDGE_ITEMS, {
    variables: { fridgeId: id },
  });

  const fridge = data?.fridgeItems || {};

  console.log(fridge)

  const [updateOne, { error }] = useMutation(UPDATE_ITEM
    
    , {
    refetchQueries: [
      QUERY_FRIDGE_ITEMS,
      'getFridgeItems'
    ]
  }
  
  );

  const handleTakeOne = async (itemId, name, quantity) => {

    const newQty = quantity-1

    try {
      const items = await updateOne({
        variables: {
          itemId: itemId,
          name: name,
          quantity: newQty,
        },
      })

    } catch (error) {
      console.log(error);
    }
  };

  if (!fridge.items) {
    return <h3>No items available</h3>;
  }
  return (

    <div className='bg-idie col-12 p-4 mt-4 rounded border border-light'>
      <h2
        className="text-peach"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Items
      </h2>
      <div className="p-4">
        {fridge.items.map((item) => (
          <div key={item._id} className="col-12 mb-3 pb-3">
            <div className="p-3 bg-light text-dark rounded">
              <div className="d-flex justify-content-between">
                <h5 className="card-header">
                  {item.itemName} {' '}
                  Qty {' '} {item.itemQuantity}
                </h5>
                <button className="content-right bg-dpurple text-center text-light" onClick={() => handleTakeOne(item._id, item.itemName, item.itemQuantity)}>Take One</button>
              </div>
              <p className="text-center">
                {item.itemUsername} {item.itemName} expires on {item.expiryDate}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;