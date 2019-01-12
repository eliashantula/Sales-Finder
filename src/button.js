import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import groceryItem from "./reducers";
import CartContainer from "./cartcontainer.js";
import { connect } from "react-redux";
import serialize from "form-serialize";
import {addShopping} from './actions'

class ShopButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: "",
			item: ""
		};
	}

	render() {
		
		return (
			<Form onSubmit={this.props.checkSubmits}>
				<FormGroup
					style={{
						display: "flex",
						justifyContent: "center",
						width: "95%"
					}}
				>
					<Input
						type="number"
						name="amount"
						placeholder="0"
						style={{ width: "15%" }}

					/>
					<Input
					type="hidden"
					name="item"
					defaultValue={this.props.item.item} />
					<Button
						type="submit"
						color="primary"
						id={this.props.item.item}
						size="sm"
					>
						Add To List
					</Button>
					<Button color="info" size="sm">
						Suggest Recipe
					</Button>
				</FormGroup>
			</Form>
		);
	}
}

const mapStateToProps = state => {
	return {
		list: state.list
	};
};
const mapDispatchToProps = dispatch => {
	return {
		checkSubmits: e => {
			e.preventDefault();
			const form = e.target;
			
			const data = serialize(form, { hash: true });
			console.log(data);
			dispatch(addShopping(data))
			form.reset();
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopButton);
