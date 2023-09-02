import { useContext } from "react";
import ProductsContext from "../Context/ProductsContext";

function MarketFilter() {
    const { handleMarketFilter } = useContext(ProductsContext);

    return (
        <select onChange={(e) => handleMarketFilter(e.target.value)} data-testid="market-dropdown-testid" defaultValue="All">
            <option value="">All Markets</option>
            <option value="mercado_livre">Mercado Livre</option>
            <option value="buscape">Buscapé</option>
        </select>
    );
}

export default MarketFilter;