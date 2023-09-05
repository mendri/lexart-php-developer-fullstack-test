import { useContext } from "react";
import ProductsContext from "../Context/ProductsContext";

function CategoryFilter() {
    const { searchProducts } = useContext(ProductsContext);

    return (
        <select onChange={(e) => searchProducts(e.target.value)} data-testid="category-dropdown-testid" className="w-5/12 text-white font-extrabold bg-blue-950 p-2 rounded-md shadow-md">
            <option value="">Escolha uma categoria:</option>
            <option value="celular">Mobile</option>
            <option value="smart tv">Tv</option>
            <option value="geladeira">Refrigerator</option>
        </select>
    );
}

export default CategoryFilter;