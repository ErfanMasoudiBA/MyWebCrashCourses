export const NameList = () => {
    const names = ['Erfan', 'Reza', 'Ali']
    return <div>
        {
            names.map((name) => {
                return <h2 key={name} >{name}</h2>
            })
        }
    </div>
}