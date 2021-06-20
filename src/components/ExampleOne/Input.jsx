/**
 * * A component that has internal state and updating that state will cause itself rerender itself
 */

import { useState } from 'react'

function ExampleOne(props) {
    const [value, setValue] = useState('')
    console.log('example one is rendered')
    return (
        <div>
            <label>Search</label>
            <input
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
        </div>
    )
}

export default ExampleOne