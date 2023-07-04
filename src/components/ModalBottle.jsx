/* eslint-disable react/prop-types */
const ModalBottle = ({ children, setActiveModal }) => {
    return (
        <div className="rack-modal" onClick={() => setActiveModal(false)}>
            {children}
        </div>
    );
};

export default ModalBottle;
