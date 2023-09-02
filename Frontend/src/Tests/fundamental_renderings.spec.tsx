import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../App";

describe("Componentes Fundamentais", () => {
    test("Testa se os componentes fundamentais da aplicação estão sendo renderizados", () => {
        render(<App />);
        
        expect(screen.getByTestId("category-dropdown-testid")).toBeInTheDocument();
        expect(screen.getByTestId("market-dropdown-testid")).toBeInTheDocument();
        expect(screen.getByTestId("search-form-testid")).toBeInTheDocument();
        expect(screen.getByTestId("products-container-testid")).toBeInTheDocument();
    });
});