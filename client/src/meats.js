import React, { Component } from "react";
import { Container, Row, Button} from "reactstrap";
import meat from "./meat.jpg";
import ItemInfo from "./itemInfo";

export default class MeatItems extends Component {
  render() {
    const { items, onClick, name } = this.props;

    return (
      <div
        className="carn"
        style={{
          backgroundImage: `url(${meat})`,
          width: "100%",
          height: "1340px"
        }}
      >
        <Container className="product">
        <Button style={{backGroundColor: "black", color: "black", fontSize: "8px" }} id={name} onClick  ={onClick}>
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
