import React, { Component } from "react";
import cart from "./shopping.png";
import carts from "./cart.jpg"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ItemAmount = ({amount}) => {

return (


<p className="h7" style={{color: "white", fontSize: "12px"}}>{amount} items in cart</p>


	)
}


const ListItem = ({list}) => {

return (

<li>{list.company} {list.product} : {list.amount}</li>


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
		const {amount,list,total} = this.props
	
		
		let shoppingList=Object.keys(list).map(key=>{
			return <ListItem list = {list[key]} />
		})
		return (
			<div className="cart">
			
				<Button style={{ border: "0px"}} onClick={this.toggle}>
					<img src={cart} className="cartImage" />{" "}
				</Button>
				<ItemAmount amount = {amount}/>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
				<ModalHeader toggle={this.toggle}>Shopping List</ModalHeader>
				<ModalBody>Your Items<br/>
						<ul className="shoppingList">
						{shoppingList}
						</ul>
				Total: ${total}
				</ModalBody>
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
