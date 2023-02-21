import React from 'react'

// The showNotification prop is used to control whether the notification is visible or not.
const Notification = ({ showNotification }) => {
    return (
        <div className={`notification-container ${showNotification ? 'show' : ''}`}> {/*if is true show notification, if is not show nothing*/}
            <p>You have already entered this letter</p>
        </div>
    )
}
export default Notification

