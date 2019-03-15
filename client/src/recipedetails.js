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
import { connect } from "react-redux";

let RecipeInfo = ({ name, amount,unit, idx }) => {
	return (
		<div className="fullRecipeIngredients">
			<li className="addMissingIngredient">
				{amount} {unit} {name}
			</li>

			<Label
				className="addMissingIngredientCheck"
				style={{ fontSize: "8px", paddingTop: "0px" }}
				key={idx}
			>
				Add to List
			</Label>
		</div>
	);
};

class RecipeDetails extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { recipeDetail } = this.props;
		console.log(recipeDetail);
		return (
			<div className="recipeDetails">
				<div className="recipeIngredients">
					<Form>
						<FormGroup>
							<ul
								style={{ listStyle: "none" }}
								className="recipeIngredientList"
							>
								{recipeDetail.ingredients.map(
									(ingredient, i) => {
										return (
											<RecipeInfo
												key={i}
												name={ingredient.name}
												unit={ingredient.unit}
												amount={ingredient.amount}
											/>
										);
									}
								)}
							</ul>
						</FormGroup>
					</Form>
				</div>
				<div className="recipeInstructions">
					{recipeDetail.instructions}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		recipeDetail: state.fullRecipes
	};
};

export default connect(
	mapStateToProps,
	null
)(RecipeDetails);
