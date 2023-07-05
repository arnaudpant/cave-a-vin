import { useEffect, useState } from 'react';

// idem que l'autre et ne pas utiliser de donner immuable
// le hooks n'est pas réutilisable car il est lié à un composant et a des props
// il est préférable de le mettre dans le composant qui l'utilise
// la logique est à revoir et le useEffect est inutile
// vider le useEffect est inutile dans ce cas

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
