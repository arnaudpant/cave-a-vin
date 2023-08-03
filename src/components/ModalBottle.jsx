const ModalBottle = ({ children, closeModal }) => {
    //if (!activeModal) return null;

    return (
        <div className="layout-modal" onClick={() => closeModal()}>
            {children}
        </div>
    );
};

export default ModalBottle;
