import { useState } from "react";
const Connect = ({ dispatch, messageError }) => {
    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleLoginChange = (e) => {
        setUserLogin(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setUserPassword(Number(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "verified_ident",
            payload: { userLogin: userLogin, code: userPassword },
        });
    };

    const handleSubmitDemo = () => {
        dispatch({
            type: "verified_ident",
            payload: { userLogin: "demo", code: 123 },
        });
    };

    return (
        <>
            <div className="box-connect">
                <form className="form-login" onSubmit={handleSubmit}>
                    <label htmlFor="loginUser">Login</label>
                    <input
                        type="text"
                        id="loginUser"
                        onChange={handleLoginChange}
                        required
                        placeholder="Entrez votre login"
                    />

                    <label htmlFor="password">Code a 3 chiffres</label>
                    <input
                        type="number"
                        id="password"
                        data-testid="password"
                        onChange={handlePasswordChange}
                        placeholder="***"
                    />

                    <button type="submit">VALIDER</button>
                    {messageError === true ? (
                        <p className="error-form">Login ou code incorrect</p>
                    ) : (
                        <p className="no-compte">
                            Pas de compte ? <span>Inscrivez-vous</span>
                        </p>
                    )}
                </form>
            </div>
            <div className="demonstration" onClick={handleSubmitDemo}>
                <button className="demonstration-btn">Version de démonstration</button>
            </div>
        </>
    );
};

export default Connect;
