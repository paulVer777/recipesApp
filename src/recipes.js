import uuidv4 from 'uuid/v4'
import moment from 'moment'
import {
    renderIngredients
} from './view'

import {indexFinder} from './utilities'

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


const updateRecipes = (updates, id) => {

    const index = indexFinder(recipes,id)

    typeof updates.title === 'string' ? recipes[index].title = updates.title : ''
    
    typeof updates.instructions === 'string' ? recipes[index].instructions = updates.instructions : ''
    recipes[index].editedAt=moment().valueOf()

    setRecipesToLocalStorage()
}

////////////// ADDING INGREDIENTS

const addIngredients = (name, id) => {

    const index = indexFinder(recipes,id)

    recipes[index].ingredients.push({
        title: name,
        available: false,
        id: uuidv4()
    })
    setRecipesToLocalStorage()

}

///// SAVING ARRAY OF RECIPES IN VARIABLE

recipes = getRecipesFromLocalStorage()


///// REMOVES RECIPE 

const removeRecipe = (id) => {

    const index = indexFinder(recipes,id)

    const confirmation = confirm('This action will delete recipe. Do You want to continue?')

    if (confirmation) {
        recipes.splice(index, 1)
        setRecipesToLocalStorage()
        location.assign('index.html')
    } else return

}

/////// REMOVES INGREDIENT FROM RECIPE 

const removeIngredient = (ingredientId, index) => {

    const recipeId = recipes[index].id

    const indexIngr = recipes[index].ingredients.findIndex((value, index) => value.id === ingredientId)



    recipes[index].ingredients.splice(indexIngr, 1)

    setRecipesToLocalStorage()

    renderIngredients(recipeId)

}

////////////// TOGGLE STATUS OF INGREDIENTS

const toggleStatus = (ingredientId, recipeId, status) => {

    const indexIngredient = recipes[recipeId].ingredients.findIndex((value, index) => value.id === ingredientId)

    recipes[recipeId].ingredients[indexIngredient].available = status

    setRecipesToLocalStorage()
}

export {
    getRecipesFromLocalStorage,
    getRecipes,
    addRecipe,
    addIngredients,
    updateRecipes,
    setRecipesToLocalStorage,
    removeIngredient,
    removeRecipe,
    toggleStatus
}