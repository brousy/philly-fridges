import { useQuery } from "@apollo/client";

import FridgeList from '../components/FridgeList';

import { QUERY_FRIDGES } from '../utils/queries';

const Home = () => {
    const { loading, data }
    = useQuery(QUERY_FRIDGES);
    const fridges = data?.names || [];

    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 mb-3 p-3"
                style={{ border: '1px dotted #1a1a1a' }}
                >
                    <
                </div>
            </div>
        </main>
    )
}