const GET_VEGETABLES = 'GET_VEGETABLES'
const GET_MEATS = 'GET_MEATS'
const GET_DAIRY = 'GET_DAIRY'
const GET_DRINKS = 'GET_DRINKS'
const ADD_SHOPPING = 'ADD_SHOPPING'
const REMOVE_SHOPPING = 'REMOVE_SHOPPING'
const SEE_CART='SEE_CART'
const UPDATE_CART='UPDATE_CART'
const SELECT_INGREDIENTS = 'SELECT_INGREDIENTS'
const CONTROL_CHECKS = 'CONTROL_CHECKS'
const CREATE_CHECKS = 'CREATE_CHECKS'
const ADD_RECIPE_INGREDIENTS = 'ADD_RECIPE_INGREDIENTS'
const data = require('./sales')

let food;
export function getVegetables(){
	data.default.forEach(item=>{

		if (item.name === 'Vegetables'){
			 food = item.products 
			
		}
	})
	return {
		type: GET_VEGETABLES,
		food
	}


}


export function getMeats(){

	data.default.forEach(item=>{
     
		if (item.name === 'Meats'){
			console.log("yes")
			 food = item.products 

		}
	})
	return {
		type: GET_MEATS,
		food
	}


}

export function getDairy(){

	data.default.forEach(item=>{
		if (item.name === 'Dairy'){
			 food = item.products 
		}
	})
	return {
		type: GET_DAIRY,
		food
	}


}

export function getDrinks(){

	data.default.forEach(item=>{
		if (item.name === 'Drinks'){
			 food = item.products 
		}
	})
	return {
		type: GET_DRINKS, 
		food
	}
}


export function addShopping(data){
	return {
		type: ADD_SHOPPING,
		data

	}


}

export function removeShopping(data){
	return {
		type: REMOVE_SHOPPING,
		data

	}
}

export function seeCart(){
	return {
		type: SEE_CART,

	}
}

export function updateCart(data){
	return {
		type: UPDATE_CART,
		data
	}
}

export function selectIngredients(data){
	return {
		type: SELECT_INGREDIENTS,
		data
	}

}

export function controlChecks(data){
	return {
		type: CONTROL_CHECKS,
		data
	}
}

export function createChecks(data){
	return {
		type: CREATE_CHECKS,
		data
	}
}

export function addRecipeIngredients(data){
	return {
		type: ADD_RECIPE_INGREDIENTS,
		data
	}
}