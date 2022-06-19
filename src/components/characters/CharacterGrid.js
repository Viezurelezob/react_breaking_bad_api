import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
  //A spinner gif appears untill the loading is finished
  //After the items are displays on cards
  if (isLoading) {
    return <Spinner />
  } else {
    return (
      <section className='cards'>
        {items.map((item) => (
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
      </section>
    )
  }
}

export default CharacterGrid
