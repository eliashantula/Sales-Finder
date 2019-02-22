import React, {Component} from 'react'

let RecipeSnapshot = ({recipe}) => {

console.log(recipe)

return (
<div className="individualRecipe">
<img src={recipe.image} style={{width: "100%", height: "auto"}}/>
<h7 className="recipeTitle">{recipe.title}</h7> 
</div>

	)






}




export default class RecipePreview extends Component {

constructor(props){
	super(props)
}


render(){
const {recipes, getFullRecipesInfo, fullRecipe } = this.props
console.log(recipes)
return (
<div className="recipePreview">
{recipes.map(recipe=>{

return <RecipeSnapshot recipe = {recipe}/>


})}


</div>


	)



}


}