import React, { Component } from "react";
import { Container, Row, Button, Form } from "reactstrap";
import ItemInfo from "./itemInfo";
import fruit from "./fruit.jpg";


export default class Fruits extends Component {
	
	render() {
		
		const { items, onClick,name } = this.props;
	
		return (
			<div
				className="carn"
				style={{
					backgroundImage: `url(${fruit})`,
					width: "100%",
					height: "1340px"
				}}
			>   
				<Container className="product">
			
				<Button style={{backGroundColor: "black", color: "black", fontSize: "8px" }} id={name} onClick	={onClick}>
				Sort by price
				</Button>
		
					<Row>
						{items.map((item, i) => {
							return <ItemInfo item={item} key={i} />;
						})}
					</Row>
				</Container>
			</div>
		);
	}
}
