import "./sass/style.scss";
import { useReducer } from "react";
import reducerUserConnect from "./reducers/reducerUserConnect";
import useFetchUsers from "./hooks/useFetchUsers";
import useFetchRacks from "./hooks/useFetchRacks";
import racksContext from "./context/racksContext";
import Header from "./components/Header";
import Connect from "./components/Connect";
import ContainerRacks from "./components/ContainerRacks";
import TestComponent from "./components/TestComponent";

function App() {
    /**
     * useReducer pour tester la validité du login et mot de passe
     */
    const [state, dispatch] = useReducer(reducerUserConnect, {
        data: { users: [] },
        id: null,
        userLogin: null,
        code: null,
        errorLoginPassword: false,
    });

    /**
     * Hooks personnalisés pour FETCH la liste des users inscris
     * ET la liste des racks via API en attendant une DB
     * Affichage loader le temps du download
     * Affichage message d'erreur si pas de connexion aux API
     */

    const { listUsers, loadingUsers, errorUsers } = useFetchUsers("src/api/users.json");
    const { dataRacks, loadingRacks, errorRacks } =
        useFetchRacks("src/api/racks.json");

    state.data = listUsers;

    /**
     * PROVIDER PERSONNALISE
     */

    function RackProvider(children) {
        const stateId = state.id;
        const values = [dataRacks, stateId];
        return <racksContext.Provider value={values} {...children} />;
    }

    return (
        <>
            <Header connect={state.id} />
            {loadingUsers || loadingRacks ? (
                <>
                    <div className="loading-msg">
                        Chargement des données en cours
                    </div>
                </>
            ) : errorUsers || errorRacks ? (
                <>
                    <div className="error-loading-msg">
                        Impossible de se connecter à la base de données
                    </div>
                </>
            ) : state.id ? (
                <RackProvider>
                    <ContainerRacks />
                </RackProvider>
            ) : (
                <Connect
                    dispatch={dispatch}
                    messageError={state.errorLoginPassword}
                />
            )}
            {/* <TestComponent /> */}
        </>
    );
}

export default App;
