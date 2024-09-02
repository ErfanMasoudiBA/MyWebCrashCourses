export const ClickHandler = () => {
    const ClickHandler = (event, count = 1) => {
        console.log('Button clicked', count,event);
        
    }
    return (
        <div>
            <button onClick={ClickHandler}>Click </button>
            <button onClick={(event) => ClickHandler(event,5)}>Click 5</button>
        </div>
    )
}