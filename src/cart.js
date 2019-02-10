import React, { Component } from "react";
import cart from "./shopping.png";
import carts from "./cart1.png"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const ItemAmount = ({amount}) => {

return (


<p className="h7" style={{color: "white", fontSize: "11px", margin: "0%"}}>{amount} items in cart</p>


	)
}


const ListItem = ({list, onDelete}) => {
	console.log(list)
return (

<li>{list.company} {list.product} : {list.amount}
<Form onSubmit={onDelete} className="delete">
				<FormGroup className="shoppingButton">
					<Input 
					type="hidden"
					name="company"
					defaultValue={list.company} />
					<Input 
					type="hidden"
					name="amount"
					defaultValue={list.amount} />
					<Input 
					type="hidden"
					name="price"
					defaultValue={list.price} />
					<Input
					type="hidden"
					name="product"
					defaultValue={list.product} />
					<Button type="submit" style={{fontSize: "8px", backGroundColor: "white", border: "0px"}}>
						Delete
						</Button>
						
				</FormGroup>
			</Form>
 </li>

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
		const {amount,list,total,removal} = this.props
		console.log(this.props)
		
		let shoppingList=Object.keys(list).map(key=>{
			return <ListItem list = {list[key]} onDelete={removal} />
		})
		return (
			<div className="cart">
			
				<Button style={{ border: "0px", padding: "0px" ,background: "transparent", width: "100%"}} onClick={this.toggle}>
					<img src={carts} className="cartImage" style={{maxWidth: "30%", maxHeight: "80px", marginLeft: "auto"}} />
					<ItemAmount amount = {amount}/>
				</Button>
				
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
				<ModalHeader toggle={this.toggle}>Shopping List</ModalHeader>
				<ModalBody>
						<ul className="shoppingList" style={{listStyleType: "none"}}>

						{shoppingList}
						</ul>
				
				</ModalBody>
				<ModalFooter>
				<div className="modals">
				<div className="totals">
				Total: ${total}
				</div>
					<Button color="primary" onClick={this.toggle}>
						Print
					</Button>
					</div>
				</ModalFooter>
				</Modal>
			</div>
		);
	}
}
export default Cart;
