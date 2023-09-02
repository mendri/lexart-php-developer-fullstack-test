import { useState } from "react";
import productsMock from "../Tests/productsMock";
import IProduct from "../Interfaces/IProduct";
import ProductsContext from "./ProductsContext";
import WebScrapperInstance from "../Axios/WebScrapperInstance";

type ProductsProviderProps = {
  children: React.ReactNode
}

function ProductsProvider({ children }: ProductsProviderProps) {
    const [products, setProducts] = useState<Array<IProduct>>([]);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [marketFilter, setMarketFilter] = useState("");

    function handleCategoryFilter(category: string) {
        setCategoryFilter(category);
    }

    function handleMarketFilter(market: string) {
        setMarketFilter(market);
    }

    async function searchProducts(searchInput: string) {
        try {
            const { data } = await WebScrapperInstance.get(`/?search=${searchInput}`);
            setProducts(data.products);
        } catch (e) {
            setProducts(productsMock);
        }
    }

    return (
        <ProductsContext.Provider value={{ products, categoryFilter, handleCategoryFilter, marketFilter, handleMarketFilter, searchProducts }}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;