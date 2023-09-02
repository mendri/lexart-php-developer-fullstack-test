import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, test } from "vitest";
import App from "../App";

describe("Dropdown", () => {
    beforeEach(async () => {
        render(<App />);
        
        const searchButton = screen.getByTestId("search-button-testid");

        await userEvent.click(searchButton);
    });

    test("Testa as funcionalidades do Dropdown de categorias", async () => {
        const categoryDropdown = screen.getByTestId("category-dropdown-testid");
 
        expect(screen.queryByText("Smartphone Moto E13 64gb 4gb Ram Grafite Motorola")).toBeInTheDocument();
        expect(screen.queryByText("Geladeira Smart LG 451l Gc-b659nsm Inverter Prata 127v 110v")).toBeInTheDocument();
        expect(screen.queryByText("Smart TV LG AI ThinQ 43LM631C0SB LED webOS Full HD 43 100V/240V")).toBeInTheDocument();

        const mobileFilter= screen.getByText("Mobile");
        
        await userEvent.selectOptions(categoryDropdown, mobileFilter);

        expect(screen.queryByText("Smartphone Moto E13 64gb 4gb Ram Grafite Motorola")).toBeInTheDocument();
        expect(screen.queryByText("Geladeira Smart LG 451l Gc-b659nsm Inverter Prata 127v 110v")).toBe(null);
        expect(screen.queryByText("Smart TV LG AI ThinQ 43LM631C0SB LED webOS Full HD 43 100V/240V")).toBe(null);

        const tvFilter= screen.getByText("Tv");
        
        await userEvent.selectOptions(categoryDropdown, tvFilter);

        expect(screen.queryByText("Smartphone Moto E13 64gb 4gb Ram Grafite Motorola")).toBe(null);
        expect(screen.queryByText("Geladeira Smart LG 451l Gc-b659nsm Inverter Prata 127v 110v")).toBe(null);
        expect(screen.queryByText("Smart TV LG AI ThinQ 43LM631C0SB LED webOS Full HD 43 100V/240V")).toBeInTheDocument();

        const refrigeratorFilter = screen.getByText("Refrigerator");
        
        await userEvent.selectOptions(categoryDropdown, refrigeratorFilter);

        expect(screen.queryByText("Smartphone Moto E13 64gb 4gb Ram Grafite Motorola")).toBe(null);
        expect(screen.queryByText("Geladeira Smart LG 451l Gc-b659nsm Inverter Prata 127v 110v")).toBeInTheDocument();
        expect(screen.queryByText("Smart TV LG AI ThinQ 43LM631C0SB LED webOS Full HD 43 100V/240V")).toBe(null);

    });

    test("Testa as funcionalidades do Dropdown de mercados", async () => {
        const marketDropdown = screen.getByTestId("market-dropdown-testid");
 
        expect(screen.queryByText("Smartphone Moto E13 64gb 4gb Ram Grafite Motorola")).toBeInTheDocument();
        expect(screen.queryByText("Smartphone Apple iPhone 13 128GB Câmera Dupla")).toBeInTheDocument();

        const mercadoLivreFilter = screen.getByText("Mercado Livre");
        
        await userEvent.selectOptions(marketDropdown, mercadoLivreFilter);

        expect(screen.queryByText("Smartphone Moto E13 64gb 4gb Ram Grafite Motorola")).toBeInTheDocument();
        expect(screen.queryByText("Smartphone Apple iPhone 13 128GB Câmera Dupla")).toBe(null);

        const buscapeFilter = screen.getByText("Buscapé");
        
        await userEvent.selectOptions(marketDropdown, buscapeFilter);

        expect(screen.queryByText("Smartphone Moto E13 64gb 4gb Ram Grafite Motorola")).toBe(null);
        expect(screen.queryByText("Smartphone Apple iPhone 13 128GB Câmera Dupla")).toBeInTheDocument();
    }); 
});