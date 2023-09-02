import CategoryFilter from "./Components/CategoryFilter";
import MarketFilter from "./Components/MarketFilter";
import ProductsContainer from "./Components/ProductsContainer";
import SearchForm from "./Components/SearchForm";
import ProductsProvider from "./Context/ProductsProvider";

function App() {

    return (
        <ProductsProvider>
            <header>
                <CategoryFilter />
                <MarketFilter />
                <SearchForm />
            </header>
            <main>
                <ProductsContainer />
            </main>
        </ProductsProvider>
    );
}

export default App;
