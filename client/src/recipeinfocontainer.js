import React, { Component } from "react";
import RecipePreview from "./recipeinfo";
import { connect } from "react-redux";
import { getFullRecipes } from "./actions";

class RecipeInfo extends Component {
  

    render() {
        const { recipes, getRecipes,  } = this.props;
       
        return (
            <RecipePreview
                recipes={recipes}
                getFullRecipesInfo={getRecipes}
                            />
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        recipes: state.recipes,
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getRecipes: e => {
            
            e.preventDefault();
            dispatch(getFullRecipes(e.target.value));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeInfo);
