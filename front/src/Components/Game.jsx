import React, { Component } from 'react';
import Phaser from 'phaser';
import LevelHome from '../GameEngine/LevelHome'

class Game extends Component {
	constructor(props) {
		super(props);
		this.phaserContainer = React.createRef();
  }
  
	// Configuration de la game

	componentDidMount() {
		let config = {
			type: Phaser.AUTO,
			width: 800,
			height: 600,
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
		return (
			<div>
				<div ref={this.phaserContainer} />
			</div>
		);
	}
}

export default Game;
