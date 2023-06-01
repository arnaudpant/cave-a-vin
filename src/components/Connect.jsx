import { useState } from "react";
import PropTypes from "prop-types";

const Connect = ({ usersJson, setUserConnect }) => {
    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState();
    const [loggedIn, setLoggedIn] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const testUser = [...usersJson].find(
            (login) => login.login === userLogin
        );

        if (testUser && testUser.password === userPassword) {
            setLoggedIn(true);
            setUserConnect(true)
        } else {
            setLoggedIn(false);
        }
    };

    const handleLoginChange = (e) => {
        setUserLogin(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setUserPassword(Number(e.target.value));
    };

    return (
        <div className="box-connect">
            <form className="form-login" onSubmit={handleSubmit}>
                <label htmlFor="loginUser" style={{color: loggedIn === false ? "red" : ""}}>Login</label>
                <input
                    type="text"
                    id="loginUser"
                    onChange={handleLoginChange}
                    style={{backgroundColor: loggedIn === false ? "#e55039" : ""}}
                    required
                />

                <label htmlFor="password" id="code" style={{color: loggedIn === false ? "red" : ""}}>
                    Code à 3 chiffres
                </label>
                <input
                    type="number"
                    id="password"
                    onChange={handlePasswordChange}
                    style={{backgroundColor: loggedIn === false ? "#e55039" : ""}}
                />

                <button type="submit">VALIDER</button>
                {loggedIn === false ? (<p className="error-form">
                    Login ou code incorrect
                </p>) : (<p className="no-compte">
                    Pas de compte ? <span>inscrivez-vous</span>
                </p>)}
            </form>
        </div>
    );
};

Connect.propTypes = {
    usersJson: PropTypes.arrayOf(PropTypes.object).isRequired,
    setUserConnect: PropTypes.func.isRequired,
};

export default Connect;
