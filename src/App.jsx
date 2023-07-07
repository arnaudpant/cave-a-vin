import "./sass/style.scss"
import { useState, useReducer } from "react";
import Header from "./components/Header";
import useFetch from "./components/useFetch";
import ContainerRacks from "./components/ContainerRacks";
import Connect from "./components/Connect"


function App() {

    const { data, loading, error } = useFetch("src/api/users.json");

    // const [userId, setUserId] = useState(null);
    // const [messageError, setMessageError] = useState(false);

    //const handleConnectUser = (e) => {



    // const userLogged = [...data.users].find(
    //     (user) => user.login === userLogin
    // );
    // if (userLogged && userLogged.password === Number(userPassword)) {
    //     setMessageError(false);
    //     setUserId(userLogged.id);
    //     setLoggedIn(true);
    // } else {
    //     setMessageError(true);
    // }
    //};

    function reducer(userId, action) {
        switch (action.type) {
            case 'verified_ident': {
                const userLogged = [...data.users].find(
                    (user) => user.login === action.payload.userLogin)
                console.log("user", userLogged)

                if (userLogged.password === action.payload.userPassword) {
                    return { userId.id: userLogged.id, loggedIn: true, messageError: false }
                } else {
                    return { messageError: false }
                }
            }

        }
    }

    const [userId, dispatch] = useReducer(reducer, { id: null, loggedIn: false, messageError: false })

    return loading ? (
        <>
            <Header />
            <div className="loading-msg">Chargement des utilisateurs</div>
        </>
    ) : error ? (
        <>
            <Header />
            <div className="error-loading-msg">
                Impossible de se connecter à la base de données
            </div>
        </>
    ) : loggedIn ? (
        <ContainerRacks userId={userId} />
    ) : (
        <Connect
            dispatch={dispatch}
            messageError={messageError} />
    );
}

export default App;
