const ItemList = ({ items = [], onTakeOne }) => {
  if (!items.length) {
    return <h3>No items yet</h3>;
  }

  const handleTakeOne = (itemId) => {
    onTakeOne(itemId);
  };

  // Filter out items with quantity 0
  const filteredItems = items.filter((item) => item.itemQuantity > 0);

  if (filteredItems.length === 0) {
    return <h3>No items available</h3>;
  }

  return (
    <>
      <h3 className="display-inline-block" style={{ borderBottom: '1px dotted #1a1a1a' }}>
        Items
      </h3>
      <div className="flex-row my-4">
        {filteredItems.map((item) => (
          <div key={item._id} className="col-12 mb-3 pb-3">
            <div className="p-3 bg-dark text-light rounded">
              <h5 className="card-header">
                {item.itemName}
                <button onClick={() => handleTakeOne(item._id)}>Take One</button>
              </h5>
              <span>
                {item.itemUsername} {item.itemName} expires on {item.expiryDate}
              </span>
              <p className="card-body">{item.description}</p>
              <p>Quantity: {item.itemQuantity}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
    
export default ItemList;