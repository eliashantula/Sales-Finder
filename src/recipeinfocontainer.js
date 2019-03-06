import React, { Component } from 'react'
import RecipePreview from './recipeinfo'
import { connect } from 'react-redux'
import {getFullRecipes} from './actions'

class RecipeInfo extends Component {
    

    /*componentWillReceiveProps() {
        this.props.getRecipes();
    }*/



    render() {
        const { recipes, getRecipes,fullRecipes } = this.props
        return (

            <RecipePreview recipes={recipes} getFullRecipesInfo={getRecipes} fullRecipe={fullRecipes}/>


        )



    }








}



const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        fullRecipes: state.fullRecipes
    }



}


const mapDispatchToProps = dispatch => {
return {
	getRecipes: (e) =>{
	console.log(e.target.value)
    e.preventDefault()
     dispatch(getFullRecipes(e.target.value))


	}
}

}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeInfo)