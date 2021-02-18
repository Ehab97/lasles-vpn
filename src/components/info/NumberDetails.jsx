import { Grid } from '@material-ui/core'
import React from 'react'
import './info.scss'
import {FaPlus} from 'react-icons/fa'
function NumberDetails({Icon,number,name,border}) {
     return (
         <Grid item md={4} xs={12} style={{borderRight:border,borderLeft:border}}>
               <div className="content">
                    <div className="icons">
                         <Icon />
                    </div>
                    <div className="data">
                         <h2>{number} <span>
                                   <FaPlus /></span></h2>
                         <p>{name}</p>
                    </div>
               </div>
         </Grid>
     )
}

export default NumberDetails
