
const Connect = ({ usersList }) => {
   

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
                    required
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

export default Connect;
