import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
import meat from './meat.jpg'



const Meats = ({item}) =>{
return (

          <Col sm="4" style={{color: "white"}}>{item.item} <br/> 
          {item.price} 
          </Col>
        
	)

}



export default class MeatItems extends React.Component {
  render() {
  	const {items} = this.props
  	console.log(items)
    return (
    <div className="carn" style={{backgroundImage: `url(${meat})`, width: "100%", height: "800px"}}>

      <Container>
      <Row>
      {items.map(item=>{
      	return (

      		<Meats item={item}/>



      		)


      })}
     
        </Row>
   
      </Container>
      </div>
    );
  }
}