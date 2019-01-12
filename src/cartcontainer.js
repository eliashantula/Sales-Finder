import React, {Component} from 'react'
import {connect} from 'react-redux'
import {seeCart} from './actions'
import Cart from './cart'


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
const {list} = this.props
return (
<Cart list ={list}/> 
)


}


}


const mapDispatchToProps = (dispatch) =>{
 
return {
	seeCart: () =>{
		dispatch(seeCart())
	}

}


}

const mapStateToProps = (state)=>{
return {
	list: state.list
}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)

