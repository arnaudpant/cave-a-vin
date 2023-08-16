import { useEffect, useState } from "react";


function useFetchUsers(url) {
    const [listUsers, setListUsers] = useState(null);
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [errorUsers, setErrorUsers] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoadingUsers(true);
                const response = await fetch(url);
                const jsonData = await response.json();
                setListUsers(jsonData);
            } catch (error) {
                setLoading(Usersfalse);
                setErrorUsers(error);
            } finally {
                setLoadingUsers(false);
            }
        };

        fetchData();
    }, [url]);

    return { listUsers, loadingUsers, errorUsers };
}

export default useFetchUsers
;
