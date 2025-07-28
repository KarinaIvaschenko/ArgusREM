import {categoryList} from "../helpers.ts";
import CategoryCard from "../CategoryCard/CategoryCard.tsx";
import "./categoryList.scss";

const CategoryList = () => {
    return (
        <div className="categoryList">
            {categoryList.map(({img, altImg, title, onClick}) => (
                <CategoryCard key={`${img} + ${title}`} onClick={onClick} title={title} img={img} altImg={altImg}/>
            ))}
        </div>
    );
};

export default CategoryList;