import React, { Component } from "react";
import { connect } from "react-redux";
import { getVegetables } from "./actions";
import VegetableItems from "./vegetables";

class VegetableContainer extends Component {
  componentDidMount() {
    this.props.getVegetables();
  }

  render() {
    const { vegetables } = this.props;
    return <VegetableItems items={vegetables} />;
  }
}

const mapStateToProps = state => {
  return {
    vegetables: state.vegetables
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getVegetables: () => {
      dispatch(getVegetables());
    }
  };
};

//connecting to the store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VegetableContainer);
