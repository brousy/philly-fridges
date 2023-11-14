import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_FRIDGES } from '../../utils/queries';

const FridgeList = () => {
    const { loading, data } = useQuery(QUERY_FRIDGES);
    const fridge = data?.fridges || [];



    if (!fridge.length) {
        return <h3>No Fridges Available</h3>;
    }

    return (
        <div className='bg-idie col-12 p-4 mt-4 rounded border border-light'>
            <h2
                className="text-peach"
                style={{ borderBottom: '1px dotted #1a1a1a' }}
            >
                Fridges
            </h2>
            <div className="overflow-auto p-4">
                {fridge &&
                    fridge.map((fridge) => (
                        <div key={fridge._id} className="col-12 mb-3 pb-3">
                            <div className="p-3 bg-light text-dark rounded">
                                <h5 className="card-header">
                                    {fridge.name}
                                </h5>
                                {fridge.online ? (
                                    <Link 
                                        className="text-dpurple" to={`/fridges/${fridge._id}`}>
                                            Peek inside this fridge.
                                        </Link>
                                ) : (
                                    <div>
                                    <span className="text-light">
                                        Fridge is currently offline.
                                    </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default FridgeList;