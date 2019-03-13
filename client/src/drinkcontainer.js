import React, { Component } from "react";
import { connect } from "react-redux";
import { getDrinks } from "./actions";
import Drinks from "./drinks";

class DrinkContainer extends Component {
	componentDidMount() {
		this.props.getDrinks();
	}

	render() {
		const { drinks } = this.props;
	
		return <Drinks drinks={drinks} />;
	}
}

const mapStateToProps = state => {
	return {
		drinks: state.drinks
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getDrinks: () => {
			dispatch(getDrinks());
		}
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DrinkContainer);
