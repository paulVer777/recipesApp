import {
    getFilters
} from './filters'
import {
    getRecipes
} from './recipes'
import {
    get
} from 'https';


const renderRecipes = () => {

    const recipes = getRecipes()
    const filters = getFilters()

    let filteredRecipes = recipes.filter((value, index) => value.title.toLowerCase().includes(filters.searchText.toLowerCase()))



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

    h2.textContent = recipe.title

    h3.textContent = recipe.ingredients.length > 0 ? 'You have some ingredients' : 'You dont have ingredients'

    div.appendChild(h2)
    div.appendChild(h3)
    div.classList.add('recipe')

    return div

}


const renderIngredients = (id) => {
     
    const recipes = getRecipes()

    const index = recipes.findIndex((value, index) => id === value.id)

    console.log(index)

    const ingredients = recipes[index].ingredients

     

    document.querySelector('#ingredients').innerHTML = ''

    ingredients.forEach((value, index) => {

        const element = createDOMIngredientItem(value)
        document.querySelector('#ingredients').appendChild(element)
    })

}



const createDOMIngredientItem = (obj) => {


    const div = document.createElement('div')
    const span = document.createElement('span')
    const checkbox = document.createElement('input')
    const button = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')

    button.textContent = 'X'

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