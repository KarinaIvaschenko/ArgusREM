import Logo from "../Logo/Logo.tsx";
import Search from "../Search/Search.tsx";

const Header = () => {
    return (
        <header>
            <Logo onClick={() => {}}/>
            <Search value={""} onChange={() => {}}/>
        </header>
    );
};

export default Header;