const ItemList = ({ items = [] }) => {

    if (!items.length) {
        return <h3>No items yet</h3>;
    }

    return (
        <>
            <h3
                className="display-inline-block"
                style={{ borderBottom: '1px dotted #1a1a1a' }}
            >
                Items
            </h3>
            <div className="flex-row my-4">
                {items &&
                    items.map((item) => (
                        <div key={item._id} className="col-12 mb-3 pb-3">
                            <div className="p-3 bg-warning text-light rounded">
                                <h5 className="card-header">
                                    {item.itemName}
                                    </h5>
                                    <span>
                                        {item.itemUsername} {' '}  {item.itemName} expires on {item.expiryDate}
                                    </span>
                                <p className="card-body">{item.description}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
};



export default ItemList;