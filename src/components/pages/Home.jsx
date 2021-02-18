import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Header from '../layouts/Header'
import {FaUserAlt,FaMapMarkerAlt,FaServer} from 'react-icons/fa'
import NumberDetails from '../info/NumberDetails'
import './pages.scss'
import About from './About'
import Pricing from './Pricing'
import Network from './Network'
import Testmonials from './Testmonials'
import Footer from '../layouts/Footer'
import Head from '../info/Head'
import BigButton from '../ui-elements/BigButton'
function Home() {
     const array=[
          {icon:FaUserAlt,name:'Users',number:'90'},
          {icon:FaMapMarkerAlt,name:'Locations',number:'30'},
          {icon:FaServer,name:'Servers',number:'50'}
          
     ];
     return (
          <>
               <Header banner={1} />
               <Container>
                         <div className="number__info rare">
                              <Grid container>
                                   {
                                        React.Children.toArray(
                                             array.map((item,index)=>{
                                                  if(index===1){
                                                     return ( <NumberDetails Icon={item.icon}
                                                       name={item.name} 
                                                       number={item.number}
                                                       border="2px solid #EEEFF2" />)
                                                  }
                                                  else{
                                                       return  (<NumberDetails Icon={item.icon}
                                                                  name={item.name} 
                                                                  number={item.number}
                                                                  border="none" />)
                                                  }
                                             })
                                        )
                                   }
                              </Grid>
                         </div>
               </Container>
               <About />
               <Pricing/>
               <Network/>
               <Testmonials />
               <Container>
                         <div className="number__info subscribe">
                              <Grid container>
                                  <Grid item xs={12} md={6}>
                                        <Head head="Subscribe Now for Get Special Features!"
                                             text="Let's subscribe with us and find the fun."
                                             align="left"/>
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                        <div className="btn">
                                        <BigButton text="Subscribe Now" link="/" /> 
                                        </div>   
                                   </Grid>
                              </Grid>
                         </div>
               </Container>
               {/* <Footer/> */}
          </>
     )
}

export default Home
