import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import picture from "./dairy.jpg";
import Button from './button'
let DairyRow = ({ item }) => {
	return (
		<Col className = "itemInfo" style={{ color: "white" }}>
		    <h3 className="description">{item.company}{' '}
			{item.type}{' '}
			<span style={{fontSize: "15px"}}>{'$'}{item.price}</span>
			{item.unit}</h3>
		<Button className="button" item = {item}/>
		</Col>
	);
};

export default class DairyItems extends Component {
	constructor() {
		super();
	}
	render() {
		const { dairy } = this.props;

		return (
			<div className="dairy" style={{ width: "100%", height: "1300px", backgroundImage: `url(${picture})`, height: "1300px", padding: "0%"}}>
				<Container className="product">
					<Row>
						{dairy.map(item => {
							return <DairyRow item={item} />;
						})}
					</Row>
				</Container>
			</div>
		);
	}
}
