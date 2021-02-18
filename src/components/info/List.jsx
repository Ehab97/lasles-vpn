import React from 'react'

function List({Icon,text,align}) {
     return (
          <div className="list" style={align}>
               <span><Icon /></span>
               <p>{text}</p>
          </div>
     )
}

export default List
