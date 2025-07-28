import type {FC} from "react";
import "./iconButton.scss";

interface IIconButtonProps {
    onClick: () => void;
    img: string;
    altImg: string;
    isActive: boolean;
}

const IconButton: FC<IIconButtonProps> = ({onClick, img, altImg, isActive}) => {
    return (
        <button onClick={onClick}>
            <img src={img} alt={altImg} className={isActive ? "iconButton__img--active" : "iconButton__img"}/>
        </button>
    );
};

export default IconButton;