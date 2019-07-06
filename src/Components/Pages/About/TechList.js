import React from 'react'

const TechList = (props) => {
  return (
    <div className="TechList">
      <h4>{props.title}</h4>
      <ul>
        {props.items.map((item, key) => (
          <li key={key}>{item}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default TechList
