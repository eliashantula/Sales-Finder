import React, {Component} from 'react'
import drinks1 from './drinks.jpg'
import {Row, Col, Container} from 'reactstrap'
import Button from './button'
const DrinkItems = ({drink,list}) => {
return (

<Col sm="6" style={{color: "black", border: "1px solid black"}}>
<div className="item">
{drink.item} <br/> {drink.price}
</div>
<Button item = {drink} list={list}/>
</Col>


	)
}

export default class Drinks extends Component {
constructor(props){
	super(props)
}





render(){
const {drinks,list} = this.props
return (

<div className = "drinks" style={{backgroundImage:`url(${drinks1})`, width: "100%", height: "800px"}}>
<Container>
<Row>
{drinks.map(drink=>{

return (

 <DrinkItems drink = {drink} list={list}/>




	)



})}

</Row>


</Container>

</div>

	)



}




}