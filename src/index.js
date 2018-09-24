import {
    getRecipesFromLocalStorage,
    getRecipes,
    addRecipe,
    addIngredients,
    updateRecipes
} from './recipes'
import {
    getFilters,
    setFilters
} from './filters'
import {
    renderRecipes
} from './view'

renderRecipes()

//////// SEARCHING RECIPES ////////////

document.querySelector('#search').addEventListener('input', (e) => {

    setFilters({
        searchText: e.target.value
    })

    renderRecipes()

})

////// ADDING OBJECT WITH BASIC DATA TO RECIPES AND REDIRECTING TO EDIT PAGE ////

document.querySelector('#add').addEventListener('click', (e) => {

    const id = addRecipe()

    location.assign(`/edit.html#${id}`)

})

//////////////////// SORTING //////




document.querySelector('#sort-by').addEventListener('change', (e) => {

    setFilters({
        sortBy: e.target.value
    })
     console.log('p')
    renderRecipes()

})