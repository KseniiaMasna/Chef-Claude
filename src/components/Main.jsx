import { useState } from "react"
import Markdown from 'react-markdown'
import { getRecipeFromMistral } from "../ai"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"


const Main = () => {    
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN;    


    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState()

    const handleSubmit = (formData) => {                
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, <li key={newIngredient}>{newIngredient}</li>])
    }

    const showRecipe = async () => {        
        const recipeMarkdown = await getRecipeFromMistral(ingredients)        
        setRecipe(recipeMarkdown)        
    }

    return (
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text" 
                    aria-label="Add ingredient"
                    placeholder="e.g. milk"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {
                ingredients.length !== 0 && <IngredientsList ingredients={ingredients} showRecipe={showRecipe} />
            }
            {
                recipe && <Recipe recipe={recipe}/>
            }               
        </main>
    )
}

export default Main
