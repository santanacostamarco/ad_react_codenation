import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'

const Home = ({
    recipes = [],
    searchString = ''
}) => {

    let filterByIngredients, filterByTitle, mergedFilters;

    if (searchString){
        filterByTitle = recipes.filter(recipe => {
            return recipe.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
        })
    
        filterByIngredients = recipes.filter(recipe => {
            return recipe.ingredients.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
        })
    
        mergedFilters = [...new Set(
            [...filterByIngredients, ...filterByTitle]
        )]
    }

    return(
        <div className="row">
            {searchString ? 
                mergedFilters.map(recipe => {
                    return(
                        <RecipeItem recipe={recipe} mark={searchString}/>
                    )
                }) :
                recipes.map(recipe => {
                    return(
                        <RecipeItem recipe={recipe}/>
                    )
                })
            }
        </div>
    )
}
    


Home.propTypes = {
    searchString: PropTypes.string,
    recipes: PropTypes.array
}

export default Home
