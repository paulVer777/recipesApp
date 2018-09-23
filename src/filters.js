

const filters={
    searchText:'',
    sortBy:'Alphabetically'
}


const setFilters = (updates) =>{

typeof updates.searchText === 'string' ? filters.searchText = updates.searchText :''
typeof updates.sortBy === 'string' ? filters.sortBy = updates.sortBy : ''

}

const getFilters = () => filters

export {getFilters,setFilters}