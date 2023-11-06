import { useQuery } from "@apollo/client";

import FridgeList from "../components/FridgeList/fridgelist.jsx";

import { QUERY_FRIDGES } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_FRIDGES);
    const fridge = data?.fridges || [];

    return (
        <main>
            <div className="flex-row justify-center ">
                <div>
                    <div className="col-12 col-md-8 mb-3">
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <FridgeList
                                fridges={fridge} />
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;