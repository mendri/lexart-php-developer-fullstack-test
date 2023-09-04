import { useState } from "react";
import IProduct from "../Interfaces/IProduct";

function Product(props: {p: IProduct}) {
    const { p } = props;
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
  
    return (
        <div className="bg-white m-4 flex justify-center items-center w-3/4 shadow-xl">
            <div className="flex justify-center w-2/12 h-40">
                <img className="h-full" src={p.img_url} />
            </div>
            <div className="flex flex-col justify-evenly w-8/12 ml-4">
                <h2 className="m-2 text-2xl font-extrabold">{p.title}</h2>
                {p.description.length > 20 ? (
                    <p className={showMore ? "m-2 text-sm font-medium" : "m-2 text-sm max-h-20 overflow-hidden font-medium"}>
                        {p.description == "" ? "Não possível encontrar a descrição do produto" : p.description}
                    </p>
                ) : (
                    <p className="m-2 text-sm font-medium">{p.description}</p>
                )}

                {p.description.length > 20 && (
                    !showMore ? (
                        <button onClick={toggleShowMore} className="m-2 mt-0 text-sm text-blue-900 underline">Mostrar mais</button>
                    ) : (
                        <button onClick={toggleShowMore} className="m-2 mt-0 text-sm text-blue-900 underline">Mostrar menos</button>
                    )
                )}

                <div className="flex justify-between w-full">
                    <p className="font-extrabold text-2xl m-2">{p.price}</p>
                    <div className="flex w-52 justify-center">
                        <p className="font-extrabold text-lg m-2 mr-16">{p.market == "mercado_livre" ? "Mercado Livre" : "Buscapé"}</p>
                    </div>
                </div>
            </div>
            <div className="flex w-2/12 justify-center items-center">
                <a className="w-3/4 flex justify-center" target="_blank" href={p.market_page_link} rel="noreferrer">
                    <button className="w-full rounded-lg shadow-xl p-2 font-extrabold text-white bg-blue-900">Ir a web</button>
                </a>
            </div>
        </div>
    );
}

export default Product;