import {
    updateRecipes,
    addIngredients,
    getRecipes,
    removeRecipe
} from './recipes'

import {
    renderIngredients
} from './view'

import {
    indexFinder
} from './utilities'

const id = location.hash.substring(1, )

    !id ? location.assign('index.html') : ''


const populateElements = () => {

    const recipes = getRecipes()
    const index = indexFinder(recipes, id)


    document.querySelector('#title').value = recipes[index].title
    document.querySelector('#instructions').value = recipes[index].instructions
}

populateElements()


renderIngredients(id)

//// UPDATES TITLE OF RECIPE EVERY TIME INPUT VALUE CHANGES

document.querySelector('#title').addEventListener('input', (e) => {

    updateRecipes({
        title: e.target.value
    }, id)

})

//// UPDATES INSTRUCTIONS OF RECIPE EVERY TIME INPUT VALUE CHANGES

document.querySelector('#instructions').addEventListener('input', (e) => {

    updateRecipes({
        instructions: e.target.value
    }, id)
})

////// ADDS NEW INGREDIENT TO AN ARRAY OF INGREDIENTS

document.querySelector('#add-ingredients').addEventListener('submit', (e) => {

    e.preventDefault()
    addIngredients(e.target.elements.text.value, id)
    renderIngredients(id)
    e.target.elements.text.value = ''
})

///////// REMOVES RECIPE

document.querySelector('#remove').addEventListener('click', (e) => {

    removeRecipe(id)

})