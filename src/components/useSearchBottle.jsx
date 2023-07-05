import { useEffect, useState } from 'react';

// le hooks n'est pas réutilisable car il est lié à un composant et a des props
// il est préférable de le mettre dans le composant qui l'utilise
// la logique est à revoir et le useEffect est inutile

const useSearchBottle = ({ listFullBottles, searchBottle }) => {
	const [showBottlesSeach, setShowBottlesSearch] = useState([]);

	useEffect(() => {
		let idBottles = [];
		searchBottle !== '' &&
			listFullBottles.forEach((rack) => {
				rack.bottles.map((bottle) => {
					bottle.aoc === searchBottle
						? idBottles.push(bottle.id)
						: null;
				});
				setShowBottlesSearch(idBottles);
			});
		return () => setShowBottlesSearch([]);
	}, [searchBottle]);

	return { showBottlesSeach };
};

export default useSearchBottle;
