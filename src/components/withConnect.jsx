import { useState } from "react";
import ContainerRacks from "./ContainerRacks";

const withConnect = (WrappedComponent) => {
    const EnhancedComponent = (props) => {
        const [loggedIn, setLoggedIn] = useState(false);
        const [messageError, setMessageError] = useState(false);
        const [racksUser, setRacksUser] = useState(null)

        const handleTest = (userLogin, userPassword) => {
            // eslint-disable-next-line react/prop-types
            const user = [...props.usersJson].find(
                (user) => user.login === userLogin
            );
            if (user && user.password === Number(userPassword)) {
                setRacksUser(user.racks)
                setMessageError(false)
                setLoggedIn(true);
            } else {
                setMessageError(true)
            }
        };

        return loggedIn ? (
            <ContainerRacks racksUser={racksUser} />
        ) : (
            <WrappedComponent {...props} handleTest={handleTest} messageError={messageError} />
        );
    };

    return EnhancedComponent;
};


export default withConnect;
