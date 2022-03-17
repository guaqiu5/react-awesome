/*
 * @Author: guaqiu 
 * @Date: 2022-03-08 13:36:40 
 * @Last Modified by: guaqiu
 * @Last Modified time: 2022-03-08 17:10:11
 */

import React ,{Component} from "react";
let inputDom=React.createRef()
function Item(props){
  
    return <div><li>{props.item}</li> </div>
}
//受控组件
class List extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
       return <ul>
        {this.props.items.map((item,index)=>{
       return (<div key={item}><Item item={item} />
       <button onClick={(e)=>{this.props.isFinished(item)}} >完成</button>
                </div>)
        })}
        </ul>
    }
}

class AddItem extends Component{
    constructor(props){
        super(props)  
        this.state={} 
    }
    
    render(){
        return <div>
            <input
            onChange={this.props.handleChange}
            value={this.props.ctx}
            ref={inputDom}
            >

            </input>
            <button onClick={this.props.handleClick}>add</button>
           
            </div>
    }
}
class ToDos extends Component{
    constructor(props){
        super(props)
        this.state={items:this.props.items,ctx:''}
    }
    handleChange=()=>{
        this.setState((preState,preProps)=>{
            return {ctx:inputDom.current.value}
        },()=>{
            console.log(this.state.ctx)
        })
    }
    handleClick=()=>{
        let newItems=[...this.state.items]
        newItems.push(this.state.ctx)
        this.setState((preState,preProps)=>{
            return {items:newItems}
        },()=>{
            console.log(this.state.items)
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
            <AddItem items={this.state.items} 
            handleChange={this.handleChange} 
            handleClick={this.handleClick}
            ></AddItem>
            <List items={this.state.items} 
            isFinished={()=>{(this.isFinished())}}   
            />
           
        </div>
    }
}
export default ToDos