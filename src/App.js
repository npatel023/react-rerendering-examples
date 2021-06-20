import { useState } from 'react';
import Input from './components/ExampleOne/Input'
// import Form from './components/ExampleTwo/Form'
// import Key from './components/ExampleThree/Key'
// import Context from './components/ExampleFour/Context'
// import Consumer from './components/ExampleFour/Consumer'

function App() {
  // const [theme, setTheme] = useState('light')
  console.log('app is rendered')

  // const toggleTheme = () => {
  //   setTheme(previousState => (
  //     previousState === 'light' ? 'dark' : 'light'
  //   ))
  // }

  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
