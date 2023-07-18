import "./sass/style.scss";
import { useReducer } from "react";
import Header from "./components/Header";
import useFetch from "./components/useFetch";
import ContainerRacks from "./components/ContainerRacks";
import Connect from "./components/Connect";
import reducerUserConnect from "./components/reducerUserConnect";

function App() {
    const [state, dispatch] = useReducer(reducerUserConnect, {
        data: { users: [] },
        id: null,
        userLogin: null,
        code: null,
        errorLoginPassword: false,
    });

    const { data, loading, error } = useFetch("src/api/users.json");
    state.data = data;

    return (
        <>
            <Header connect={state.id} />
            {loading ? (
                <div className="loading-msg">Chargement des utilisateurs</div>
            ) : error ? (
                <div className="error-loading-msg">
                    Impossible de se connecter à la base de données
                </div>
            ) : state.id ? (
                <ContainerRacks userId={state.id} />
            ) : (
                <Connect
                    dispatch={dispatch}
                    errorLoginPassword={state.errorLoginPassword}
                />
            )}
        </>
    );
}

export default App;
