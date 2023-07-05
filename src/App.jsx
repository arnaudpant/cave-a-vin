import './sass/style.scss';
import Connect from './components/Connect';
import withConnect from './components/withConnect';

function App() {
	const EnhancedComponent = withConnect(Connect);

	// Fragment inutile ici, mais nécessaire si on veut retourner plusieurs éléments

	return (
		<>
			<EnhancedComponent />
		</>
	);
}

export default App;
