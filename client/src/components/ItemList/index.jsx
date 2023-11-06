const ItemList = ({ items = [] }) => {

    if (!items.length) {
        return <h3>No items yet</h3>;
    }

    return (
        <>
            <h3
                className="p-5 display-inline-block"
            >
                Items
            </h3>
            <div className="flex-row my-4">
                {items &&
                    items.map((item) => (
                        <div key={item._id} className="col-12 mb-3 pb-3">
                            <div className="p-3 bg-dark text-light">
                                <h5 className="card-header">
                                    {item.itemName}
                                    </h5>
                                    <span>
                                        {item.itemUsername} added {item.itemName} on {item.addDate}
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