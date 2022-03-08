/*
 * @Author: guaqiu 
 * @Date: 2022-03-08 13:36:40 
 * @Last Modified by: guaqiu
 * @Last Modified time: 2022-03-08 16:10:48
 */

import React ,{Component} from "react";
let inputDom=React.createRef()
function Item(props){
  
    return <div><li>{props.item}</li> </div>
}
//受控组件
class AddItem extends Component{
    constructor(props){
        super(props)
        this.state={
            ctx:'',
            items:this.props.items
        }
    }
    handleChange=()=>{
        this.setState((preState,preProps)=>{
            return {ctx:inputDom.current.value}
        },()=>{
            //console.log(this.state.ctx)
        })
    }
    handleClick=()=>{
        let newItems=[...this.state.items]
        newItems.push(this.state.ctx)
        this.setState((preState,preProps)=>{
            return {items:newItems}
        },()=>{
            //console.log(this.state.items)
        })
    }
    isFinished(item){
        const index=this.state.items.findIndex(e=>e===item)
        let newItems=[...this.state.items]
        newItems.splice(index,1)
        this.setState((preState,preProps)=>{return {items:newItems}},()=>{
            //console.log('success')
        })
    }
    render(){
        return <div>
            <input
            onChange={this.handleChange}
            value={this.state.ctx}
            ref={inputDom}
            >

            </input>
            <button onClick={this.handleClick}>add</button>
            <ul>
            {this.state.items.map((item)=>{
           return (<div><Item item={item} key={item}></Item>
                    <button onClick={(e)=>{this.isFinished(item)}}>完成</button>
                    </div>)
            })}
            </ul>
            </div>
    }
}
class ToDos extends Component{
    constructor(props){
        super(props)
        this.state={items:[...this.props.items]}
    }

    
    render(){
        return <div>
            <AddItem items={this.state.items}></AddItem>
            
        </div>
    }
}
export default ToDos