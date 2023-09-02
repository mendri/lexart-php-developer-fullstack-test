import CategoryFilter from "./Components/CategoryFilter";
import MarketFilter from "./Components/MarketFilter";
import ProductsContainer from "./Components/ProductsContainer";
import SearchForm from "./Components/SearchForm";
import ProductsProvider from "./Context/ProductsProvider";

function App() {

    return (
        <ProductsProvider>
            <div className="m-6">
                <header className="flex items-start w-full">
                    <div className="flex justify-around items-center w-2/5">
                        <CategoryFilter />
                        <MarketFilter />
                    </div>
                    <div className="flex items-center w-3/5">
                        <SearchForm />
                    </div>
                </header>
                <main className="mt-40">
                    <ProductsContainer />
                </main>
            </div>
        </ProductsProvider>
    );
}

export default App;
