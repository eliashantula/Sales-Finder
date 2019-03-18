import React, { Component } from "react";

import { connect } from "react-redux";
import { getDairy } from "./actions";
import DairyItems from "./dairies";

class DairyContainer extends Component {
   

    componentDidMount() {
        this.props.getDairy();
    }

    render() {
        const { dairy } = this.props;

        return <DairyItems dairy={dairy} />;
    }
}

const mapStateToProps = state => {
    return {
        dairy: state.dairy
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getDairy: () => {
            console.log("here")
            dispatch(getDairy());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DairyContainer);