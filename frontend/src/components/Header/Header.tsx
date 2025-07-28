import Logo from "../Logo/Logo.tsx";
import Search from "../Search/Search.tsx";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import "./header.scss";
import IconButton from "../Buttons/IconButton/IconButton.tsx";
import {useState} from "react";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

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

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header className="header">
            <div className="header__container">
                <Logo onClick={() => navigate("/")}/>
                <div
                    className={`navigation header__navigation${showMenu ? " header__navigation--active" : ""}`}
                >
                    <Search value={""} onChange={() => {}}/>
                    <div className="navigation__container">
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
                </div>
                <div className="header__actions">
                    <div className="header__icons">
                        {iconButtons.map(({path, alt, img}) => {
                            const isActive = location.pathname === path;

                            return (
                                <IconButton
                                    key={`${path}-${alt}`}
                                    onClick={() => navigate(path)}
                                    altImg={alt}
                                    img={img}
                                    isActive={isActive}
                                />
                            );
                        })}
                    </div>
                    <button className="header__burger" onClick={() => handleShowMenu()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
