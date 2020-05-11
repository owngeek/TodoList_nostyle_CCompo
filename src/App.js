import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./component/ListComponent" 

class App extends React.Component{

constructor(){
  super()
  this.state={
    items:[],
    currentItem:{
                text:"",
                key:""
               }
  }
  
  this.handleChange = this.handleChange.bind(this)
  this.addButton = this.addButton.bind(this)
  this.setUpdate = this.setUpdate.bind(this)
  this.deleteButton = this.deleteButton.bind(this)
}





handleChange(e){
  this.setState ({
    currentItem:{
      text:e.target.value,
      key:Date.now()
     }
  })
}

addButton(e){
  e.preventDefault();

const newItem = this.state.currentItem;
console.log(newItem)
if(newItem.text !==""){
  const newItems = [...this.state.items, newItem];



this.setState({
  items:newItems,
  currentItem:{
    text:'',
    key:''
  }
})
}
}


setUpdate(text,key){
const items = this.state.items
items.map(item=>{
  if(item.key === key){
item.text = text
  }

this.setState({
  text:text
})


})
}

deleteButton(key){
  const items =this.state.items
const filterItem = items.filter(item=>(item.key!==key))
this.setState({
  items:filterItem
})
}

  render(){
    return(
      <div>
        <form onSubmit={this.addButton}>
<input type="text" value={this.state.currentItem.text} onChange={this.handleChange}/>
<button type="submit">Add</button>
</form>

<List items={this.state.items} setUpdate={this.setUpdate} deleteButton = {this.deleteButton}></List>

       
      </div>
    )
  }
}





export default App;
