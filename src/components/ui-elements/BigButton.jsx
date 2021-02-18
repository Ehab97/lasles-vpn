import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './ui-element.scss'
function BigButton({text,link}) {
     return (
          <>
            <Link className="big__button" to={link}>{text}</Link>   
          </>
     )
}

export default BigButton
