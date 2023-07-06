/* eslint-disable react/prop-types */
const ModalBottle = ({ children, closeModal, activeModal }) => {
    if (!activeModal) return null;

    return (
        <div className="rack-modal" onClick={() => closeModal()}>
            {children}
        </div>
    );
};

export default ModalBottle;
