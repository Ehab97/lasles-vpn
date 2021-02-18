import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function FooterLinks({head,links}) {
     return (
          <div className="links__footer">
               <h5>{head}</h5>
              <ul>
                   {
                        React.Children.toArray(
                             links.map(item=>(<li><Link to="/">{item.text}</Link></li>) )
                        )
                   }
              </ul>  
          </div>
     )
}

export default FooterLinks
