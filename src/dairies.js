import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import picture from "./dairy.jpg";
import Button from './button'
let DairyRow = ({ item }) => {
	return (
		<Col className = "itemInfo" style={{ color: "white" }}>
		    {item.company}{' '}
			{item.type} <br />
			{item.price}
			{' '}{item.unit}
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
			<div className="dairy" style={{ backgroundImage: `url(${picture})`, width: "100%", height: "800px"}}>
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
