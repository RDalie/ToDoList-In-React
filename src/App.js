import React, { useState } from 'react'
import AddItem from './components/AddItem'
import ItemList from './components/ItemList'




const App = () => {

  const [itemsList, setItemsList] = useState([{ name: 'finish word', color: '#fff', id: '1'}])


  const addItemHandler = (item) => {
    setItemsList(prev => {
      return [...prev, item];
    })
  }

  const deleteItemHandler = (item) => {

    const filteredItems = itemsList.filter((currItem) => {
       return item.id !== currItem.id;
    })

    setItemsList(filteredItems)
  }

  return (
    <React.Fragment>
    
    <div style={{display: 'flex', justifyContent:'center'}}>
      <AddItem onAdd={addItemHandler} />
    </div>
    <div style={{display: 'flex', justifyContent:'center'}}>
    <ItemList items={itemsList}  onDelete={deleteItemHandler}/>
    </div>
    </React.Fragment>
  )
}

export default App