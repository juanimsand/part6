import axios from 'axios'
import { asObject } from '../reducers/anecdoteReducer'


const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createAnecdote = async (content) => {
    const object = asObject(content)
    console.log('object', object)
    const response = await axios.post(baseUrl, object)
    return response.data
}

const increaseVotes = async (id) => {
    const anecdotes = await getAll()
    const anecToVote = anecdotes.filter(anec => anec.id === id)
    let anecVoted = anecToVote[0]
    anecVoted.votes += 1
    const response = await axios.put(`${baseUrl}/${id}`, anecVoted)
    return response.data
}

export default { getAll, createAnecdote, increaseVotes }