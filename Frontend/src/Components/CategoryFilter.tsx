import { useContext } from "react";
import ProductsContext from "../Context/ProductsContext";

function CategoryFilter() {
    const { handleCategoryFilter } = useContext(ProductsContext);

    return (
        <select data-testid="category-dropdown-testid" className="w-2/6 text-white font-extrabold bg-blue-950 p-2 rounded-md shadow-md" onChange={(e) => handleCategoryFilter(e.target.value)}>
            <option value="">All Categories</option>
            <option value="mobile">Mobile</option>
            <option value="tv">Tv</option>
            <option value="refrigerator">Refrigerator</option>
        </select>
    );
}

export default CategoryFilter;