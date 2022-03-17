import React,{Component} from 'react'
const ThemeContext=React.createContext()
//接受context两种方法
//1:接受static全局变量 然后this.context
//2.ThemeContext.consumer
//3.hooks
class GrandSon extends Component{
    static contextType=ThemeContext
    render(){
            return <div>
            1.static contextType后this.context.XXX获取
            <div>{this.context.key}--{this.context.value}</div>
            <br/>
            2.ThemeContext.consumer 函数式获取
            <ThemeContext.Consumer>
                {(value)=><div>{value.key}--{value.value}</div>}
            </ThemeContext.Consumer>
        </div>
    }
}
function Son(){
    return <GrandSon></GrandSon>
}
class GrandFather extends Component{
    constructor(props){
        super(props)
        this.state={
            heritage:{
                key:`家产`,
                value:100
            }
        }
    }
    render(){
        return<div>
            <ThemeContext.Provider value={this.state.heritage}>
            <Son></Son>
            </ThemeContext.Provider>
        </div>
    }
}
export default GrandFather