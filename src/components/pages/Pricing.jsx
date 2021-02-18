import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Head from '../info/Head'
import image from '../../assets/facvicons/Free.png'
import image1 from '../../assets/facvicons/Standard.png'
import image2 from '../../assets/facvicons/Premium.png'
import {FaCheck} from 'react-icons/fa'
import Plan from '../info/Plan'
function Pricing() {
     const list=[
          {icon:FaCheck,text:'elect'},
          {icon:FaCheck,text:'Encrypted Connection'},
          {icon:FaCheck,text:'No Traffic Logs     '},
          {icon:FaCheck,text:'Works on All Devices'},
     ],
     list2=[
          {icon:FaCheck,text:'Unlimited Bandwitch'},    
          {icon:FaCheck,text:'Encrypted Connection'},
          {icon:FaCheck,text:'Yes Traffic Logs'},
          {icon:FaCheck,text:'Works on All Devices'},
          {icon:FaCheck,text:'Connect Anyware'},
     ],
     list3=[
          {icon:FaCheck,text:'Unlimited Bandwitch'},
          {icon:FaCheck,text:'Encrypted Connection'},
          {icon:FaCheck,text:'Yes Traffic Logs'},
          {icon:FaCheck,text:'Works on All Devices'},
          {icon:FaCheck,text:'Connect Anyware'},
          {icon:FaCheck,text:'Get New Features'},
     ]
     const array=[
          {image:image,head:'Free Plan',list:list,plan:'Free'},
          {image:image1,head:'Standard Plan',list:list2,plan:'$9 / mo'},
          {image:image2,head:'Premium Plan',list:list3,plan:'$12 / mo'},
     ]
     return (
         <Container>
              <Grid container>
                   <Grid item xs={12}>
                   <Head head='Choose Your Plan' 
                    text="Let's choose the package that is best for you and explore it happily and cheerfully."
                    align="center" /> 
                   </Grid>
                   {
                        React.Children.toArray(
                             array.map(item=>(
                                  <Plan head={item.head}
                                        plan={item.plan}
                                        image={item.image}
                                        list={item.list}
                                        />
                             ))
                        )
                   } 
              </Grid>
         </Container>
     )
}

export default Pricing
