import FridgeList from "../components/FridgeList/fridgelist.jsx";

const Home = () => {

    return (
        <main className="col-10 col-8-md col-6-lg">
            <div className="card bg-light">
                <FridgeList />
            </div>
        </main>
    );
};

export default Home;