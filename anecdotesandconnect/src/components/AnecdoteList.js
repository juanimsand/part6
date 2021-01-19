import React from 'react'
import { connect } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    //const dispatch = useDispatch()

    const vote = (id) => {
        props.increaseVote(id)
        console.log('vote', id)
        const anecVoted = props.anecdotes.filter(anec => anec.id === id)

        props.setNotification(`You voted '${anecVoted[0].content}'`, 5)
    }

    const anecFiltered = props.anecdotes.filter(anecdote => (anecdote.content.includes(props.filter)))

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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter,
    }
}

const mapDispatchToProps = {
    increaseVote,
    setNotification,
}

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdotes