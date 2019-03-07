import React, { Component } from 'react'
import { Button } from 'reactstrap'
let RecipeSnapshot = ({ recipe, details }) => {



    return (
        <div className="individualRecipe">
<img src={recipe.image} alt="fooditem" style={{width: "100%", height: "auto"}}/>
<h5 className="recipeTitle">{recipe.title}</h5> 
<Button className="checkRecipeDetails" value={recipe.id} color="primary" type="submit" onClick={details}>View Recipe</Button>
</div>

    )






}




export default class RecipePreview extends Component {



    render() {
        const { recipes, getFullRecipesInfo } = this.props

        return (
            <div className="recipePreview">
{recipes.map((recipe,i)=>{

return <RecipeSnapshot recipe = {recipe} key={i} details = {getFullRecipesInfo}/>


})}


</div>


        )



    }


}