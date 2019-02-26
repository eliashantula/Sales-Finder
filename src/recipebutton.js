import React from "react";
import { connect } from 'react-redux'
import { Button } from "reactstrap";


import { findRecipes } from './actions'


let RecipeButton = ({ chosenItems, onSubmits, recipeLookup }) => {

    let data = chosenItems
    let value = Object.keys(data).filter(item => data[item].check === true).join("%2C").split(" ").join("+")


    return (

        <Button type="submit" color="danger"  value={value} style={{fontSize: "10px"}} onClick = {onSubmits}>
Recipe Search
</Button>


    )





}


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmits: (e) => {
            

            e.preventDefault()
            dispatch(findRecipes(e.target.value))
        }

    }

}

const mapStateToProps = (state) => {
    return {
        recipeLookup: state.recipeCheck
    }

}






export default connect(mapStateToProps, mapDispatchToProps)(RecipeButton)