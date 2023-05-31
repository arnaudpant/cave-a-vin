import { useState } from "react";

const Connect = ({ setUserConnect, usersList }) => {
    const [userLogin, setUserLogin] = useState();
    const [userPassword, setUserPassword] = useState();

    const [errLogin, setErrLogin] = useState(false);
    const [errPassword, setErrPassword] = useState(false);

    
    const handleLoginChange = (e) => {
        e.preventDefault();
        setUserLogin(e.target.value);
    };

    
    const handlePasswordChange = (e) => {
        e.preventDefault();
        setUserPassword(e.target.value);
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();

        const user = usersList.find((user) => user.name === userLogin);

        if (user === undefined) {
            setErrLogin(true);
            console.log("erreur login");
        } else {
            setErrLogin(false);
        }

        if (user.password === Number(userPassword)) {
            setErrPassword(false);
        } else {
            setErrPassword(true);
        }

        connectUser();
    };

    const connectUser = () => {
        if (errLogin === false && errPassword === false) {
            console.log("ok connect");
            setUserConnect(true)
        } else {
            console.log("erreur connection");
        }
    };

    //console.log(usersList)

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
                    style={{ backgroundColor: errLogin && "red" }}
                />
                {errLogin && <p className="error-form">Erreur de login</p>}
                <label htmlFor="password" id="code">
                    Code à 3 chiffres
                </label>
                <input
                    type="password"
                    name="passcode"
                    id="code"
                    minLength="3"
                    maxLength="3"
                    inputMode="numeric"
                    required
                    onChange={handlePasswordChange}
                />
                {errPassword && (
                    <p className="error-form">Mot de passe invalide</p>
                )}
                <button type="submit">VALIDER</button>
                <p className="no-compte">
                    Pas de compte ? <span>inscrivez-vous</span>
                </p>
            </form>
        </div>
    );
};

export default Connect;
