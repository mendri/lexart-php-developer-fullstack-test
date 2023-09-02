import { createContext } from "react";
import IProduct from "../Interfaces/IProduct";

type ProductsContextType = {

  products: Array<IProduct>;
  categoryFilter: string;
  handleCategoryFilter: (category: string) => void
  marketFilter: string;
  handleMarketFilter: (market: string) => void
  searchProducts: (searchInput: string) => void
};

const ProductsContext = createContext({} as ProductsContextType);

export default ProductsContext;