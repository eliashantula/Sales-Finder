import React, {Component} from 'react'
import {connect} from 'react-redux'
import {seeCart} from './actions'
import Cart from './cart'
import {removeShopping} from './actions'
import {updateCart} from './actions'
import serialize from "form-serialize";



class CartContainer extends Component {
constructor(props){
	super(props)
}

componentDidMount(){
this.props.seeCart()

}
componentWillReceiveProps(nextProps){
this.props.seeCart()
}


render(){
const {list, amount, total,removeItem,changeQuantity} = this.props
console.log(this.props)
return (
<Cart list ={list} amount={amount} total={total} removal={removeItem} update={changeQuantity}/> 
)


}


}


const mapDispatchToProps = (dispatch) =>{
 
return {
	seeCart: () =>{
		dispatch(seeCart());
},
	removeItem: (e) => {
		e.preventDefault();

			const form = e.target;

			const data = serialize(form, { hash: true });
			
		dispatch(removeShopping(data))
		form.reset()
	},

	changeQuantity: (e) => {
         
		const data = e.target.value
		const test = e.target.id
		
		
		
		let changed = {amount: data, product: test}
		console.log(changed)
		dispatch(updateCart(changed))
	}
	

}


}

const mapStateToProps = (state)=>{
return {
	list: state.list,
	amount: state.amount,
	total: state.total
}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)

