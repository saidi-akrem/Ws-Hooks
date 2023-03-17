import React, { useState } from 'react'
import './AddMovies.css'
const AddMovies = ({addNewMovie}) => {
    const[inputs,setInputs]=useState({
        title:'',
        description :'',
        imgs:'',
        rate:'',
    })
    
    const handleChange = (e) => {
       setInputs({...inputs,[e.target.name]:e.target.value}) 
    }
    const handleAdd=()=>{
        addNewMovie (inputs)
    }
  return (
    <div className='addmovies'>
      <input placeholder='Title' type="text" name='title' onChange={handleChange}/>
      <input placeholder='Image' type="text" name='imgs' onChange={handleChange}/>
      <input placeholder='Description' type="text" name='description' onChange={handleChange}/>
      <input placeholder='Rate' type="text" name='rate'onChange={handleChange}/>
      <button onClick={handleAdd} >Add Movie</button>
   

    </div>
  )
}

export default AddMovies