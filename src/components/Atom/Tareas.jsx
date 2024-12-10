import React from 'react'
import Basurero from './Basurero'

export default function Item(props) {
  return (
    <div>
      <input type="checkbox"/>{props.name}
      <Basurero/>
    </div>
  )
}