import React, { Component } from "react";

import carts from "./list.png";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Input
} from "reactstrap";
import RecipeButton from "./recipebutton";
import RecipeInfo from "./recipeinfocontainer";
import ClearCheckButton from "./clearcheckbutton";
const ItemAmount = ({ amount }) => {
	let item;
	if (amount === 1) {
		item = "item";
	} else {
		item = "items";
	}
	return (
		<p
			className="h7"
			style={{ color: "white", fontSize: "11px", margin: "0%" }}
		>
			{amount} {item}
		</p>
	);
};

const ListItem = ({
	list,
	onDelete,
	onChange,
	onClick,
	saveCheck,
	checked,
	info
}) => {
	let produc = list.product;

	let nums = [];
	for (let i = 1; i <= 10; i++) {
		nums.push(i);
	}

	let options = nums.map((num, i) => {
		return (
			<option value={num} key={i}>
				{num}
			</option>
		);
	});

	return (
		<div className="shoppingInfo">
			<li className="shoppingList">
				{list.company} {list.product} {list.quantity} ${list.price}
			</li>
			<Form onSubmit={onDelete} className="delete">
				<FormGroup className="shoppingButtons">
					<Label
						className="addIngredient"
						check
						style={{ fontSize: "8px", paddingTop: "9px" }}
					>
						<Input
							type="checkbox"
							value={list.product}
							onClick={onClick}
							onChange={saveCheck}
							checked={checked[produc].check}
						/>
						Add to recipe search
					</Label>
					<Input
						type="hidden"
						name="company"
						defaultValue={list.company}
					/>
					<Input
						type="hidden"
						name="amount"
						defaultValue={list.amount}
					/>
					<Input
						type="hidden"
						name="price"
						defaultValue={list.price}
					/>
					<Input
						type="hidden"
						name="product"
						defaultValue={list.product}
					/>
					<Input
						type="select"
						name="select"
						className="quantityUpdate"
						defaultValue={list.amount}
						id={list.product}
						onChange={onChange}
						style={{ border: "0px", fontSize: "8px" }}
					>
						{options}
					</Input>
					<Button
						type="submit"
						color="white"
						className="deleteButton"
						style={{
							fontSize: "8px",
							backGroundColor: "black",
							border: "0px",
							textAlign: "center"
						}}
					>
						Delete
					</Button>
				</FormGroup>
			</Form>
		</div>
	);
};

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

	testing() {}

	render() {
		const {
			amount,
			list,
			total,
			removal,
			update,
			check,
			saveCheck,
			checkedstatus,
			clearRecipe
		} = this.props;

		let shoppingList = Object.keys(list).map((key, i) => {
			return (
				<ListItem
					list={list[key]}
					onDelete={removal}
					onChange={update}
					onClick={check}
					saveCheck={saveCheck}
					checked={checkedstatus}
					key={i}
				/>
			);
		});
		return (
			<div className="cart">
				<Button
					style={{
						border: "0px",
						padding: "0px",
						background: "transparent",
						width: "100%"
					}}
					onClick={this.toggle}
				>
					<img
						src={carts}
						alt="cart"
						className="cartImage"
						style={{ maxHeight: "30px" }}
					/>
					<ItemAmount amount={amount} />
				</Button>

				<Modal
					size="lg"
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<ModalHeader toggle={this.toggle} onClick={clearRecipe}>
						<div className="headerText" style={{}}>
							Shopping List
						</div>
					</ModalHeader>
					<ModalBody>
						<ul style={{ listStyleType: "none" }}>
							{shoppingList}
						</ul>
					</ModalBody>
					<ModalFooter>
						<div className="modals">
							<div className="totals">Total: ${total}</div>
							  
							  <Button style={{ fontSize: "8px", marginRight: "2px", padding: "2px" }} onClick={() => window.print()}>Print</Button>

        
							<RecipeButton chosenItems={checkedstatus} />
							<ClearCheckButton chosenItems={checkedstatus} />
						</div>
					</ModalFooter>
					<RecipeInfo />
				</Modal>
			</div>
		);
	}
}
export default Cart;
