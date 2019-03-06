import React, {Component} from 'react'
import { Container, Row } from 'reactstrap';
import vegetable from './vegetable.jpg'
import ItemInfo from './itemInfo'


export default class VegetableItems extends Component {
  render() {
  	const {items} = this.props

    return (
    <div className="veg" style={{height: "1300px", backgroundImage: `url(${vegetable})`, width: "100%", backgroundSize: "cover"}}>

      <Container className="product" >
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