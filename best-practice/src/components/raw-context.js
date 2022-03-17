import React,{Component} from "react";
import{withProvider,WithConsumer} from '../hoc/index'
function Bar(props){
    return <div>
        老婆--{props.store.wife}
    </div>
}
const Child=WithConsumer(Bar)
function Foo(props){
    return <div>
        3.高阶组件Context
        <Child/>
    </div>
}
const Father=withProvider(Foo)

export default Father

