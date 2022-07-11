import React from 'react'
import { useForm } from 'react-hook-form'
import './Home.css'

const InputSearch = ({setItemSearch}) => {

    
    const changeForm = e => {
        setItemSearch(e.target.value)
    }
    

  return (
    <form className='form-home' >
            <input 
            placeholder='What are you looking for'
            type="text"
            onChange={changeForm}
             />
    </form>
  )
}

export default InputSearch