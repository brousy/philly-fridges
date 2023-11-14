import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";

import { QUERY_FRIDGE_ITEMS } from "../utils/queries";

const SingleFridge = () => {

    const { fridgeId } = useParams();

    const { loading, data } = useQuery(QUERY_FRIDGE_ITEMS, {
        variables: { fridgeId: fridgeId },
      });
    
      const fridge = data?.fridgeItems || {};

    return (
        <div className="card bg-light">
            <h3 className="card-header text-dark">{fridge.name}</h3>
            <br />
            <div>
                <ItemList id={fridgeId} />
            </div>
            <div>
                <ItemForm name={fridge.name} />
            </div>
        </div>
    );
};

export default SingleFridge;