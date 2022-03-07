//函数式组件
function ListItem(props){
    return <li>{props.item}</li>
}
function List(props){
    return <ul>
        {props.list.map((item)=>
        {
           return <ListItem item={item} key={item}/>
        })}
    </ul>
}
export default List