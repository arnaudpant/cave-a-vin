const Connect = ({ setUserConnect, usersList }) => {
    return (
        <div className="box-connect">
            <form className="form-login">
                <label htmlFor="login">Login</label>
                <input type="text" id="code" required />
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
