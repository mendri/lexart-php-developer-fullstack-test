import { useContext, useState } from "react";
import ProductsContext from "../Context/ProductsContext";

function SearchForm() {
    const { searchProducts } = useContext(ProductsContext);
    const [searchInput, setSearchInput] = useState("");

    return (
        <form data-testid="search-form-testid">
            <input data-testid="search-input-testid" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="border" />
            <button data-testid="search-button-testid" onClick={() => searchProducts(searchInput)} type="button">Search</button>
        </form>
    );
}

export default SearchForm;