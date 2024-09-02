export const UserGreeting = () => {
    const isLoggedIn = false
    // return <div>Welcome {isLoggedIn ? 'Erfan' : 'Guest'}</div>
    return <div>Welcome {isLoggedIn && 'Erfan' }</div>
}
