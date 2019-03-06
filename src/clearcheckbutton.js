import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { clearAllChecks } from "./actions";

const ClearChecks = ({ clearChecks }) => {
	return (
		<Button
			type="submit"
			color="primary"
			style={{ fontSize: "10px" }}
			onClick={clearChecks}
		>
			Clear Selected
		</Button>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		clearChecks: () => {
			dispatch(clearAllChecks());
		}
	};
};

export default connect(
	null,
	mapDispatchToProps
)(ClearChecks);
