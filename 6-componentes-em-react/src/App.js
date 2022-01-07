const App = () => {
  return( //react fragment (<> </>) trabalhar com componentes irmão se nao quiser usar div
    <> 
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
          Item 1
        </a>
      
      
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
          Item 2
        </a>
      
      
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
          Item 3
        </a>
      </ul>
    </>
  )
}

export default App

// export default function App(){
//   return(
//     <h1>Hello World!</h1>
//   )
// }