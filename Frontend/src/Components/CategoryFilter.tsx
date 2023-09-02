import { useContext } from "react";
import ProductsContext from "../Context/ProductsContext";

function CategoryFilter() {
    const { handleCategoryFilter } = useContext(ProductsContext);

    return (
        <select onChange={(e) => handleCategoryFilter(e.target.value)} data-testid="category-dropdown-testid" defaultValue="All">
            <option value="">All Categories</option>
            <option value="mobile">Mobile</option>
            <option value="tv">Tv</option>
            <option value="refrigerator">Refrigerator</option>
        </select>
    );
}

export default CategoryFilter;