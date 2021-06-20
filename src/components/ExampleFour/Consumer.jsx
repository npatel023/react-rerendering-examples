import { useContext } from 'react'
import ThemeContext from '../ExampleFour/Context'

function Consumer() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div>
            <button onClick={toggleTheme}>
                Change To {theme === 'light' ? 'Dark' : 'Light'}
            </button>
        </div>
    )
}

export default Consumer