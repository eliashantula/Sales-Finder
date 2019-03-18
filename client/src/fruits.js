import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import ItemInfo from "./itemInfo";
import fruit from "./fruit.jpg";


export default class Fruits extends Component {
	render() {
		console.log(this.props)
		const { items } = this.props;
	
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
