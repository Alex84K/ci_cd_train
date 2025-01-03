import "./App.css"
import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <button className="btn">Click me!</button>
       <button className="btn">Click ME!</button>
      </header>
    </div>
  )
}

export default App
