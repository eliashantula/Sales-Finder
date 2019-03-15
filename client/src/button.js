import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { connect } from "react-redux";
import serialize from "form-serialize";
import { addShopping } from "./actions";
import { createChecks } from "./actions";
import plus from './plus1.png'
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
			<Form onSubmit={this.props.checkSubmits} className="testing">
				<FormGroup className="shoppingButton">
					<Input
						className="quantity"
						type="number"
						name="amount"
						placeholder={0}
						style={{
							backgroundColor: "white",
							color: "black",
							border: "1px solid white",
							lineHeight: "9px",
							fontSize: "13px",
							marginLeft: "0px",
							marginRight: "0px",
							
						}}
						min="0"
						max="999"
					/>
					<Input
						type="hidden"
						name="company"
						defaultValue={this.props.item.company}
					/>
					<Input
						type="hidden"
						name="price"
						defaultValue={this.props.item.price}
					/>
					<Input
						type="hidden"
						name="item"
						defaultValue={this.props.item.type}
					/>
					<Input
						type="hidden"
						name="quantity"
						defaultValue={this.props.item.quantity}
					/>
					<Button
						className="imageTest"
						type="submit"
						style={{ fontSize: "12px"	}}
					>
						<img
							src={plus}
							className="listAdd"
							alt="list"
							style={{
								maxWidth: "18px",
								backgroundColor: "transparent"
							}}
						/></Button>
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
			const form = e.currentTarget;
			console.log(form)
			const data = serialize(form, { hash: true });

			dispatch(addShopping(data));
			dispatch(createChecks(data.item));
			form.reset();
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShopButton);
