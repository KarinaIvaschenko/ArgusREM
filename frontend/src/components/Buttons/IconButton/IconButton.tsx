import type {FC} from "react";

interface IIconButtonProps {
    onClick: () => void;
    img: string;
    altImg: string;
}

const IconButton: FC<IIconButtonProps> = ({onClick, img, altImg}) => {
    return (
        <button onClick={onClick}>
            <img src={img} alt={altImg}/>
        </button>
    );
};

export default IconButton;