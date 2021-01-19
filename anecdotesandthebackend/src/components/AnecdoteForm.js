import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnec = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        //const newAnecdote = await anecdotesService.createAnecdote(content)
        //console.log('newAnecdote', newAnecdote)
        //dispatch(addAnecdote(newAnecdote))
        dispatch(addAnecdote(content))  // new functionality


        dispatch(setNotification(`You added '${content}' to anecdotes`, 5))
        //dispatch(updateNotificationAdded(content))
        //setTimeout(() => dispatch(hideNotification()), 5000)
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