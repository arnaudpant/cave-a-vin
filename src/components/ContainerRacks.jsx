import Rack from "./Rack";
import { racks } from "../api/racks";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ContainerRacks = ({ userId }) => {
    const [listRacks, setListRacks] = useState([]);

    useEffect( () => {
        const fetchRacks = async () => {
            const url = "src/api/racks.json";

            try {
                const response = await fetch(url)
                const racksJson = await response.json()
                //console.log(racksJson.racks);
                setListRacks(racksJson.racks)
            } catch (error) {
                console.log(error)
            }

        }
        fetchRacks()
    }, [])

    useEffect(() => {
        const tempRacks = [...listRacks];
        racks.map((rack) => {
            rack.id === userId && tempRacks.push(rack);
        });
        setListRacks(tempRacks);
    }, []);


    return (
        <div className="container">
            <h3>Liste des racks</h3>
            <div className="box-racks">
                {listRacks &&
                    listRacks.map((rack, index) => (
                        <Rack bottles={rack.bottles} columns={rack.columns} rows={rack.rows} key={index} />
                    ))}
            </div>
        </div>
    );
};

export default ContainerRacks;
