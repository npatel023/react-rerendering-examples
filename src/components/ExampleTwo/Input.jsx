function Input(props) {
    const {
        index,
        value,
        setValue
    } = props

    return (
        <div style={{margin: '10px'}}>
            <label>{index}</label>
            <input
                value={props.value}
                onChange={
                    e => setValue(
                        previousState => ({ ...previousState, [index]: e.target.value })
                    )
                }
            />
        </div>

    )
}

export default Input