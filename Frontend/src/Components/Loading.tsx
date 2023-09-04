import { useContext } from "react";
import ProductsContext from "../Context/ProductsContext";

function Loading() {
    const { isLoading } = useContext(ProductsContext);

    return (
        isLoading && (
            <p className="p-4 bg-gradient-to-tr from-gray-500 to-gray-800 rounded-full text-5xl text-white font-extrabold">Carregando...</p>
        )
    );
}

export default Loading;