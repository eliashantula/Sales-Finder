import React, {Component} from 'react'
import { Container, Row, Col } from "reactstrap";
import Button from './button'


let ItemInfo = ({ item, key }) => {
    return (
        <Col className = "itemInfo" style={{ color: "white", marginTop: "20px" }}>
		    <h3 className="description">{item.company}{' '}
			{item.type}{' '}{item.quantity}{' '}
			<span style={{fontSize: "15px"}}>${item.price}</span>
			</h3>
		<Button className="button" item = {item}/>
		</Col>
    );
};

export default ItemInfo