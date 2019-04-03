import * as Action from "./actions";
import {combineReducers} from 'redux'
const initialState = {
	vegetables: [],
	meats: [],
	dairy: [],
	drinks: [],
	fruits: [],
	recipes: [],
	list: {},
	total: 0,
	amount: 0,
	ingredients: {},
	checks: {},
	recipeCheck: [],
	fullRecipes: {},
	isFetching: false,
	error: null,
	login: {}
};

export default function groceryItem(state = initialState, Action) {
	console.log(Action.type)
	switch (Action.type) {
		case "GET_MEATS":
			return {
				...state,
				meats: Action.food
			};
		case "GET_DAIRY":
			return {
				...state,
				dairy: Action.food
			};
		case "GET_DRINKS":
			return {
				...state,
				drinks: Action.food
			};
		case "GET_VEGETABLES":
			return {
				...state,
				vegetables: Action.food
			};
		case "ADD_SHOPPING":
		console.log(Action.data)
			let amount = parseInt(Action.data.amount);
			let quant = Action.data.quantity;
			let product = Action.data.item;
			let company = Action.data.company;
			let price = parseFloat(Action.data.price);
			let sum = state.total + price * amount;
			sum = (sum * 1000).toFixed();
			sum = parseInt(sum / 10);
			sum = parseFloat(sum / 100);

			if (amount) {
				if (state.list[product]) {
					return {
						...state,
						total: sum,
						amount: state.amount + amount,
						list: {
							...state.list,
							[product]: {
								...state.list[product],
								amount: state.list[product].amount + amount,
								quantity: quant
							}
						}
					};
				} else {
					return {
						...state,
						total: sum,
						amount: state.amount + amount,
						list: {
							...state.list,
							[product]: {
								product: product,
								amount: amount,
								company: company,
								price: price,
								quantity: quant
							}
						},
						checks: {
							...state.checks,
							[product]: { item: product, check: false }
						}
					};
				}
			}

			return {
				...state
			};

		case "REMOVE_SHOPPING":
			let quantity = parseInt(Action.data.amount);
			let item = Action.data.product;
			let prices = parseFloat(Action.data.price);
			let removeAmount = state.total - prices * quantity;
			removeAmount = (removeAmount * 1000).toFixed();
			removeAmount = parseInt(removeAmount / 10);
			removeAmount = parseFloat(removeAmount / 100);
			let newIngredients = Object.keys(state.ingredients).reduce(
				(result, ingr) => {
					if (item !== ingr) {
						result[ingr] = { ingr: ingr };
					}
					return result;
				},
				{}
			);
			let newState = Object.keys(state.list).reduce((result, prod) => {
				if (prod !== item) {
					result[prod] = state.list[prod];
				}
				return result;
			}, {});
			return {
				...state,
				list: newState,
				ingredients: newIngredients,
				total: removeAmount,
				amount: state.amount - quantity,
				checks: {
					...state.checks,
					[item]: {
						...state.checks[item],
						item: item,
						check: false
					}
				}
			};

		case "UPDATE_CART":
			let updatedProduct = Action.data.product;
			let updatedAmount = parseInt(Action.data.amount);
			let additionalAmount, updatedTotal;
			if (updatedAmount > state.list[updatedProduct].amount) {
				additionalAmount =
					updatedAmount - state.list[updatedProduct].amount;
				updatedTotal =
					state.total +
					additionalAmount * state.list[updatedProduct].price;
				updatedTotal = (updatedTotal * 1000).toFixed();
				updatedTotal = parseInt(updatedTotal / 10);
				updatedTotal = parseFloat(updatedTotal / 100);
				return {
					...state,
					total: updatedTotal,
					amount: state.amount + additionalAmount,
					list: {
						...state.list,
						[updatedProduct]: {
							...state.list[updatedProduct],
							amount: updatedAmount
						}
					}
				};
			} else if (updatedAmount < state.list[updatedProduct].amount) {
				additionalAmount =
					state.list[updatedProduct].amount - updatedAmount;
				updatedTotal =
					state.total -
					additionalAmount * state.list[updatedProduct].price;
				updatedTotal = (updatedTotal * 1000).toFixed();
				updatedTotal = parseInt(updatedTotal / 10);
				updatedTotal = parseFloat(updatedTotal / 100);
				return {
					...state,
					total: updatedTotal,
					amount: state.amount - additionalAmount,
					list: {
						...state.list,
						[updatedProduct]: {
							...state.list[updatedProduct],
							amount: updatedAmount
						}
					}
				};
			}
			

		case "SEE_CART":
			return {
				...state,
				list: state.list
			};

		case "SELECT_INGREDIENTS":
			let ingredient = Action.data.product;
			if (Action.data.checked && !state.ingredients[ingredient]) {
				return {
					...state,
					ingredients: {
						...state.ingredients,
						[ingredient]: { ingredient: ingredient }
					}
				};
			} else if (!Action.data.checked && state.ingredients[ingredient]) {
				let newIngredients = Object.keys(state.ingredients).reduce(
					(updatedIngredients, ingred) => {
						if (ingred !== ingredient) {
							updatedIngredients[ingred] = { ingred: ingred };
						}
						return updatedIngredients;
					},
					{}
				);
				return {
					...state,
					ingredients: newIngredients
				};
			}
			

		case "CONTROL_CHECKS":
			let checkProduct = Action.data.value;
			if (!state.checks[checkProduct]) {
				return {
					...state,
					checks: {
						...state.checks,
						[checkProduct]: {
							item: checkProduct,
							check: Action.data.check
						}
					}
				};
			} else {
				return {
					...state,
					checks: {
						...state.checks,
						[checkProduct]: {
							...state.checks[checkProduct],
							item: checkProduct,
							check: Action.data.check
						}
					}
				};
			}

		case "CREATE_CHECKS":
			let newCheck = Action.data;
			if (!state.checks[newCheck]) {
				return {
					...state,
					checks: {
						...state.checks,
						[newCheck]: { item: newCheck, check: false }
					}
				};
			}
			
		case "ADD_RECIPE_INGREDIENTS":
			return {
				...state,
				recipeCheck: Action.data
			};

		case "GET_RECIPE_REQUEST":
			return {
				...state,
				isFetching: true,
				error: null
			};

		case "GET_RECIPE_SUCCESS":
			return {
				...state,
				recipes: Action.data
			};

		case "GET_RECIPE_FAILURE":
			return {
				...state,
				isFetching: false,
				error: Action.error
			};

		case "GET_FULL_RECIPE_REQUEST":
			return {
				...state,
				isFetching: true,
				error: null
			};

		case "GET_FULL_RECIPE_SUCCESS":
		console.log(Action.data)
			let individualIngredients = Action.data.ingredients.map(
				ingredient => {
					return {
						amount: ingredient.amount,
						unit: ingredient.unit,
						name: ingredient.name
					};
				}
			);

			return {
				...state,
				fullRecipes: 
					{ingredients: individualIngredients,
					instructions: Action.data.instructions}
					
				
			};

		case "GET_FULL_RECIPE_FAILURE":
			return {
				...state,
				isFetching: false,
				error: Action.error
			};

		case "CLEAR_RECIPES":
			return {
				...state,
				recipes: []
			};

		case "CLEAR_CHECKS":
			let newChecks = Object.keys(state.checks).reduce(
				(updatedChecks, checked) => {
					updatedChecks[checked] = { item: checked, check: false };
					return updatedChecks;
				},
				{}
			);
			return {
				...state,
				checks: newChecks
			};
		case "LOGIN_INFO":
	
		return {
			...state,
			login:{
			...state.login,
			[Action.data.email] :{user: Action.data.email}

}
		}
		case "GET_FRUITS": 
	
		return {
			...state, 
			fruits: Action.food
		}

	    case "SORT_PRICES":
	    let toSort = Action.data.name
		
	    let sortedValues = state[toSort].slice().sort((a,b)=> { return a.price - b.price})
	    console.log(toSort)
	    return {
	    	...state,
	    	[toSort]: sortedValues
	    }
		default:
			return state;
	}
}
