import React, { Component } from "react";
import { connect } from "react-redux";
import { getFruits } from "./actions";
import Fruits from "./fruits";




class FruitItems extends Component {
	componentDidMount() {
		this.props.getFruits();
	}

	render() {
		const { fruits} = this.props;
		return <Fruits items={fruits} />;
	}
}

const mapStateToProps = state => {
	console.log(state.fruits);
	return {
		fruits: state.fruits
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getFruits: () => {
			console.log("here")
			dispatch(getFruits());
		}
	};
};



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FruitItems);
