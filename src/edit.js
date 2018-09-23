import {
    updateRecipes,
    addIngredients,
    
} from './recipes'

import {renderIngredients} from './view'

const id = location.hash.substring(1, )

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
})