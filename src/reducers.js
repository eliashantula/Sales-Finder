import * as Action from "./actions";

const initialState = {
	vegetables: [],
	meats: [],
	dairy: [],
	drinks: [],
	recipes: [],
	list: {},
	total: 0,
	amount: 0,
	ingredients: []
	};

export default function groceryItem(state = initialState, Action) {
	
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
		
		    let amount = parseInt(Action.data.amount)
		    let quant = Action.data.quantity
		    let product = Action.data.item
		    let company = Action.data.company
		    let id = Action.data.id                                                                                                  
		    let price = parseFloat(Action.data.price)
		    let sum = state.total + (price*amount)
		    sum = (sum * 1000).toFixed();
		    sum = parseInt(sum/10)
		    sum = parseFloat(sum/100)
		    
            
		    
		   if (amount) {

		   
			if (state.list[product]) {
				return {
					...state,
					total: sum,
					amount: state.amount + amount,
					list : {
						...state.list,
						[product]: {
							...state.list[product],
							amount: state.list[product].amount+ amount,
							quantity: quant
						}



					}
					
			}
			} else {
				
				return {

				...state,
				total: sum,
				amount: state.amount + amount,
				list : {
					...state.list,
					[product] : {product: product, amount: amount, company: company, price: price, quantity: quant }

				}

				}

				
			}
			}
			
				return {
				...state,
				


				}
				
			

			
		
		case "REMOVE_SHOPPING":
		let quantity = parseInt(Action.data.amount)
		let item = Action.data.product
		let prices = parseFloat(Action.data.price)
		let removeAmount = state.total - (prices * quantity)
		removeAmount = (removeAmount * 1000).toFixed()
		removeAmount = parseInt(removeAmount/10)
		removeAmount = parseFloat(removeAmount/100)
		console.log(Action.data) 
		let newState = Object.keys(state.list).reduce((result,prod)=>{
			if(prod !== item){
				result[prod] = state.list[prod]
				
			} 
			return result;
			},{})
		return {...state, list: newState,
			total: removeAmount,
			amount: state.amount - quantity
		}
		

		
		
			
	
		case "UPDATE_CART":
        console.log("here")
		let updatedProduct = Action.data.product
		let updatedAmount = parseInt(Action.data.amount)
		let additionalAmount, updatedTotal 
		if (updatedAmount > state.list[updatedProduct].amount){
			additionalAmount = updatedAmount - state.list[updatedProduct].amount 
			updatedTotal = state.total + (additionalAmount *state.list[updatedProduct].price)
			updatedTotal = (updatedTotal * 1000).toFixed()
			updatedTotal = parseInt(updatedTotal/10)
			updatedTotal = parseFloat(updatedTotal/100)
			return {
				...state,
				total: updatedTotal,
				amount: state.amount + additionalAmount,
				list :{
					...state.list,
					[updatedProduct]: {
						...state.list[updatedProduct],
						amount: updatedAmount


					}
				}




			}




		} else if (updatedAmount < state.list[updatedProduct].amount){
				additionalAmount = state.list[updatedProduct].amount - updatedAmount
				updatedTotal = state.total - (additionalAmount * state.list[updatedProduct].price)
				updatedTotal = (updatedTotal * 1000).toFixed()
				updatedTotal = parseInt(updatedTotal/10)
				updatedTotal = parseFloat(updatedTotal/100)
				return {
					...state,
					total: updatedTotal,
					amount: state.amount - additionalAmount,
					list:{
						...state.list,
						[updatedProduct]: {
							...state.list[updatedProduct],
							amount: updatedAmount
						}
					}
				}
			
	      
			



		}
		
		case "SEE_CART":
		return{
			...state,
			list: state.list
		}

		case "SELECT_INGREDIENTS": {
			console.log(Action.data)
			return {
				...state,
				ingredients: state.ingredients.concat(Action.data)
			}



		}
		default:
			console.log(Action.type)
			return state;
	}
}
