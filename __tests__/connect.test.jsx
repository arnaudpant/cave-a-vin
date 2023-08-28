import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Connect from "../src/components/Connect";

describe("Tests for the Connect component", () => {
    test("render du component Connect", () => {
        render(<Connect />);
    });

    test("Doit mettre a jour le input Login", () => {
        render(<Connect />);
        const inputLogin = screen.getByLabelText("Login");
        fireEvent.change(inputLogin, { target: { value: "loginOfUser" } });
        expect(inputLogin.value).toBe("loginOfUser");
    });

    test("Doit mettre a jour le input Password", () => {
        render(<Connect />);
        const inputPassword = screen.getByTestId("password");
        fireEvent.change(inputPassword, { target: { value: "123" } });
        expect(inputPassword.value).toBe("123");
    });

    test("Doit dispatch les bonnes data du form", () => {
        const mockDispatch = vi.fn();
        render(<Connect dispatch={mockDispatch} />);
        const inputLogin = screen.getByLabelText("Login");
        const inputPassword = screen.getByTestId("password");
        const btnSubmit = screen.getByText(/VALIDER/i);
        fireEvent.change(inputLogin, { target: { value: "loginOfUser" } });
        fireEvent.change(inputPassword, { target: { value: 123 } });
        fireEvent.click(btnSubmit);
        expect(mockDispatch).toHaveBeenCalledWith({
            type: "verified_ident",
            payload: { userLogin: "loginOfUser", code: 123 },
        });
    });

    test("Affiche message erreur au submit si error", () => {
        render(<Connect messageError={true} />);
        const msgError = screen.getByText(/Login ou code incorrect/i);
        const btnSubmit = screen.getByText(/VALIDER/i);
        fireEvent.click(btnSubmit);
        expect(msgError).toBeInTheDocument();
    });

    test("Affiche Pas de compte si pas de error", () => {
        render(<Connect messageError={false} />);
        const msgInscription = screen.getByText(/Inscrivez-vous/i);
        expect(msgInscription).toBeInTheDocument();
    });

    test("Affiche modal d'inscription", () => {
        const mockModalInscription = vi.fn();
        render(<Connect setShowModal={mockModalInscription} />);
        const btnInscription = screen.getByText(/Pas de compte ?/i);
        fireEvent.click(btnInscription);
        expect(mockModalInscription).toHaveBeenCalledWith(true)
    });

    test("Activation version de demonstration", () => {
        const mockSubmitDemo = vi.fn();
        render(<Connect dispatch={mockSubmitDemo} />)
        const btnDemo = screen.getByText(/Version de démonstration/i)
        fireEvent.click(btnDemo)
        expect(mockSubmitDemo).toHaveBeenCalledWith(
            {
                type: "verified_ident",
                payload: { userLogin: "demo", code: 123 },
            }
        )
    })
});
