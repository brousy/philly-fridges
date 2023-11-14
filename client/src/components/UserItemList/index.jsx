const UserItems = ({ items }) => {

  if (!items) {
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
        {items.map((item) => (
          <div key={item._id} className="col-12 mb-3 pb-3">
            <div className="p-3 bg-light text-dark rounded">
              <div className="d-flex justify-content-between">
                <h5 className="card-header">
                  {item.itemName} {' '}
                  Qty {' '} {item.itemQuantity}
                </h5>
              </div>
              <p className="text-center">
                You added {' '} {item.itemName}{' '}which expires on {item.expiryDate}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default UserItems;