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
import { connect } from "react-redux";

let RecipeInfo = ({ name, amount,unit, idx }) => {
	return (
		<div className="fullRecipeIngredients">
			<li className="addMissingIngredient" key={idx}>
				{amount} {unit} {name}
			</li>

			
			<Button className="addMissingIngredientCheck" type="submit" style={{ fontSize: "8px", padding: "0px" }}>
				Add to List
				</Button>
		
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
		recipeDetail: state.fullRecipes,
		list: state.list
	};
};

export default connect(
	mapStateToProps,
	null
)(RecipeDetails);
