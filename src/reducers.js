import * as Action from "./actions";

const initialState = {
	vegetables: [],
	meats: [],
	dairy: [],
	drinks: [],
	recipes: [],
	list: {},
	total: 0,
	amount: 0
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
							amount: state.list[product].amount+ amount
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
					[product] : {product: product, amount: amount, company: company, price: price }

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
		

		
		
			
	
		case "UDATE_CART":
		let updatedProduct = Action.data.product
		let updatedAmount = parseInt(Action.data.amount) 
		if (updatedAmount > state.list[product].amount){
			let additionalAmount = updatedAmount - state.list[product].amount 
			let updatedtotal = state.total + (updated.amount *state.list[product].price)
			updatedTotal = (updatedTotal * 1000).toFixed()
			updatedTotal = parseInt(updatedTotal/10)
			updatedTotal = parseFloat(removeAmount/100)




		} else {
			
	      
			



		}
		
		case "SEE_CART":
		return{
			...state,
			list: state.list
		}
		default:
			console.log(Action.type);
			return state;
	}
}
