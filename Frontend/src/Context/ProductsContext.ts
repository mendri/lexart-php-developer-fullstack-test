import { createContext } from "react";
import IProduct from "../Interfaces/IProduct";

type ProductsContextType = {

  products: Array<IProduct>;
  marketFilter: string;
  handleMarketFilter: (market: string) => void;
  searchProducts: (searchInput: string) => void;
  isLoading: boolean;
};

const ProductsContext = createContext({} as ProductsContextType);

export default ProductsContext;