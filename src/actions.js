const GET_VEGETABLES = 'GET_VEGETABLES'
const GET_MEATS = 'GET_MEATS'
const GET_DAIRY = 'GET_DAIRY'
const GET_DRINKS = 'GET_DRINKS'
const ADD_SHOPPING = 'ADD_SHOPPING'
const REMOVE_SHOPPING = 'REMOVE_SHOPPING'
const SEE_CART='SEE_CART'

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
			 food = item.items 

		}
	})
	return {
		type: GET_MEATS,
		food
	}


}

export function getDairy(){
	console.log(data)
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
			 food = item.items 
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