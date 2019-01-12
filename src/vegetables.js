import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
import vegetable from './vegetable.jpg'



const Vegetables = ({item}) =>{
return (

          <Col sm="4" style={{color: "white"}}>{item.item} <br/> 
          {item.price} 
          </Col>
        
	)

}



export default class VegetableItems extends React.Component {
  render() {
  	const {items} = this.props

    return (
    <div className="veg" style={{backgroundImage: `url(${vegetable})`, width: "100%", height: "800px"}}>

      <Container>
      <Row>
      {items.map(item=>{
      	return (

      		<Vegetables item={item}/>



      		)


      })}
     
        </Row>
   
      </Container>
      </div>
    );
  }
}