import React, { Component } from "react";

import {
	Button,
	UncontrolledPopover,
	PopoverHeader,
	PopoverBody,
	Form,
	FormGroup,
	Label
} from "reactstrap";


import RecipeDetails from './recipedetails' 

let FullIngredients = ({ ingredient, keys, amount, unit }) => {
	return (
		<div className="fullRecipeIngredients">
			<li className="addMissingIngredient">
				{amount} {unit} {ingredient}
			</li>

			<Label
				className="addMissingIngredientCheck"
				style={{ fontSize: "8px", paddingTop: "0px" }}
				key={keys}
			>
				Add to List
			</Label>

		</div>
	);
};

class RecipeInfoPopUp extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			popoverOpen: false
		};
	}
	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}


	render() {
		const { id, title, onSubmit  } = this.props;
		
			return (
				<div>
			
					<Button
						id={"id" + id}
						type="button"
						onClick={onSubmit}
						size="sm"
						color="info"
						style={{ fontSize: "12px" }}
						value={id}
					>
						View Recipe
					</Button>
					<UncontrolledPopover
						style={{
							border: "3px solid black",
							borderRadius: "10px"
						}}
						trigger="legacy"
						placement="bottom"
						isOpen={this.state.popoverOpen}
						target={"id" + id}
						toggle={this.toggle}
					>
						<PopoverHeader>{title}</PopoverHeader>
						<PopoverBody>
							<RecipeDetails/>
						</PopoverBody>
					</UncontrolledPopover>
				</div>
			);
		
	
}
}

export default RecipeInfoPopUp;
