const filterAtStart = ''

const filterReducer = (state = filterAtStart, action) => {
    switch (action.type) {
        case 'FILTER_UPLOADED':
            return action.wordToFilter
        default:
            return state
    }
}

export const updateFilter = (wordToFilter) => {
    return {
        type: 'FILTER_UPLOADED',
        wordToFilter,
    }
}


export default filterReducer