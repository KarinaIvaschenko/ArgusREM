import Logo from "../Logo/Logo.tsx";
import Search from "../Search/Search.tsx";
import {NavLink, useNavigate} from "react-router-dom";
import "./header.scss";
import IconButton from "../Buttons/IconButton/IconButton.tsx";

const Header = () => {
    const navigate = useNavigate();

    const navLinks = [
        {to: "/", label: "Home"},
        {to: "/aboutUs", label: "About"},
        {to: "/contacts", label: "Contact Us"},
        {to: "/blog", label: "Blog"},
    ];

    const iconButtons = [
        {path: "/favorites", alt: "Favorite", img: "/images/main/favorite.png"},
        {path: "/cart", alt: "Cart", img: "/images/main/cart.png"},
        {path: "/authorization", alt: "User", img: "/images/main/user.png"},
    ];

    const getNavLinkClass = ({isActive}: { isActive: boolean }) =>
        isActive ? "link active" : "link";

    return (
        <header className="header">
            <div className="header__container">
                <Logo onClick={() => navigate("/")}/>
                <Search value={""} onChange={() => {}}/>
                <div className="header__navigation">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={getNavLinkClass}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
                <div className="header__icons">
                    {iconButtons.map(({path, alt, img}) => (
                        <IconButton key={`${path} + ${alt}`} onClick={() => navigate(path)} altImg={alt}
                                    img={img}></IconButton>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
