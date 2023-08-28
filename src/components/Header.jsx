const Header = ({ connect, setShowModal }) => {
    return (
        <header>
            <h1>RACKS A PINARD</h1>
            {!connect && (
                <div
                    className="btn-inscription"
                    onClick={() => setShowModal(true)}
                    role="button"
                >
                    Inscription
                </div>
            )}
        </header>
    );
};

export default Header;

//TODO: Disconnect
