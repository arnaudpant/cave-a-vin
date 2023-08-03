import { useReducer } from "react";
import reducerUserConnect from "./reducers/reducerUserConnect";
import useFetch from "./hooks/useFetch";
import useFetchRacks from "./hooks/useFetchRacks";
import "./sass/style.scss";
import Header from "./components/Header";
import ContainerRacks from "./components/ContainerRacks";
import Connect from "./components/Connect";

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
     * ET la liste des racks via API
     * Affichage loader le temps du download
     * Affichage message d'erreur si pas de connexion aux API
     */

    const { data, loading, error } = useFetch("src/api/users.json");
    const { dataRacks, loadingRacks, errorRacks } = useFetchRacks("src/api/racks.json");
    state.data = data;

    return (
        <>
            <Header connect={state.id} />
            {loading ? (
                <>
                    <div className="loading-msg">
                        Chargement des utilisateurs
                    </div>
                </>
            ) : error || errorRacks ? (
                <>
                    <div className="error-loading-msg">
                        Impossible de se connecter à la base de données
                    </div>
                </>
            ) : state.id  ? (
                    <ContainerRacks userId={state.id} data={dataRacks} loading={loadingRacks} error={errorRacks} />
            ) : (
                <Connect
                    dispatch={dispatch}
                    messageError={state.errorLoginPassword}
                />
            )}
        </>
    );
}

export default App;
