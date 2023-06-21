import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Rack = ({ name, bottles, columns, rows }) => {
    const [activeModal, setActiveModal] = useState(false);
    const [modalBottle, setmodalBottle] = useState();

    const handleModal = (bottle) => {
        setActiveModal(true);
        setmodalBottle(bottle);
    };

    return (
        <>
            <h4>Rack {name}</h4>
            <div
                className="rack"
                style={{
                    gridTemplateColumns: `repeat(${columns}, 100px)`,
                    gridTemplateRows: `repeat(${rows}, 80px)`,
                }}
            >
                {activeModal && (
                    <div
                        className="rack-modal"
                        // eslint-disable-next-line react/no-unknown-property
                        modalBottle={modalBottle}
                        onClick={() => setActiveModal(false)}
                    >
                        <h2>Vin {modalBottle.type}</h2>
                        <h3>{modalBottle.aoc}</h3>
                        <div className="rack-modal__infos">
                            <p>{modalBottle.domaine}</p>
                            <p>{modalBottle.millesime}</p>
                            <p>Date achat: {modalBottle.achat}</p>
                        </div>
                    </div>
                )}

                {
                    // eslint-disable-next-line react/prop-types
                    bottles.map((bottle, index) => (
                        <div
                            className="bottle"
                            key={index}
                            onClick={() => handleModal(bottle)}
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
                            <p>{bottle.millesime}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Rack;
