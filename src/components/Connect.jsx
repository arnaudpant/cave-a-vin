import { useState } from "react";
import PropTypes from "prop-types";

const Connect = ({ usersJson, setUserConnect }) => {
    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState();
    const [loggedIn, setLoggedIn] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const testUser = [...usersJson].find(
            (login) => login.login === userLogin
        );

        if (testUser && testUser.password === userPassword) {
            console.log("Connected");
            setLoggedIn(true);
            setUserConnect(true)
        } else {
            console.log("Not connected");
            setLoggedIn(false);
        }
    };

    console.log(loggedIn);

    const handleLoginChange = (e) => {
        setUserLogin(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setUserPassword(Number(e.target.value));
    };

    return (
        <div className="box-connect">
            <form className="form-login" onSubmit={handleSubmit}>
                <label htmlFor="login">Login</label>
                <input
                    type="text"
                    id="code"
                    required
                    name="loginUser"
                    onChange={handleLoginChange}
                />

                <label htmlFor="password" id="code">
                    Code à 3 chiffres
                </label>
                <input
                    type="number"
                    name="passcode"
                    id="code"
                    onChange={handlePasswordChange}
                />

                <button type="submit">VALIDER</button>
                <p className="no-compte">
                    Pas de compte ? <span>inscrivez-vous</span>
                </p>
            </form>
        </div>
    );
};

Connect.propTypes = {
    usersJson: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Connect;
