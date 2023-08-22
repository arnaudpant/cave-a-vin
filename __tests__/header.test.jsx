import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../src/components/Header";

test("Affiche le titre H1", () => {
    render(<Header />);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent("RACKS A PINARD");
});

test("User not connect => Affiche inscription", () => {
    render(<Header connect={false} />);
    const inscription = screen.getByText("Inscription");
    expect(inscription).toBeInTheDocument();
});

test("User connect => N'affiche pas inscription", () => {
    render(<Header connect={true} />);
    const inscription = screen.queryByText("Inscription");
    expect(inscription).not.toBeInTheDocument();
});

// test("Click sur inscription => modal", () => {
//     render(<Header connect={false} />);
//     const btnInscription = screen.getByText("Inscription");
//     fireEvent.click(btnInscription)
// });
