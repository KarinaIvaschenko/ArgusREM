import CategoryScreen from "../../components/Category/CategoryScreen/CategoryScreen.tsx";
import "./mainScreen.scss";

const MainScreen = () => {
    return (
        <div className="mainScreen">
            <div className="container">
                <CategoryScreen/>
            </div>
        </div>
    );
};

export default MainScreen;