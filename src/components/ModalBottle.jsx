/* eslint-disable react/prop-types */
const ModalBottle = ({ setActiveModal, modalBottle, handleFavoris }) => {
    return (
        <div className="rack-modal" onClick={() => setActiveModal(false)}>
            <h2>Vin {modalBottle.type}</h2>
            <h3>{modalBottle.aoc}</h3>
            <div className="rack-modal__infos">
                <p>{modalBottle.domaine}</p>
                <p>{modalBottle.millesime}</p>
                <p>Date achat: {modalBottle.achat}</p>
            </div>
            <button className="rack-modal__btn" onClick={(e)=> e.stopPropagation()} >Editer</button>
            <button className="rack-modal__btn" onClick={(e)=> e.stopPropagation()} >Supprimer</button>
            <button className="rack-modal__btn" onClick={(e)=>handleFavoris(e, modalBottle)}>Favoris</button>
        </div>
    );
};

export default ModalBottle;
