import { useContext, useEffect, useState } from "react";
import Rack from "./Rack";
import BottleSearch from "./BottleSearch";
import racksContext from "../context/racksContext";

const ContainerRacks = ({ userId }) => {
    const data = useContext(racksContext);
    const [dataRacks, setDataRacks] = useState([]);
    const [listRacks, setListRacks] = useState([]);

    /**
     * Recupération des racks via props
     * Filtre pour affichage uniquement des racks du user connecté
     */
    useEffect(() => {
        setDataRacks(data.racks);
    }, []);

    useEffect(() => {
        const tempRacks = [...dataRacks].filter((rack) => rack.id === userId);
        setListRacks(tempRacks);
    }, [dataRacks, userId]);

    return (
        <>
            <div className="container">
                <BottleSearch listFullBottles={listRacks} />
                <h2>Liste des racks</h2>
                <div className="box-racks">
                    {listRacks &&
                        listRacks.map((rack, index) => (
                            <Rack
                                key={index}
                                name={rack.name}
                                bottles={rack.bottles}
                                columns={rack.columns}
                                rows={rack.rows}
                            />
                        ))}
                </div>
            </div>
        </>
    );
};

export default ContainerRacks;
