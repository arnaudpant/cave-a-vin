import React from "react";

const ModalConnect = ({ setShowModal }) => {
    return (
        <div
            className="layout-modal-inscription-fail"
            data-testid="layout"
            onClick={() => setShowModal(false)}
        >
            <div
                className="modal-inscription-fail"
                data-testid="modal"
                onClick={(e) => e.stopPropagation()}
            >
                <h2>See you soon</h2>
                <p>Les inscriptions ne sont pas encore ouvertes</p>
                <button onClick={() => setShowModal(false)}>X</button>
            </div>
        </div>
    );
};

export default ModalConnect;
