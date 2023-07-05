import Rack from './Rack';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Header from './Header';
import BottleSearch from './BottleSearch';
import useRacks from './useRacks';

// eslint-disable-next-line react/prop-types
const ContainerRacks = ({ userId }) => {
	// Liste de tous les racks depuis API
	const [dataRacks, setDataRacks] = useState([]);
	// Hook personnalisé

	// si hooks personnalise pourquoi l'utiliser dans le composant et pas dans le composant qui l'utilise
	const { listRacks } = useRacks({ dataRacks, userId });

	// Recupération de tous les racks de l'api
	useEffect(() => {
		const fetchRacks = async () => {
			const url = 'src/api/racks.json';

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

	return (
		<>
			<Header signIn={true} />
			<div className='container'>
				<BottleSearch listFullBottles={listRacks} />
				<h2>Liste des racks</h2>
				<div className='box-racks'>
					<ErrorBoundary
						key={userId}
						// eslint-disable-next-line react/no-unescaped-entities
						fallback={<div> Une erreur s'est produite </div>}>
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
