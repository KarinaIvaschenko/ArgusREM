import "./search.scss";
import type {CSSProperties, FC} from "react";

interface ISearchProps {
    onChange: (value: string) => void;
    value: string;
    searchContainerStyle?: CSSProperties;
}

const Search: FC<ISearchProps> = ({onChange, value, searchContainerStyle}) => {
    return (
        <div className="search" style={searchContainerStyle}>
            <img className="search__img" src={"/images/main/search.png"} alt="search" width={16} height={16}/>
            <input
                className="search__input"
                id="search-input"
                name="search"
                type="text"
                placeholder="Search"
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    );
};

export default Search;