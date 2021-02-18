import { Container, Grid } from '@material-ui/core'
import React from 'react'
import image from '../../assets/background/about.png'
import Head from '../info/Head'
import {FaCheckCircle} from 'react-icons/fa'
import List from '../info/List'
function About() {
     const about=[
          {icon:FaCheckCircle,text:'Powerfull online protection.'},
          {icon:FaCheckCircle,text:'Internet without borders.'},
          {icon:FaCheckCircle,text:'Supercharged VPN'},
          {icon:FaCheckCircle,text:'No specific time limits.'}
     ]
     return (
          <div className="about">
            <Container>
               <Grid container>
                    <Grid item md={6} xs={12}>
                         <img src={image}  className="about_image" alt="pc user"/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                         <Head head="We Provide Many Features You Can Use" 
                               text="You can explore the features that we provide with fun and have their own functions each feature."
                               align="left"
                               /> 
                         {
                              React.Children.toArray(
                                   about.map(item=>(
                                        <List Icon={item.icon}
                                              text={item.text}
                                               />
                                   ))
                              )
                         }         
                    </Grid>
               </Grid>
            </Container>   
          </div>
     )
}

export default About
