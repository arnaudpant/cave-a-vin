import { useState } from "react";
import useFetch from "./useFetch";
import ContainerRacks from "../components/ContainerRacks";
import Header from "../components/Header";

// meilleure utilisation des hooks pour la gestion des states par objet et dans un deuxieme temps useReducer
// l'erreur ne remonte pas dans le state donc aucun affichage possible
// la data ne doit pas etre immutable dans ce cas on cree un nouveau tableau avec les données du fichier JSON
// pour un login il est préferable d'utiliser un contexte pour la gestion des states
/*
 **
 */

const withConnect = (WrappedComponent) => {
    const EnhancedComponent = (props) => {
        const { data, loading, error } = useFetch("src/api/users.json");
        
        const [loggedIn, setLoggedIn] = useState(false);
        const [messageError, setMessageError] = useState(false);
        const [userId, setUserId] = useState(null);

        const handleConnectUser = (userLogin, userPassword) => {
            const userLogged = [...data.users].find(
                (user) => user.login === userLogin
            );
            if (userLogged && userLogged.password === Number(userPassword)) {
                setMessageError(false);
                setUserId(userLogged.id);
                setLoggedIn(true);
            } else {
                setMessageError(true);
            }
        };

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
            <WrappedComponent
                {...props}
                handleConnectUser={handleConnectUser}
                messageError={messageError}
            />
        );
    };

    return EnhancedComponent;
};

export default withConnect;
