/**
 *  * child component can rerender parent component by lifting state up
 *  * parent state can rerender child component(s)
 */

import { useState } from "react"
import Input from './Input'

function Form() {
    const [inputs, setInputs] = useState({})
    const [name, setName] = useState('')

    return (
        <div>
            <label>name</label>
            <input value={name} onChange={e => setName(e.target.value)} />
            {
                Array.from(Array(10).keys()).map(index => (
                    <Input 
                        key={index}
                        index={index}
                        value={inputs[index] ?? ''} 
                        setValue={setInputs} 
                    />
                ))
            }
        </div>
    )
}

export default Form