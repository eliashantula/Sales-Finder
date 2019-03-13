import React, { Component } from "react";

import {
	Button,
	UncontrolledPopover,
	PopoverHeader,
	PopoverBody,
	Form,
	FormGroup,
	Label,
	Input
} from "reactstrap";

let FullIngredients = ({ ingredient, keys, amount, unit }) => {
	return (
		<div className="fullRecipeIngredients">
			<li className="addMissingIngredient">{amount} {unit} {ingredient}</li>

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

	testMe = e => {
		e.preventDefault();
		console.log(this.e.target);
	};

	render() {
		const { id, title, onSubmit, fullRecipe } = this.props;
		console.log(fullRecipe);
		return (
			<div>
				<Button
					id={"id" + id}
					type="submit"
					onClick={onSubmit}
					size="sm"
					color="info"
					style={{ fontSize: "12px" }}
					value={id}
				>
					View Recipe
				</Button>
				<UncontrolledPopover
					style={{ border: "3px solid black", borderRadius: "10px" }}
					trigger="legacy"
					placement="bottom"
					isOpen={this.state.popoverOpen}
					target={"id" + id}
					toggle={this.toggle}
				>
					<PopoverHeader>{title}</PopoverHeader>
					<PopoverBody>
						<div className="recipeDetails">
							<div className="recipeIngredients">
								<Form>
									<FormGroup>
										<ul
											style={{ listStyle: "none" }}
											className="recipeIngredientList"
										>
											{fullRecipe.ingredients.map(
												(ingredient, i) => {
													return (
														<FullIngredients
															ingredient={
																ingredient.name
															}
															key={i}
															amount={ingredient.amount}
															unit = {ingredient.unit}
														/>
													);
												}
											)}
										</ul>
									</FormGroup>
								</Form>
							</div>
							<div className="recipeInstructions">
								{fullRecipe.instructions}
							</div>
						</div>
					</PopoverBody>
				</UncontrolledPopover>
			</div>
		);
	}
}

export default RecipeInfoPopUp;
