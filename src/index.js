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

const id = 'e07c25b7-7953-4071-8741-2b392df5545b'
const id2 = "7dd771f8-e145-4067-91ef-2f8dd41212d1"
const id3 = "8f7f699a-b060-48cb-a74d-60faea73ea2c"

// addIngredients('olive oil',id2)


// updateRecipes({title:'Lasagne',instructions:'make lasagne'},id)
// updateRecipes({title:'Chili con carne',instructions:'make chili con carne'},id2)
// updateRecipes({title:'Spaghetti',instructions:'make spaghetti'},id3)


renderRecipes()



//////// SEARCHING RECIPES ////////////

document.querySelector('#search').addEventListener('input', (e) => {

    setFilters({
        searchText: e.target.value
    })

    renderRecipes()

})



////// ADDING OBJECT WITH BASIC DATA TO RECIPES AND REDIRECTING TO EDIT PAGE

document.querySelector('#add').addEventListener('click', (e) => {

    const id = addRecipe()

    location.assign(`/edit.html#${id}`)

})

//////////////////////////////////