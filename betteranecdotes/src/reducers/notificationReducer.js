const notificationAtStart = null

const notificationReducer = (state = notificationAtStart, action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return action.notification
        case 'HIDE_NOTIFICATION':
            return action.notification
        default:
            return state
    }
}

export const updateNotificationVoted = (anecdoteVoted) => {
    console.log(anecdoteVoted)
    const notification = `You voted '${anecdoteVoted}'`
    return {
        type: 'SHOW_NOTIFICATION',
        notification,
    }
}

export const updateNotificationAdded = (anecdoteAdded) => {
    const notification = `You added '${anecdoteAdded}' to anecdotes`
    return {
        type: 'SHOW_NOTIFICATION',
        notification,
    }
}

export const hideNotification = () => {
    const notification = null
    return {
        type: 'HIDE_NOTIFICATION',
        notification,
    }
}


export default notificationReducer