import { useState } from "react";

const useSearchBottle = ({searchBottle}) => {

    const [showBottlesSeach, setShowBottlesSearch] = useState(1)

    
    console.log('useSearch', searchBottle)

    return {showBottlesSeach}

};

export default useSearchBottle;