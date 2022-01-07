const Item = (props) => {
    return(
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
          {/* {props.texto} Forma 1*/}
          {props.children /*Dessa forma cria-se uma tag HTML */} 
        </a>
    )
}
export default Item

//Com destructuring
// const Item = ({children}) => {
//     return(
//         <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
//           {children}
//         </a>
//     )
// }
// export default Item