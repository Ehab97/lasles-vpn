import { Button, Grid } from '@material-ui/core'
import React from 'react'
import List from '../info/List'
import './info.scss'
function Plan({image,list,head,plan}) {
     const align={margin: "20px auto",width: "calc(100% - 100px)",justifyContent: "space-between"};
     return (
          <Grid item xs={12} md={4}>
               <div className="plan">
                    <img src={image} alt={plan} />
                    <h5>{head}</h5>
                    {
                         React.Children.toArray(
                              list.map(item=>(
                              <List Icon={item.icon} text={item.text} align={align} />
                              ))
                         )
                    }
                    <h3>{plan}</h3>
                    <Button>Select</Button>
               </div>
          </Grid>
     )
}

export default Plan
