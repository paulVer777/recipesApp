import {
    getFilters
} from './filters'
import {
    getRecipes,
    removeIngredient,
    toggleStatus
} from './recipes'
import {
    get
} from 'https';

////// DISPLAYS DATA TO USERS SCREENS 

const renderRecipes = () => {

    const recipes = getRecipes()
    const filters = getFilters()

    let filteredRecipes = recipes.sort((a, b) => {

        if (filters.sortBy === 'alpha') return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
        if (filters.sortBy === 'created') return a.createdAt < b.createdAt ? -1 : 1
        if (filters.sortBy === 'edited') return a.createdAt > b.createdAt ? -1 : 1
    })

    filteredRecipes = recipes.filter((value, index) => value.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#recipes').innerHTML = ''

    filteredRecipes.forEach((value, index) => {

        const element = createDOMRecipeItem(value)
        document.querySelector('#recipes').appendChild(element)

    })

}

const createDOMRecipeItem = (recipe) => {

    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')

    h2.textContent = recipe.title === '' ? 'Unnamed' : recipe.title

    h3.textContent = recipe.ingredients.filter((value, index) => value.available === true).length > 0 ? "You have some ingredients" : "You don't have any ingredients"


    div.addEventListener('click', (e) => {

        location.assign(`edit.html#${recipe.id}`)

    })

    div.appendChild(h2)
    div.appendChild(h3)
    div.classList.add('recipe')

    return div

}

const renderIngredients = (id) => {

    const recipes = getRecipes()

    const index = recipes.findIndex((value, index) => id === value.id)

    const ingredients = recipes[index].ingredients

    document.querySelector('#ingredients').innerHTML = ''

    ingredients.forEach((value, indx) => {

        const element = createDOMIngredientItem(value, index)
        document.querySelector('#ingredients').appendChild(element)
    })

}

const createDOMIngredientItem = (obj, index) => {


    const div = document.createElement('div')
    const span = document.createElement('span')
    const checkbox = document.createElement('input')
    const button = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')


    obj.available ? checkbox.setAttribute('checked', true) : ''


    checkbox.addEventListener('click', (e) => {

        toggleStatus(obj.id, index, e.target.checked)

    })

    button.textContent = 'X'
    button.addEventListener('click', (e) => {

        removeIngredient(obj.id, index)

    })

    span.textContent = obj.title

    div.appendChild(checkbox)
    div.appendChild(span)
    div.appendChild(button)

    return div
}

export {
    renderRecipes,
    renderIngredients
}