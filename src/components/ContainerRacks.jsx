import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import useFetch from "../hooks/useFetch";
import Rack from "./Rack";
import BottleSearch from "./BottleSearch";
import useRacks from "../hooks/useRacks";

const ContainerRacks = ({ userId }) => {
    // Liste de tous les racks depuis API
    const [dataRacks, setDataRacks] = useState([]);
    // Hook personnalisé
    const { listRacks } = useRacks({ dataRacks, userId });

    const { data, loading, error } = useFetch("src/api/racks.json");

    // Recupération de tous les racks de l'api
    useEffect(() => {
        setDataRacks(data);
    }, []);

    return (
        <>
            <div className="container">
                <BottleSearch listFullBottles={listRacks} />
                <h2>Liste des racks</h2>
                <div className="box-racks">
                    <ErrorBoundary
                        key={userId}
                        fallback={<div> Une erreur s'est produite </div>}
                    >
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
                    </ErrorBoundary>
                </div>
            </div>
        </>
    );
};

export default ContainerRacks;
