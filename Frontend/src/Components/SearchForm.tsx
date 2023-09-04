import { useContext, useState } from "react";
import ProductsContext from "../Context/ProductsContext";

function SearchForm() {
    const { searchProducts } = useContext(ProductsContext);
    const [searchInput, setSearchInput] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        searchProducts(searchInput);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="w-full flex justify-evenly" data-testid="search-form-testid">
            <input className="border-2 border-black border-opacity-60 p-1 shadow-lg rounded-md w-9/12" data-testid="search-input-testid" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <button className="border-2 border-black border-opacity-40 shadow-lg rounded-md text-white font-extrabold w-2/12 p-1 bg-indigo-800" data-testid="search-button-testid" onClick={() => searchProducts(searchInput)} type="button">Search</button>
        </form>
    );
}

export default SearchForm;