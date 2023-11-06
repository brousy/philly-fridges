import { Link } from "react-router-dom";

const FridgeList = ({ fridges }) => {
    if (!fridges) {
        return <h3>No Fridges Available</h3>;
    }

    return (
        <div>
            <h3
                className="p-5 display-inline-block"
                style={{ borderBottom: '1px dotted #1a1a1a' }}
            >
                Fridges
            </h3>
            <div className="flex-row my-4">
                {fridges &&
                    fridges.map((fridge) => (
                        <div key={fridge._id} className="col-12 mb-3 pb-3">
                            <div className="p-3 bg-dark  text-light rounded">
                                <h5 className="card-header">
                                    {fridge.name}
                                </h5>
                                {fridge.online ? (
                                    <Link 
                                        className="text-link" to={`/fridges/${fridge._id}`}>
                                            Peek inside this fridge.
                                        </Link>
                                ) : (
                                    <>
                                    <span className="text-light">
                                        Fridge is currently offline.
                                    </span>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default FridgeList;