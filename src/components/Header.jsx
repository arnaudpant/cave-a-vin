import { useState } from "react";
import { createPortal } from "react-dom";
import ModalConnect from "./ModalConnect";

const Header = ({ connect }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <header>
            <h1>RACKS A PINARD</h1>
            {!connect && 
                <div 
                    className="btn-inscription"
                    onClick={() => setShowModal(true)}
                    >Inscription</div>}
            {showModal && createPortal(<ModalConnect setShowModal={setShowModal} />, document.body)}
        </header>
    );
};

export default Header;

//TODO: Disconnect
