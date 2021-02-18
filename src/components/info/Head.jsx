import React from 'react'
import './info.scss'
function Head({head,text,align}) {
     return (
          <div className="head" style={{textAlign:align}}>
              <h2>{head}</h2> 
              <p>{text}</p>
          </div>
     )
}

export default Head
