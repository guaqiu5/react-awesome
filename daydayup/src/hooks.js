import React,{Component,useState} from "react";

// class Field1 extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             text:`哈哈哈哈`
//         }
//     }
//     render(){
//         return <div>
//             {this.state.text}
//         </div>
//     }
// }

function Field2(){
    const [value,setValue]=useState(0)
    return <div>value is {value}
                <button onClick={()=>{setValue(value+1)}}>+1</button>
            </div>
}
export default Field2
