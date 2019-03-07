import React  from 'react'
import { Col } from "reactstrap";
import Button from './button'


let ItemInfo = ({ item, info }) => {
    return (
        <Col className = "itemInfo" style={{ color: "white", marginTop: "20px" }}>
		    <h3 className="description" key={info}>{item.company}{' '}
			{item.type}{' '}{item.quantity}{' '}
			<span style={{fontSize: "15px"}}>${item.price}</span>
			</h3>
		<Button className="button" item = {item}/>
		</Col>
    );
};

export default ItemInfo