import { useState } from "react";

const withConnect = (WrappedComponent, usersJson) => {
    const EnhancedComponent = (props) => {
        const [loggedIn, setLoggedIn] = useState(false);
        const [messageError, setMessageError] = useState(false);

        const handleTest = (userLogin, userPassword) => {
            const user = [...props.usersJson].find(
                (user) => user.login === userLogin
            );
            if (user && user.password === Number(userPassword)) {
                setMessageError(false)
                setLoggedIn(true);
            } else {
                setMessageError(true)
            }
        };

        return loggedIn ? (
            <h2>Suite du site</h2>
        ) : (
            <WrappedComponent {...props} handleTest={handleTest} messageError={messageError} />
        );
    };

    return EnhancedComponent;
};

export default withConnect;
