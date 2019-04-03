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
import {addShopping} from './actions'

let RecipeInfo = ({ name, amount,unit, idx, testing }) => {
	return (
		<div className="fullRecipeIngredients">
			<li className="addMissingIngredient" key={idx}>
				{amount} {unit} {name}
			</li>

			
			<Button className="addMissingIngredientCheck" value={name} name={unit} type="click" id={amount} onClick={testing} style={{ fontSize: "8px", padding: "0px" }}>
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
		const { recipeDetail,addAddtional } = this.props;
		
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
												testing = {addAddtional}
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

const mapDispatchToProps = dispatch => {

return {
addAddtional: (e)=>{
	e.preventDefault()
	console.log(e.currentTarget.value, e.currentTarget.id, e.currentTarget.name)
	let data = {
		amount: "1",
		quantity: `${e.currentTarget.id} ${e.currentTarget.name}`,
		item: e.currentTarget.value,
		price: "0",
		company: ""

	}
  dispatch(addShopping(data))
}

}

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RecipeDetails);
