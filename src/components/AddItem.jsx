import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Paper, IconButton } from '@mui/material';

const AddItem = (props) => {

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      const randomColor = getRandomColor();

   const [enteredItem, setEnteredItem] =  useState('');

   const enteredItemHandler = (event) => {
    event.preventDefault();
    setEnteredItem('');
   }

   const addItemHandler = () => {

    if (enteredItem.length == 0) {
        return;
    }

    props.onAdd({ name: enteredItem, id: Math.random(), color: randomColor});
   }

   const inputChangeHandler = (event) => {
    setEnteredItem(event.target.value);
   }

  return (
    <Paper component="form"
    onSubmit={enteredItemHandler}
    sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: {sm: 5},
        mt: 4,
        ml: 4,
        width: '300px',
        
    }}
    >
    <input 
        className ='search-bar'
        placeholder='Add'
        value={enteredItem}
        onChange={inputChangeHandler}
    />
    <IconButton type="submit" sx={{p:'10px', color: 'red'}} onClick={addItemHandler}>
        <AddIcon sx={{color : 'black'}} />
    </IconButton>
    </Paper>
  )
}

export default AddItem