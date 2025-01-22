import { useState } from "react"

const Main = () => {
    const [ingredients, setIngredients] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, <li key={newIngredient}>{newIngredient}</li>])
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text" 
                    aria-label="Add ingredient"
                    placeholder="e.g. milk"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredients}
            </ul>                    
        </main>
    )
}

export default Main
