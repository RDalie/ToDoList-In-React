import React from 'react'
import { Button } from '@mui/material';



const ItemList = (props) => {


    const deleteItemHandler = (item) => {
        props.onDelete(item)
    }

  return (
    <ul>
        {props.items.map((item) => {
            
            return (
                <li  style={{backgroundColor: item.color, marginTop: '30px', color: 'black', width: '500px', borderRadius: '40px', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} key={item.id}>
                {item.name} 
                <Button variant="contained" color="error" onClick={() => deleteItemHandler(item)}>
                    Delete
                </Button>
            </li>
            )

        })}
    </ul>
  )
}

export default ItemList