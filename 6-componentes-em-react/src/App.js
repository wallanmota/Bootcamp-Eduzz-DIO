import Item from "./components/Item"; //React entende que dentro da pasta tem q buscar o indes.js

const App = () => {
  return( //react fragment (<> </>) trabalhar com componentes irmão se nao quiser usar div
    <> 
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        {/* <Item texto='Item1' /> Forma1 */}
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
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