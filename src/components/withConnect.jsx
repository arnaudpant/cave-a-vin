import { useState } from "react";

const withConnect = (WrappedComponent, usersJson) => {
    const EnhancedComponent = (props) => {
        //console.log(props.usersJson)
        const [loggedIn, setLoggedIn] = useState(false);

        const handleTest = (userLogin, userPassword) => {
            const user = [...props.usersJson].find((user) => user.login === userLogin)
            if (user && user.password === Number(userPassword)) {
                setLoggedIn(true)
            }
        };

        return loggedIn ? <h2>Ttestr</h2> : <WrappedComponent {...props} handleTest={handleTest} /> ;
    };

    return EnhancedComponent;
};

export default withConnect;
