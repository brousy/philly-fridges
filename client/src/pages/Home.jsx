import FridgeList from "../components/FridgeList/fridgelist.jsx";

const Home = () => {
    
    return (       
        
        <main>
            <div className="flex-row justify-center bg-warning">
                <div>
                    <div className="col-12 col-md-8 mb-3">
                        <FridgeList />       
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;