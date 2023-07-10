import "./sass/style.scss"
import { useState, useReducer } from "react";
import Header from "./components/Header";
import useFetch from "./components/useFetch";
import ContainerRacks from "./components/ContainerRacks";
import Connect from "./components/Connect"


function App() {

    const { data, loading, error } = useFetch("src/api/users.json");

    const [loggedIn, setLoggedIn] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [userConnect, setUserConnect] = useState(null)


    function reducer(state, action) {
        if (action.type === 'verified_ident') {
            const userGood = [...data.users].filter(user => {
                return user.login === action.payload.userLogin && user.password === action.payload.code
            })

            if (userGood.length > 0) {
                setMessageError(false)
                setLoggedIn(true)
                return setUserConnect(userGood[0])
            }
            else {
                setMessageError(true)
            }
        }

        return state
    }

    const [state, dispatch] = useReducer(reducer, { id: null, userLogin: null, code: null });

    return (
        <>
            <Header connect={userConnect} />
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
                ) : loggedIn ? (
                    <ContainerRacks userId={userConnect.id} />
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
