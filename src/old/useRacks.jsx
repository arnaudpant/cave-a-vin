import { useEffect, useState } from "react";

const useRacks = ({ dataRacks, userId }) => {
    const [listRacks, setListRacks] = useState([]);

    useEffect(() => {
        const tempRacks = [...dataRacks].filter((rack) => rack.id === userId);
        setListRacks(tempRacks);

        return () => {
            setListRacks([]);
        };
    }, [dataRacks, userId]);
    return { listRacks };
};

export default useRacks;
