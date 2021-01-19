import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    //const dispatch = useDispatch()

    const addAnec = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        //const newAnecdote = await anecdotesService.createAnecdote(content)
        //console.log('newAnecdote', newAnecdote)
        //dispatch(addAnecdote(newAnecdote))
        props.addAnecdote(content)  // new functionality


        props.setNotification(`You added '${content}' to anecdotes`, 5)
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

const mapDispatchToProps = {
    addAnecdote,
    setNotification,
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm