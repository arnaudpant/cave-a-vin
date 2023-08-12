import "./sass/style.scss";
import { useReducer } from "react";
import reducerUserConnect from "./reducers/reducerUserConnect";
import useFetchUsers from "./hooks/useFetchUsers";
import useFetchRacks from "./hooks/useFetchRacks";
import racksContext from "./context/racksContext";
import Header from "./components/Header";
import Connect from "./components/Connect";
import ContainerRacks from "./components/ContainerRacks";

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

    const { listUsers, loading, error } = useFetchUsers("src/api/users.json");
    const { dataRacks, loadingRacks, errorRacks } = useFetchRacks("src/api/racks.json");
    
    state.data = listUsers;

    return (
        <>
            <Header connect={state.id} />
            {loading || loadingRacks ? (
                <>
                    <div className="loading-msg">
                        Chargement des données en cours
                    </div>
                </>
            ) : error || errorRacks ? (
                <>
                    <div className="error-loading-msg">
                        Impossible de se connecter à la base de données
                    </div>
                </>
            ) : state.id  ? (
                <racksContext.Provider value={dataRacks}>
                    <ContainerRacks userId={state.id} />
                </racksContext.Provider>
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
