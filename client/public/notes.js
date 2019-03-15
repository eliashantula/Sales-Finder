{fullRecipe.ingredients.map(
													(ingredient, i) => {
														return (
															<FullIngredients
																ingredient={
																	ingredient.name
																}
																key={i}
																amount={
																	ingredient.amount
																}
																unit={
																	ingredient.unit
																}
															/>
														);
													}
												)}





{fullRecipe.instructions}