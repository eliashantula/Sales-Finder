
import React, { Component } from "react";
import {connect} from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";




let RecipeButton = ({chosenItems, onSubmit}) => {
console.log(chosenItems)

return (

<Button type="submit" color="danger" style={{fontSize: "10px"}} onClick = {onSubmit}>
Recipe Search
</Button>


	)





}


 const mapDispatchToProps = (dispatch)=>{
return {

}


 }


export default connect(mapDispatchToProps)(RecipeButton)


