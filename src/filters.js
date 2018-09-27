

const filters={
    searchText:'',
    sortBy:'alpha'
}

const setFilters = ({searchText,sortBy}) =>{

typeof searchText === 'string' ? filters.searchText = searchText :''
typeof sortBy === 'string' ? filters.sortBy = sortBy : ''

}

const getFilters = () => filters

export {getFilters,setFilters}