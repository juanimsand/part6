const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

export const anecAtStart = () => {
    return initialState
}

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

    // aca haces el switch con el type y que sea increment
    switch (action.type) {
        case 'INCREASE_VOTE':
            const id = action.data.id
            const anecToChange = state.find(a => a.id === id)
            const anecVoted = {
                ...anecToChange,
                votes: (anecToChange.votes + 1)
            }
            const newStateAfterVote = state.map(anec =>
                anec.id !== id ? anec : anecVoted
            )
            return newStateAfterVote.sort((a, b) => b.votes - a.votes)
        case 'ADD_ANECDOTE':
            const newStateAfterAdd = state.concat(action.data)
            return newStateAfterAdd.sort((a, b) => b.votes - a.votes)
        default:
            return state
    }

  //return state
}

export const increaseVote = (id) => {
    return {
        type: 'INCREASE_VOTE',
        data: {id}
    }
}

export const addAnecdote = (anecdote) => {
    const newAnecdote = asObject(anecdote)
    return {
        type: 'ADD_ANECDOTE',
        data: newAnecdote
    }
}

export default anecdoteReducer