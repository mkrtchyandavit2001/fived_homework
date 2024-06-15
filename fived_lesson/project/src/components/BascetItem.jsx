export const BascetItem = ({title, price,count, onAdd, onReduce, onremove}) =>{
    return <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{count * price}</td>
        <td>
            <button onClick = {() => onAdd()}>+</button>
            <button onClick = {() => onReduce()}>-</button>
            <button onClick = {() => onremove()}>X</button>
        </td>
    </tr>
}