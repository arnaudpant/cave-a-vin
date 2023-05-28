
const Connect = () => {
    return (
        <div className="box-connect">
            <form className="form-login">
                <label htmlFor="login">Login</label>
                <input type="text" id="code" />
                <label htmlFor="password" id="code">Code à 3 chiffres</label>
                <input type="number" name="passcode" id="code" />
                <button type="submit">VALIDER</button>
                <p>Pas de compte ? inscrivez-vous</p>
            </form>
        </div>
    );
};

export default Connect;