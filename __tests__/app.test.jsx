import { afterAll, beforeAll, afterEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "../src/App";
import reducerUserConnect from "../src/reducers/reducerUserConnect";
import useFetchUsers from "../src/hooks/useFetchUsers";

describe("Test de App.jsx", () => {
    // Mocked API response
    const server = setupServer(
        // Définis le comportement pour l'appel à useFetchUsers
        rest.get("src/api/users.json", (req, res, ctx) => {
            return res(ctx.json({ users: [{ id: 1, login: "user", password: 456 }] }));
        }),
        // Définis le comportement pour l'appel à useFetchRacks
        rest.get("src/api/racks.json", (req, res, ctx) => {
            return res(ctx.json([{ id: 1, name: "Rack 1" }]));
        })
    );

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    test("renders loading message during data fetch", async () => {
        render(<App />);
        expect(
            screen.getByText(/Chargement des données en cours/i)
        ).toBeInTheDocument();
    });

    // test("renders error message when unable to connect to API", async () => {
    //     server.use(
    //         rest.get("src/api/users.json", (req, res, ctx) => {
    //             return res(ctx.status(500));
    //         }),
    //         rest.get("src/api/racks.json", (req, res, ctx) => {
    //             return res(ctx.status(500));
    //         })
    //     );

    //     render(<App />);
    //     expect(
    //         screen.getByText(/Impossible de se connecter à la base de données/i)
    //     ).toBeInTheDocument();
    // });

    // test("renders RackProvider and ContainerRacks if user is connected", async () => {
    //     render(<App />, { initialState: { state: { id: 123 } } });
    //     await waitFor(() => {
    //         expect(screen.getByText(/ContainerRacks/i)).toBeInTheDocument();
    //     });
    // });

    // test("renders Connect component if user is not connected", async () => {
    //     render(<App />);
    //     await waitFor(() => {
    //         expect(screen.getByTestId("connect-form")).toBeInTheDocument();
    //     });
    //     fireEvent.click(screen.getByText(/Se connecter/i));
    //     // Write assertions for login form interaction and error message display
    // });
});
