import { useState } from "react";
const Connect = ({ dispatch, messageError }) => {
    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");

    console.log("connect", messageError );

    const handleLoginChange = (e) => {
        setUserLogin(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setUserPassword(Number(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'verified_ident', payload: { userLogin: userLogin, code: userPassword } })
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
                        placeholder="Login de test: p et code 1"
                    />

                    <label htmlFor="password" id="code">
                        Code à 3 chiffres
                    </label>
                    <input
                        type="number"
                        id="password"
                        onChange={handlePasswordChange}
                    />

                    <button type="submit">VALIDER</button>
                    {messageError === true ? (<p className="error-form">Login ou code incorrect</p>) : (<p className="no-compte">Pas de compte ? <span>Inscrivez-vous</span></p>)}
                </form>
            </div>
        </>
    );
};


export default Connect;
