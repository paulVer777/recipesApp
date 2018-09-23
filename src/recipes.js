import uuidv4 from 'uuid/v4'
import moment from 'moment'
import {renderIngredients} from './view'

///// ARRAY OF RECIPES

let recipes

/////////////////


///// GETTING RECIPES FROM LOCAL STORAGE

const getRecipesFromLocalStorage = () => {

    const data = localStorage.getItem('Recipes')

    return data ? JSON.parse(data) : []
}

//////////////////////////


/////// SETTING RECIPES TO LOCAL STORAGE

const setRecipesToLocalStorage = () => localStorage.setItem('Recipes', JSON.stringify(recipes))

//////////////////////


const getRecipes = () => recipes


////////ADDING RECIPES

const addRecipe = () => {

    const id = uuidv4()
    const timestamp = moment().valueOf()

    recipes.push({

        id,
        title: '',
        createdAt: timestamp,
        editedAt: null,
        ingredients: [],
        instructions: ''
    })
    setRecipesToLocalStorage()
    return id
}

////////////////////////

//////////// UPDATE RECIPES ///////////


const updateRecipes = (updates,id) => {

    const index = recipes.findIndex((value, index) => id === value.id)

    typeof updates.title === 'string' ? recipes[index].title = updates.title : ''
    typeof updates.instructions === 'string' ? recipes[index].instructions = updates.instructions : ''

    setRecipesToLocalStorage()
}

////////////// ADDING INGREDIENTS

const addIngredients = (name,id) => {

    const index = recipes.findIndex((value, index) => id === value.id)

    recipes[index].ingredients.push({
        title: name,
        available: false

    })
    setRecipesToLocalStorage()
    
}

///// SAVING ARRAY OF RECIPES IN VARIABLE

recipes = getRecipesFromLocalStorage()

export {
    getRecipesFromLocalStorage,
    getRecipes,
    addRecipe,
    addIngredients,
    updateRecipes,
    setRecipesToLocalStorage,
    
}