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


    function reducer(userInfos, action) {
        if (action.type === 'verified_ident') {
            //const test = 
            [...data.users].filter(user => {
                if (user.login === action.payload.userLogin && user.password === action.payload.code) {
                    setLoggedIn(true)
                    return setUserConnect({ id: user.id, userLogin: user.login, code: user.password })
                }
                if (user.login !== action.payload.userLogin || user.password !== action.payload.code) {
                    console.log('not ok')
                    setMessageError(true)
                }

            })
        }
    }

    const [userInfos, dispatch] = useReducer(reducer, { id: null, userLogin: null, code: null });

    return (
        <>
            <Header />
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
