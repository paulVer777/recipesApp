import {
    updateRecipes,
    addIngredients,
    setRecipesToLocalStorage
} from './recipes'

const id = location.hash.substring(1,)


//// UPDATES TITLE OF RECIPE EVERY TIME INPUT VALUE CHANGES

document.querySelector('#title').addEventListener('input', (e) => {

    updateRecipes({
        title: e.target.value
    }, id)
  setRecipesToLocalStorage()
  
})