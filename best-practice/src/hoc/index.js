import React,{Component} from "react";
const ThemeContext=React.createContext()
//装饰器模式
export const withProvider=(Comp)=>{
    return class extends Component{
        constructor(props){
           
            super(props)
            this.state={
                store:{
                    wife:'刘亦菲'
                }
            }
            
        }
        render(){
            return <ThemeContext.Provider value={this.state.store}>
                <Comp {...this.props}></Comp>
            </ThemeContext.Provider>
        }
    }
}

export const WithConsumer=(Comp)=>{
    return class extends Component{
        constructor(props){
            super(props)
        }
        render(){
            return <div><ThemeContext.Consumer>
              {value=><Comp {...this.props} store={value}></Comp>}
            </ThemeContext.Consumer>
            </div>
        }
    }
}

