import React, { Component } from 'react';
import Home from './Components/Home';
import Game from './Components/Game';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Game" component={Game} />
				</Switch>
			</div>
		);
	}
}

export default App;
