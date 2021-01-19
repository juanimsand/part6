import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'
import { updateNotificationVoted, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const anecToFilter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(increaseVote(id))
        console.log('vote', id)
        const anecVoted = anecdotes.filter(anec => anec.id === id)
        dispatch(updateNotificationVoted(anecVoted[0].content))
        setTimeout(() => dispatch(hideNotification()), 5000)
    }

    const anecFiltered = anecdotes.filter(anecdote => (anecdote.content.includes(anecToFilter)))

    return (
        <div>
            {anecFiltered.map(anecdote => 
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList