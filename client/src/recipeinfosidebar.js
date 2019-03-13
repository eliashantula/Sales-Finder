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

let FullIngredients = ({ ingredient, keys }) => {
	return (
	
			<li>Add to List <Input type="checkbox" /> {ingredient}
			<Label
			className="addMissingIngredient"
			check
			style={{ fontSize: "8px", paddingTop: "5px" }}
			key={keys}
		>
		</Label>
		</li>
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
										<ul style={{ listStyle: "none" }}>
											{fullRecipe.ingredients.map(
												(ingredient, i) => {
													return (
														<FullIngredients
															ingredient={
																ingredient
															}
															key={i}
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
