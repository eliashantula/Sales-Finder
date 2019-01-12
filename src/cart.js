import React, { Component } from "react";
import cart from "./shopping.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ItemAmount = ({amount}) => {

return (

<div className="number">
<p class="h6" style={{color: "white"}}>{amount}</p>
</div>

	)
}







class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		const amount = this.props.list
		console.log(amount)
		return (
			<div style={{ backgroundColor: "black" }}>
			<ItemAmount amount = {amount.length}/>
				<Button style={{backgroundColor: "black", padding: "0px", margin: "0px", border: "0px"}} onClick={this.toggle}>
					<img src={cart} />{" "}
				</Button>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
				<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
				<ModalBody>Your Items</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={this.toggle}>
						Print
					</Button>{" "}
				</ModalFooter>
				</Modal>
			</div>
		);
	}
}
export default Cart;
