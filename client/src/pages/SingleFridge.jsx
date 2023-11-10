import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";

import { useOutletContext } from "react-router-dom";

import { QUERY_FRIDGE_ITEMS } from "../utils/queries";


const SingleFridge = () => {

    const { fridgeId } = useParams();

    const { loading, data } = useQuery(QUERY_FRIDGE_ITEMS, {
        variables: { fridgeId: fridgeId },
    });

    const fridge = data?.fridgeItems || {};
    
    console.log(fridge);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className=" bg-light">
            <h3 className="card-header p-2 m-0">{fridge.name}</h3>
            <br />
            <div className="my-3">
                <ItemList items={fridge.items} />
            </div>
            <div className="m-3 p-4">
                <ItemForm name={fridge.name} />
            </div>
        </div>
    );
};

export default SingleFridge;