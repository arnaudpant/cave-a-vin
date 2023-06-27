import Rack from "./Rack";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
const ContainerRacks = ({ userId }) => {
    const [listRacks, setListRacks] = useState([]);
    const [dataRacks, setDataRacks] = useState([]);

    useEffect(() => {
        const fetchRacks = async () => {
            const url = "src/api/racks.json";

            try {
                const response = await fetch(url);
                const racksJson = await response.json();
                setDataRacks(racksJson.racks);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRacks();
    }, []);

    useEffect(() => {
        const tempRacks = [];
        [...dataRacks].map((rack) => {
            rack.id === userId && tempRacks.push(rack);
        });
        setListRacks(tempRacks);

        return () => {
            setListRacks([]);
        };
    }, [dataRacks, userId]);

    return (
        <>
            <Header signIn={true} />
            <div className="container">
                <h3>Liste des racks</h3>
                <div className="box-racks">
                    <ErrorBoundary
                        key={userId}
                        fallback={<div> Une erreur s est produite </div>}
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
