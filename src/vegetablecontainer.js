import React, { Component } from "react";
import {connect} from "react-redux";
import { getVegetables } from "./actions";
import groceryItem from './reducers'
import VegetableItems from './vegetables'

class VegetableContainer extends Component {
	constructor(props) {
		super(props);
	}

  componentDidMount(){
  this.props.getVegetables()




  }


	render() {
		const { getVegetables, vegetables} = this.props;
		return <VegetableItems items={vegetables} />;
	}
}


const mapStateToProps = state => {
  return {
    vegetables: state.vegetables
  };
};

//allowing container to access action calls
const mapDispatchToProps = dispatch => {
  return {
  	getVegetables: ()=>{
  
  		dispatch(getVegetables())
  	}


  }
 
};

//connecting to the store
export default connect(mapStateToProps, mapDispatchToProps)(VegetableContainer);