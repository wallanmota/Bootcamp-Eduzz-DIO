import React from "react"
import ReactDOM  from "react-dom"
import "./styles.css"

let sum = (a,b) => a+b

function primeiroJSX(){ //JSX posso criar html dentro de funções
    return(
        <div>
            <h1 className="test">Hello World!!!</h1> 
            <h2>Soma: {sum(10, 10)} </h2>
        </div>
    )
}

const App = () => {
    
    return(
        <div className="App">
            {primeiroJSX()} {/* Função JS no react deve estar dentro de {} */}
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)