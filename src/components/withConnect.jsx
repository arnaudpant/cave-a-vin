import { useState } from "react";
import ContainerRacks from "./ContainerRacks";

const withConnect = (WrappedComponent) => {
    const EnhancedComponent = (props) => {
        const [loggedIn, setLoggedIn] = useState(false);
        const [messageError, setMessageError] = useState(false);
        const [userId, setUserId] = useState(null);

        const handleTest = (userLogin, userPassword) => {
            // eslint-disable-next-line react/prop-types
            const user = [...props.usersJson].find(
                (user) => user.login === userLogin
            );
            console.log(user);
            if (user && user.password === Number(userPassword)) {
                // eslint-disable-next-line react/prop-types
                setMessageError(false);
                setUserId(user.id)
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
                handleTest={handleTest}
                messageError={messageError}
            />
        );
    };

    return EnhancedComponent;
};

export default withConnect;
