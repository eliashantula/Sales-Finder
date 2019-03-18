import React, { Component } from "react";
import { connect } from "react-redux";
import { getMeats } from "./actions";
import MeatItems from "./meats";

class MeatContainer extends Component {
  componentDidMount() {
    this.props.getMeats();
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


const mapDispatchToProps = dispatch => {
  console.log(getMeats)
  return {
    getMeats: () => {
      dispatch(getMeats());
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeatContainer);
