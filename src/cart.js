import React, { Component } from "react";
import cart from "./shopping.png";
import carts from "./cart1.png"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import RecipeButton from './recipebutton'
const ItemAmount = ({amount}) => {

return (


<p className="h7" style={{color: "white", fontSize: "11px", margin: "0%"}}>{amount} items in cart</p>


	)
}



const ListItem = ({list, onDelete, onChange, onClick,saveCheck,checked,key}) => {
let produc = list.product

let nums =[];
for (let i = 1; i <= 10; i++){
nums.push(i)
}

let options = nums.map(num=>{
	return <option value={num}>{num}</option>
})

return (
<div className="shoppingInfo">
<li className="shoppingList" key={key}>{list.company}{' '}{list.product}{' '}{list.quantity} ${list.price}</li>
<Form onSubmit={onDelete} className="delete">
				<FormGroup className="shoppingButtons">
							<Label className="addIngredient" check style={{fontSize: "8px", paddingTop: "9px"}}>
            <Input type="checkbox" value={list.product} onClick={onClick} onChange={saveCheck} checked={checked[produc].check}/>
            Add to recipe search
          </Label>
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
					<Input type="select" name="select" className="quantityUpdate" defaultValue= {list.amount} id={list.product} onChange={onChange} style={{border: "0px", fontSize: "10px"}}>
             {options}

          </Input>
					<Button type="submit" className="deleteButton" style={{fontSize: "8px", backGroundColor: "white", border: "0px", textAlign: "center"}}>
						Delete
						</Button>
			
				</FormGroup>
				
			</Form>

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
		const {amount,list,total,removal, update, check,saveCheck,checkedstatus} = this.props
		
		
		let shoppingList=Object.keys(list).map((key,i)=>{
			return <ListItem list = {list[key]} onDelete={removal} onChange={update} onClick={check} saveCheck={saveCheck} checked={checkedstatus} key={i} />

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
				<ModalHeader toggle={this.toggle}><div className="headerText" style={{}}>Shopping List</div></ModalHeader>
				<ModalBody >
						<ul style={{listStyleType: "none"}}>

						{shoppingList}
						</ul>
				
				</ModalBody>
				<ModalFooter>
				<div className="modals">
				<div className="totals">
				Total: ${total}
				</div>
					<RecipeButton chosenItems={checkedstatus}/>
					</div>
				</ModalFooter>
				</Modal>
			</div>
		);
	}
}
export default Cart;
