import { useEffect, useState } from "react";


function useFetchUsers(url) {
    const [listUsers, setListUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const jsonData = await response.json();
                setListUsers(jsonData);
            } catch (error) {
                setLoading(false);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { listUsers, loading, error };
}

export default useFetchUsers
;
