import { useState } from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"

const Main = () => {
    const [ingredients, setIngredients] = useState([])
    const [isRecipe, setIsRecipe] = useState(false)

    const handleSubmit = (formData) => {                
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, <li key={newIngredient}>{newIngredient}</li>])
    }

    const showRecipe = () => {
        setIsRecipe(true)
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
                ingredients.length !== 0 && <IngredientsList ingredients={ingredients} showRecipe={showRecipe}/>
            }
            {
                isRecipe && <Recipe />
            }               
        </main>
    )
}

export default Main
