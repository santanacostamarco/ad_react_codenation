import React from 'react'
import { totalmem } from 'os';


const RecipeItem = ({
    recipe: {href, thumbnail, ingredients, title},
    mark
}) => {

    const markText = (text, mark) => {
        const regex = new RegExp(mark, 'gi')
        const match = text.match(regex)

        text = text.split(match).reduce((obj, value) => {
            obj = [...obj, value, <mark>{match}</mark>]
            return obj
        }, [])

        text.pop()

        return text
    }

    if (mark) {
        ingredients = markText(ingredients, mark);
        title = markText(title, mark);
    }

    return (
        <div className="col-sm-3 mt-4">
            <div className="card">
                <img className="card-img-top img-fluid" src={thumbnail} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        <strong>Ingredients: </strong>{ingredients}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem;