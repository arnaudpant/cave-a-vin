import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalConnect from "../src/components/ModalConnect";

describe("Tests de ModalConnect", () => {
    test("Affichage modal connexion", () => {
        render(<ModalConnect />)
    })

    test("Fermeture du modal au clic sur layout", () => {
        const mocksetShowModal = vi.fn()
        render(<ModalConnect setShowModal={mocksetShowModal} />)
        const layoutElt = screen.getByTestId("layout")
        fireEvent.click(layoutElt)
        expect(mocksetShowModal).toHaveBeenCalledWith(false)
    })

    test("Fermeture du modal au clic sur btn X", () => {
        const mocksetShowModal = vi.fn()
        render(<ModalConnect setShowModal={mocksetShowModal} />)
        const btnModal = screen.getByRole("button")
        fireEvent.click(btnModal)
        expect(mocksetShowModal).toHaveBeenCalledWith(false)
    })
})
