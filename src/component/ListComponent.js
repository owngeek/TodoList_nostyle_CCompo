import React from "react"
import FlipMove from"react-flip-move"

const List = (props) =>{
const items = props.items

//items.map(function(){

//})
//items.map(()=>{

//})

const itemList = items.map( item => {
    
    return <div key={item.key}>
 <input type="text" key={item.key} value={item.text} onChange={(e)=>props.setUpdate(e.target.value,item.key)}></input>
        
           <button  onClick={()=>props.deleteButton(item.key)}>delete</button>
    </div>
    
})




    return(
        <div>
            <FlipMove duration={300} easing="ease-in-out">
          {itemList}
          </FlipMove>
        </div>
    )
}
export default List