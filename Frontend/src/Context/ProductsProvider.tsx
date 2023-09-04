import { useState } from "react";
import IProduct from "../Interfaces/IProduct";
import ProductsContext from "./ProductsContext";
import WebScrapperInstance from "../Axios/WebScrapperInstance";

type ProductsProviderProps = {
  children: React.ReactNode
}

function ProductsProvider({ children }: ProductsProviderProps) {
    const [products, setProducts] = useState<Array<IProduct>>([]);
    const [marketFilter, setMarketFilter] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleMarketFilter(market: string) {
        setMarketFilter(market);
    }

    async function searchProducts(searchInput: string) {
        setProducts([]);
        
        try {
            setIsLoading(true);
            const { data } = await WebScrapperInstance.get(`/scraper?search=${searchInput}`);
            setIsLoading(false);
            setProducts(data.products);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }

    return (
        <ProductsContext.Provider value={{ products, marketFilter, handleMarketFilter, searchProducts, isLoading }}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;