import React, {Component} from 'react'
import { Container, Row } from 'reactstrap';
import meat from './meat.jpg'
import ItemInfo from './itemInfo'






export default class MeatItems extends Component {
  render() {
  	const {items} = this.props
 
    return (
    <div className="carn" style={{backgroundImage: `url(${meat})`, width: "100%", height: "800px"}}>

      <Container className="product">
      <Row>
      {items.map(item=>{
      	return (

      		<ItemInfo item={item}/>



      		)


      })}
     
        </Row>
   
      </Container>
      </div>
    );
  }
}