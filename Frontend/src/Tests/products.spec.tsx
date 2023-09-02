import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Products Container", () => {
    beforeEach(async () => {
        render(<App />);
        
        const searchButton = screen.getByTestId("search-button-testid");

        await userEvent.click(searchButton);
    });


    test("Testa se todos os produtos são corretamente renderizados", () => {
        render(<App />);

        const smartphone = screen.getByText("Smartphone Moto E13 64gb 4gb Ram Grafite Motorola");
        const tv = screen.getByText("Geladeira Smart LG 451l Gc-b659nsm Inverter Prata 127v 110v");
        const refrigerator = screen.getByText("Smart TV LG AI ThinQ 43LM631C0SB LED webOS Full HD 43 100V/240V");

        expect(smartphone).toBeInTheDocument();
        expect(tv).toBeInTheDocument();
        expect(refrigerator).toBeInTheDocument();
    });
});