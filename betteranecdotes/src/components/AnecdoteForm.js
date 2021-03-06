import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { updateNotificationAdded, hideNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnec = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addAnecdote(content))
        dispatch(updateNotificationAdded(content))
        setTimeout(() => dispatch(hideNotification()), 5000)
    }
    return (
        <div>
            <div>
                <h2>create new</h2>
            </div>
            <div>
                <form onSubmit={addAnec}>
                <div><input name="anecdote" /></div>
                <button type="submit" >create</button>
                </form>
            </div>
        </div>
    )
}

export default AnecdoteForm