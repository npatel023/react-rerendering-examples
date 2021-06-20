import { useState } from 'react'

function Key() {
    const [option, setOption] = useState('1')

    const handleSelectChange = e => {
        setOption(e.target.value)
    }

    return (
        <>
            <select onChange={handleSelectChange}>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
            </select>
            <br />
            <input key={option} defaultValue={option} /> 
            
        </>
    )
}

export default Key