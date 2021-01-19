const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
}

const counterReducer = (state = initialState, action) => {
    console.log(action)
    
    switch (action.type) {
        case 'GOOD': {
            const stateReturned = {
                ...state,
                good: state.good + 1,
            }
            return stateReturned
        }
        case 'OK': {
            const stateReturned = {
                ...state,
                ok: state.ok + 1,
            }
            return stateReturned
        }
        case 'BAD': {
            const stateReturned = {
                ...state,
                bad: state.bad + 1,
            }
            return stateReturned
        }
        case 'ZERO': {
            return initialState
        }
        default: return state
    }
  
}

export default counterReducer