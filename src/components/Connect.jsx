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
        console.log(user);
        if (user === undefined) {
            setErrLogin(true);
            console.log("erreur login")
        }
        else if (user && user.password == userPassword) {
            setErrPassword(true)
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
                    style={{backgroundColor: errLogin && "red" }}
                />
                {errLogin && <div className="error-login">Erreur de login</div>}
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
                <button type="submit">VALIDER</button>
                <p>
                    Pas de compte ? <span>inscrivez-vous</span>
                </p>
            </form>
        </div>
    );
};

export default Connect;
