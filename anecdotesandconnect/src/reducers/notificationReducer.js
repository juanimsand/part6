const notificationAtStart = null
let timeOutId = null

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

const clearTimeOutId = () => {
    clearTimeout(timeOutId)
}

export const setNotification = (message, time) => {
    const hideMessage = null
    const notification = message
    const timeInMs = time * 1000
    clearTimeOutId()
    return async dispatch => {
        await dispatch({
            type: 'SHOW_NOTIFICATION',
            notification,
        })
        timeOutId = setTimeout(() => {
            dispatch({
                type: 'HIDE_NOTIFICATION',
                hideMessage,
            })
        }, timeInMs)
    }
}


export default notificationReducer