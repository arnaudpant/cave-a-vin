// import PropTypes from "prop-types";
import { useState } from "react";

const Connect = ({ handleTest }) => {
    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState();

    const handleLoginChange = (e) => {
        setUserLogin(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setUserPassword(Number(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleTest(userLogin, userPassword)
    };

    return (
        <div className="box-connect">
            <form className="form-login" onSubmit={handleSubmit}>
                <label htmlFor="loginUser">Login</label>
                <input
                    type="text"
                    id="loginUser"
                    onChange={handleLoginChange}
                    required
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
            </form>
        </div>
    );
};


export default Connect;
