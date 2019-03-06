import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import picture from "./dairy.jpg";

import ItemInfo from "./itemInfo";

export default class DairyItems extends Component {
	render() {
		const { dairy } = this.props;

		return (
			<div
				className="dairy"
				style={{
					width: "100%",
					height: "1325px",
					backgroundImage: `url(${picture})`,
					padding: "0%",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover"
				}}
			>
				<Container className="product">
					<Row>
						{dairy.map((item, i) => {
							return <ItemInfo item={item} key={i} />;
						})}
					</Row>
				</Container>
			</div>
		);
	}
}
