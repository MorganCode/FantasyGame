import React, { Component } from 'react';
import Phaser from 'phaser';
import LevelHome from '../GameEngine/LevelHome';
import '../Css/Canvas.css';

class Game extends Component {
	constructor(props) {
		super(props);
		this.phaserContainer = React.createRef();
	}

  
	// Configuration de la game

	componentDidMount() {

		let config = {
			type: Phaser.AUTO,
			width: 1000,
			height: 500,
			physics: {
				default: 'arcade',
				arcade: {
					debug: false,
					gravity: { y: 250 },
				},
			},
			backgroundColor: '#808080',
			scene: new LevelHome({}),

			parent: this.phaserContainer,
		};
		new Phaser.Game(config);

	}

	render() {
		return <div ref={this.phaserContainer} />;
	}
}

export default Game;
