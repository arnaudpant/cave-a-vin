import { useState, useEffect } from "react";
import ContainerRacks from "./ContainerRacks";

const withConnect = (WrappedComponent) => {
    const EnhancedComponent = (props) => {
        const [data, setData] = useState([]);
        const [loggedIn, setLoggedIn] = useState(false);
        const [messageError, setMessageError] = useState(false);
        const [userId, setUserId] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                const url = "src/api/users.json";

                try {
                    const response = await fetch(url);
                    const jsonData = await response.json();
                    setData(jsonData.users);
                } catch (error) {
                    console.error(
                        "Erreur lors de la récupération du fichier JSON:",
                        error
                    );
                }
            };

            fetchData();
        }, []);

        const handleConnectUser = (userLogin, userPassword) => {
            // eslint-disable-next-line react/prop-types
            const user = [...data].find((user) => user.login === userLogin);

            if (user && user.password === Number(userPassword)) {
                // eslint-disable-next-line react/prop-types
                setMessageError(false);
                setUserId(user.id);
                setLoggedIn(true);
            } else {
                setMessageError(true);
            }
        };

        return loggedIn ? (
            // eslint-disable-next-line react/prop-types
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
