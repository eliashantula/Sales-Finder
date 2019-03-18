import React, { Component } from "react";
import { connect } from "react-redux";
import { getFruits, sortPrices } from "./actions";
import Fruits from "./fruits";




class FruitItems extends Component {


	componentDidMount() {
		this.props.getFruits();
	}

	render() {
		const { fruits, sortPrice} = this.props;
		return <Fruits items={fruits} onClick={sortPrice} name={"fruits"} />;
	}
}

const mapStateToProps = state => {

	return {
		fruits: state.fruits
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getFruits: () => {
			dispatch(getFruits());

		},
		sortPrice: (e) =>{

			e.preventDefault()
			let name = e.currentTarget.id
			let data= {name: name}
		
			dispatch(sortPrices(data))
		}

	};
};



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FruitItems);
