import {
    getFilters
} from './filters'
import {
    getRecipes
} from './recipes'


const renderRecipes = () => {

    const recipes = getRecipes()
    const filters = getFilters()

    let filteredRecipes = recipes.filter((value, index) => value.title.toLowerCase().includes(filters.searchText.toLowerCase()))



    document.querySelector('#recipes').innerHTML = ''

    filteredRecipes.forEach((value, index) => {

        const element = createDOMItem(value)
        document.querySelector('#recipes').appendChild(element)

    })

}

const createDOMItem = (recipe) => {

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



export { renderRecipes}