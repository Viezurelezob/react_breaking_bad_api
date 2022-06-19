import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')
  // Initial state is  '', onInputChange modify the state from the onChange with what we write
  const onInputChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e) => onInputChange(e.target.value)}
          autoFocus
        />
       
      </form>
    </section>
    
  )
  
}

export default Search
