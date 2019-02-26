import React, { Component } from 'react'
import drinks1 from './drinks.jpg'
import { Row, Container } from 'reactstrap'
import ItemInfo from './itemInfo'



export default class Drinks extends Component {
   




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