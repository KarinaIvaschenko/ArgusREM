import type {FC} from "react";
import "./categoryCard.scss";

interface ICategoryCardProps {
    img: string;
    altImg: string;
    title: string;
    onClick: () => void;
}

const CategoryCard: FC<ICategoryCardProps> = ({img, altImg, title, onClick}) => {
    return (
        <button className="categoryCard categoryCard__btn" onClick={onClick}>
            <img src={img} alt={altImg} className="categoryCard__img"/>
            <p className="categoryCard__title">{title}</p>
        </button>
    );
};

export default CategoryCard;