import React, { Component } from "react";
import { connect } from "react-redux";
import { getMeats, sortPrices } from "./actions";
import MeatItems from "./meats";

class MeatContainer extends Component {
  componentDidMount() {
    this.props.getMeats();
  }

  render() {
    const { getMeats, meats, onSubmit, sortPrice } = this.props;
    return <MeatItems items={meats} onSubmit={onSubmit} onClick={sortPrice} name={"meats"} />;
  }
}

const mapStateToProps = state => {
  return {
    meats: state.meats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMeats: () => {
      dispatch(getMeats());
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
)(MeatContainer);
