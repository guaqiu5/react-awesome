/*
 * @Author: guaqiu 
 * @Date: 2022-03-07 23:52:04 
 * @Last Modified by: guaqiu
 * @Last Modified time: 2022-03-08 16:49:16
 */
import React from "react"
import logo from './logo.svg'
//类声明组件
let img2Dom=React.createRef()//createRef used in global

class Increase extends React.Component{
    constructor(props){
        super(props)
        this.state={num:0}
    }
    componentDidMount(){
        console.log(this.refs.imgDom) //replaced by useRef and createRef
        console.log(img2Dom.current) //now suggest
    }
    add(){
        //console.log(this)
        //object like
        //this.setState({num:++this.state.num})
        //function like
        this.setState((preState,preProps)=>{return {num:++preState.num}},
            ()=>{console.log(this.state.num)})
    }
    render(){
        return<div>
            <h3>现在的数量{this.state.num}</h3>
            <button onClick={()=>{this.add()}}>增加</button>
            <img src={logo} ref='imgDom' alt='11'></img>
            <img src={logo} ref={img2Dom} alt='111'></img>
        </div>
    }
}
export default Increase