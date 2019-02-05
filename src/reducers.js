import * as Action from "./actions";

const initialState = {
	vegetables: [],
	meats: [],
	dairy: [],
	drinks: [],
	recipes: [],
	list: []
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
		
		    let items = parseInt(Action.data)
		    console.log(Action.data)
			for (let i = 0; i < state.list.length;i++) {
			if (state.list[i].item === Action.data.item){
				state.list[i].amount += items
				return {
				...state,
				list: state.list
				}
				
			}

			}
			return {
			...state,
			list: [...state.list, {item: Action.data.item, amount:items}]
		};
		
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
