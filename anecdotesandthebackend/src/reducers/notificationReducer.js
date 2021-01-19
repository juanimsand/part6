const notificationAtStart = null

const notificationReducer = (state = notificationAtStart, action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return action.notification
        case 'HIDE_NOTIFICATION':
            return action.hideMessage
        default:
            return state
    }
}

export const setNotification = (message, time) => {
    const hideMessage = null
    const notification = message
    const timeInMs = time * 1000
    return async dispatch => {
        await dispatch({
            type: 'SHOW_NOTIFICATION',
            notification,
        })
        await setTimeout(() => dispatch({
            type: 'HIDE_NOTIFICATION',
            hideMessage,
        }), timeInMs)
    }
}


export default notificationReducer