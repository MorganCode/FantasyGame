import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Css Material UI
const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(300 + theme.spacing.unit * 3 * 2)]: {
			width: 300,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		
		alignItems: 'center !important',
		maxWidth: 300,
	},
	cardContainer: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: theme.spacing.unit * 10,
		maxWidth: 300,
	},
	media: {
		height: 140,
	},
	button: {
		width: 100,
		marginBottom: 15,
	},
});

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// Fonction du component
	handlePlay() {
    window.location = '/Game';
  }

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.main}>
				<Card xs={12} sm={12} className={classes.cardContainer}>
					<CardMedia
						className={classes.media}
						image="https://via.placeholder.com/300.png/C/O https://placeholder.com/#How_To_Set_Image_Size"
						title="Image du jeu"
					/>
					<div className={classes.card}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								Fantasy Animals
							</Typography>
							<Typography component="p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</Typography>
						</CardContent>
						<Button variant="contained" color="primary" className={classes.button} onClick={this.handlePlay}>
							Jouer
						</Button>
					</div>
				</Card>
			</div>
		);
	}
}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
