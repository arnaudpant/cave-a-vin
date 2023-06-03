import { useState } from "react";

const withConnect = (WrappedComponent, usersJson) => {

    

    const EnhancedComponent = (props) => {
        //console.log(props.usersJson)
        const [loggedIn, setLoggedIn] = useState(null);

        const userTestInfo = (userLogin, userPassword) => {

            const testUser = [props.usersJson].find(
                (login) => login.login === userLogin
            );

            if (testUser && testUser.password === userPassword) {
                setLoggedIn(true);
                //setUserConnect(true);
            } else {
                setLoggedIn(false);
            }
        };

        return (
            <WrappedComponent
                {...props}
                userInfo={userInfo}
            />
        );
    };

    return EnhancedComponent;
};

export default withConnect;
