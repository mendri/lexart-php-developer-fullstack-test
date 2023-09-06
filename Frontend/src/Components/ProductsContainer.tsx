import { useContext } from "react";
import ProductsContext from "../Context/ProductsContext";
import Product from "./Product";

function ProductsContainer() {
    const { products, marketFilter } = useContext(ProductsContext);

    return (
        <div className="w-full" data-testid="products-container-testid">
            {
                products.filter((p) => marketFilter === "" ? true : p.market === marketFilter)
                    .map((p, index) => {
                        return (
                            <div className="flex justify-center" key={index}>
                                <Product p={p} />
                            </div>
                        );
                    })
            }
        </div>
    );
}

export default ProductsContainer;