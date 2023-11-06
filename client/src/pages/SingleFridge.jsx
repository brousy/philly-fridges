import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";

import { QUERY_FRIDGE_ITEMS } from "../utils/queries";


const SingleFridge = () => {

    const { fridgeId } = useParams();

    console.log(fridgeId)

    const { loading, data } = useQuery(QUERY_FRIDGE_ITEMS, {
        variables: { fridgeId: fridgeId },
    });

    const fridge = data?.fridgeItems || {};

    console.log(fridge);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="my-3">
            <h3 className="card-header bg-dark text-light p-2 m-0">{fridge.name}</h3>
            <br />
            <div className="my-5">
                <ItemList items={fridge.items} />
            </div>
            <div className="m-3 p-4">
                <ItemForm fridgeId={fridge._id} />
            </div>
        </div>
    );
};







// function SingleFridge() {


//     return (
//         <main class="bg-custom container border rounded logcont mainhandles container-fluid p-5 mt-5" id="content">
//             <section id="Freezer">
//                 <h3>Freezer Items</h3>
//                 <ul>
//                     <li>1</li>
//                     <li>2</li>
//                     <li>3</li>
//                     <button>Add Item</button>
//                 </ul>
//             </section>
//             <section id="Fridge">
//                 <h3>Fridge Items</h3>
//                 <ul>
//                     <li>1</li>
//                     <li>2</li>
//                     <li>3</li>
//                 </ul>
//                 <button>Add Item</button>
//             </section>
//         </main>
//     )
// }

export default SingleFridge;