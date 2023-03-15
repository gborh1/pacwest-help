import logo from './logo.svg';
import pacwest from './PacificWest_Favicon_32x32.svg';
import './App.css';
import { Freshchat } from 'reactjs-freshchat';
import 'reactjs-freshchat/dist/index.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={pacwest} className="App-logo" alt="logo" />
				<p>Use the widget in the lower right hand corner for help!</p>
				<div>
					<span>Brought to you by </span>
					<a
						className="App-link"
						href="https://www.pacificwestinc.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						PacificWest
					</a>
				</div>
			</header>
			<Freshchat token={'3ad06d40-b4d2-4761-a344-5519343d7edb'} />
		</div>
	);
}

export default App;
