import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.src} alt='profile'/>
<h1> my name is {props.name}</h1>
<p>my age is{props.age}</p>


    </div>
  )
}

export default Card