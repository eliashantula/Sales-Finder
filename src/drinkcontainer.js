import React, { Component } from "react";
import { connect } from "react-redux";
import groceryItem from "./reducers";
import { getDrinks } from "./actions";
import Drinks from "./drinks";

class DrinkContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getDrinks();
	}

	render() {
		const { drinks } = this.props;
		console.log(drinks)
		return <Drinks drinks={drinks} />;
	}
}

const mapStateToProps = state => {
	return {
		drinks: state.drinks,
		
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getDrinks: () => {
			dispatch(getDrinks());
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(DrinkContainer);
