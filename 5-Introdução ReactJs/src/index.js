import React from "react"
import ReactDOM  from "react-dom"
import Button from './Button'
import "./styles.css"

let sum = (a,b) => alert(a+b)

function primeiroJSX(){ //JSX posso criar html dentro de funções
    return(
        <div>
            <h1 className="test">Hello World!!!</h1> 
        </div>
    )
}

const element = 'Digital Innovation One'
const element2 = <h1>Olá turma =D</h1>

const App = () => { //Component
    
    return(
        <div className="App">
            {primeiroJSX()} {/* Função JS no react deve estar dentro de {} */}
            {element}
            {element2}
            <Button onClick ={()=>sum(10, 5)} name='Resultado da soma'/>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement) //Renderiza