import { useEffect, useReducer, useRef, useState } from "react";
import reducerFavoris from "../reducers/reducerFavoris";
import ModalBottle from "./ModalBottle";
import FavListBottles from "./FavListBottles";

const Rack = ({ name, bottles, columns, rows }) => {
    const [totalNbrBouteilles, setTotalNbrBouteilles] = useState(0);
    const [activeModal, setActiveModal] = useState(false);
    const [pageY, setPageY] = useState();
    const [modalBottle, setModalBottle] = useState(null);

    /**
     * AFFICHAGE NOMBRE DE BOUTEILLES TOTAL
     */

    useEffect(() => {
        setTotalNbrBouteilles(
            bottles.filter((bottle) => bottle.id !== "").length
        );
    }, []);

    /**
     * ACTIVATION DU MODAL
     */
    const openModal = () => setActiveModal(true);
    const closeModal = () => setActiveModal(false);

    const handleModal = (bottle) => {
        setModalBottle(bottle);
        openModal();
    };

    console.log(pageY);

    // AJOUT DANS FAVORIS DES BOUTEILLES

    const [state, dispatch] = useReducer(reducerFavoris, []);

    function handleFavoris(bottle) {
        dispatch({ type: "ADD_FAVORIS", favBottle: bottle });
    }

    return (
        <>
            <h4>
                Rack {name} : {totalNbrBouteilles} bouteilles{" "}
            </h4>
            <div
                className="rack"
                style={{
                    gridTemplateColumns: `repeat(${columns}, 100px)`,
                    gridTemplateRows: `repeat(${rows}, 100px)`,
                }}
            >
                {activeModal && (
                    <ModalBottle
                        closeModal={closeModal}
                    >
                        <div className="rack-modal" style={{ top: `${pageY}px` }}>
                            <h2>Vin {modalBottle.type}</h2>
                            <h3>{modalBottle.aoc}</h3>
                            <div className="rack-modal__infos">
                                <p>{modalBottle.domaine}</p>
                                <p>{modalBottle.millesime}</p>
                                <p>Date achat: {modalBottle.achat}</p>
                            </div>
                            <button
                                className="rack-modal__btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleFavoris(modalBottle);
                                }}
                            >
                                Favoris
                            </button>
                        </div>
                    </ModalBottle>
                )}

                {bottles.map((bottle, index) => (
                    <div
                        className="bottle"
                        key={index}
                        onClick={(e) => {
                            setPageY(e.pageY);
                            handleModal(bottle);
                        }}
                    >
                        <div
                            className="bottle-color"
                            style={{
                                backgroundColor:
                                    bottle.type === "rouge"
                                        ? "#914159"
                                        : bottle.type === "blanc"
                                        ? "#FFFDD0"
                                        : bottle.type === "rose"
                                        ? "#F8C3CD"
                                        : bottle.type === "petillant"
                                        ? "#FDEE00"
                                        : null,
                            }}
                        ></div>
                        <p>{bottle.aoc}</p>
                        <p className="millesime">{bottle.millesime}</p>
                    </div>
                ))}
            </div>
            {state.length > 0 && (
                <FavListBottles state={state} bottles={bottles} />
            )}
        </>
    );
};

export default Rack;
