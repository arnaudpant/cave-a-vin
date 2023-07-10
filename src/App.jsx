import "./sass/style.scss"
import { useState, useReducer } from "react";
import Header from "./components/Header";
import useFetch from "./components/useFetch";
import ContainerRacks from "./components/ContainerRacks";
import Connect from "./components/Connect"


function App() {

    const { data, loading, error } = useFetch("src/api/users.json");
    const [messageError, setMessageError] = useState(false);


    function reducer(state, action) {
        if (action.type === 'verified_ident') {
            const userGood = [...data.users].filter(user => {
                return user.login === action.payload.userLogin && user.password === action.payload.code
            })

            if (userGood.length > 0) {
                setMessageError(false)
                return {
                    id: userGood[0].id,
                    userLogin: userGood[0].userLogin,
                    code: userGood[0].password
                }
            }
            else {
                setMessageError(true)
            }
        }

        return state
    }

    const [state, dispatch] = useReducer(reducer, { id: null, userLogin: null, code: null });

    console.log('state', state);
    return (
        <>
            <Header connect={state.id} />
            {
                loading ? (
                    <>
                        <div className="loading-msg">Chargement des utilisateurs</div>
                    </>
                ) : error ? (
                    <>
                        <div className="error-loading-msg">
                            Impossible de se connecter à la base de données
                        </div>
                    </>
                ) : state.id ? (
                    <ContainerRacks userId={state.id} />
                ) : (
                    <Connect
                        dispatch={dispatch}
                        messageError={messageError}
                    />
                )
            }
        </>
    )
}

export default App;
