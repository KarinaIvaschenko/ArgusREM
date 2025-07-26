import type {FC} from "react";

interface ILogoProps {
    onClick: () => void;
}

const Logo: FC<ILogoProps> = ({onClick}) => {
    return (
        <button onClick={onClick}>
            <img src={"/images/main/logo.png"} alt="logo" width={97} height={50}/>
        </button>
    );
};

export default Logo;