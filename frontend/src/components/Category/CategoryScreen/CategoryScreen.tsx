import "./categoryScreen.scss";
import CategoryList from "../CategoryList/CategoryList.tsx";

const CategoryScreen = () => {
    return (
        <div>
            <h3 className="categoryScreen__title">Browse By Category</h3>
            <CategoryList/>
        </div>
    );
};

export default CategoryScreen;