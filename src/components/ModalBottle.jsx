const ModalBottle = ({ children, closeModal }) => {
    return (
        <div className="layout-modal" onClick={() => closeModal()}>
            {children}
        </div>
    );
};

export default ModalBottle;
