import React from 'react'
import './showButton.scss'
export default function ShowButton({title,bg,action}) {
    console.log(bg)
  return (
    <button onClick={action} style={{ background:`${bg}`}}>{title}</button>
  )
}
