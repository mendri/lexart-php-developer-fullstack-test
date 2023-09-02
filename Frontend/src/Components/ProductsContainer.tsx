import { useContext } from "react";
import ProductsContext from "../Context/ProductsContext";

function ProductsContainer() {
    const { products, categoryFilter, marketFilter } = useContext(ProductsContext);

    return (
        <div data-testid="products-container-testid">
            {
                products.filter((p) => categoryFilter === "" ? true : p.category === categoryFilter)
                    .filter((p) => marketFilter === "" ? true : p.market === marketFilter)    
                    .map((p, index) => {
                        return (
                            <div key={index}>
                                <p>{p.title}</p>
                            </div>
                        );
                    })
            }
        </div>
    );
}

export default ProductsContainer;