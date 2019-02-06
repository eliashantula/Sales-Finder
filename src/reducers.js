import * as Action from "./actions";

const initialState = {
	vegetables: [],
	meats: [],
	dairy: [],
	drinks: [],
	recipes: [],
	list: {},
	total: 0,
	amount: 0};

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
		    let price = parseFloat(Action.data.price)
		    
		   if (amount) {

		   
			if (state.list[product]) {
				return {
					...state,
					total: state.total + (amount*price),
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
				console.log(state.total)
				return {

				...state,
				total: state.total + (amount*price),
				amount: state.amount + amount,
				list : {
					...state.list,
					[product] : {product: product, amount: amount, company: company}

				}

				}

				
			}
			}
			
				return {
				...state,
				


				}
				
			

			
		
		case "REMOVE_SHOPPING":
		for (let i =0; i < state.list.length; i++){
		if (state.list[i].item === Action.data.item){
			return state.list.filter(item => item.item !== Action.data.item)
		}
	}
		return {
			...state,
			
		};
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
