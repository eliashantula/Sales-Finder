import React, { Component } from "react";
import {connect} from "react-redux";
import { getMeats } from "./actions";
import groceryItem from './reducers'
import MeatItems from './meats'

class MeatContainer extends Component {
	constructor(props) {
		super(props);
	}

  componentDidMount(){
  this.props.getMeats()




  }


	render() {
		const { getMeats, meats, onSubmit } = this.props;
		return <MeatItems items={meats} onSubmit={onSubmit} />;
	}
}


const mapStateToProps = state => {
  return {
    meats: state.meats
  };
};

//allowing container to access action calls
const mapDispatchToProps = dispatch => {
  return {
  	getMeats: ()=>{
  
  		dispatch(getMeats())
  	}


  }
 
};

//connecting to the store
export default connect(mapStateToProps, mapDispatchToProps)(MeatContainer);