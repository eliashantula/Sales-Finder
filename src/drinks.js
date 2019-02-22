import React, { Component } from 'react'
import drinks1 from './drinks.jpg'
import { Row, Col, Container } from 'reactstrap'
import Button from './button'
import ItemInfo from './itemInfo'



export default class Drinks extends Component {
    constructor(props) {
        super(props)
    }




    render() {
        const { drinks } = this.props
        console.log(drinks)
        return (

            <div className = "drinks" style={{backgroundImage:`url(${drinks1})`, width: "100%", height: "800px"}}>
<Container className="product">
<Row>
{drinks.map(drink=>{

return (

 <ItemInfo item = {drink}/>




	)



})}

</Row>


</Container>

</div>

        )



    }




}