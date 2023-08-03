import { useEffect, useState } from "react";


function useFetchRacks(url) {
    const [dataRacks, setDataRacks] = useState(null);
    const [loadingRacks, setLoadingRacks] = useState(false);
    const [errorRacks, setErrorRacks] = useState(null);

    useEffect(() => {
        const fetchDataRacks = async () => {
            try {
                setLoadingRacks(true);
                const response = await fetch(url);
                const jsonData = await response.json();
                setDataRacks(jsonData);
            } catch (error) {
                setLoadingRacks(false);
                setErrorRacks(error);
            } finally {
                setLoadingRacks(false);
            }
        };

        fetchDataRacks();
    }, [url]);

    return { dataRacks, loadingRacks, errorRacks };
}

export default useFetchRacks;
