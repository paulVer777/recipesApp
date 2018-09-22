import uuidv4 from 'uuid/v4'
import moment from 'moment'


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
        availableIngredients: '',
        createdAt: timestamp,
        editedAt: null,
        ingredients: [],
        instructions: ''
    })
    setRecipesToLocalStorage()
}

////////////////////////


////////////// ADDING INGREDIENTS

const addIngredients = (name, id) => {

    const index = recipes.findIndex((value, index) => id === value.id)

    recipes[index].ingredients.push({
     title:name,
     available:false

    })
   setRecipesToLocalStorage()
}




///// SAVING ARRAY OF RECIPES IN VARIABLE

recipes = getRecipesFromLocalStorage()




export {
    getRecipesFromLocalStorage,
    getRecipes,
    addRecipe,
    addIngredients
}