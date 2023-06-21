/* eslint-disable react/prop-types */
const ModalBottle = ({ setActiveModal, modalBottle }) => {
    return (
        <div className="rack-modal" onClick={() => setActiveModal(false)}>
            <p></p>
            <h2>Vin {modalBottle.type}</h2>
            <h3>{modalBottle.aoc}</h3>
            <div className="rack-modal__infos">
                <p>{modalBottle.domaine}</p>
                <p>{modalBottle.millesime}</p>
                <p>Date achat: {modalBottle.achat}</p>
            </div>
            <button>Editer</button>
            <button>Supprimer</button>
        </div>
    );
};

export default ModalBottle;
