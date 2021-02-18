 import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Head from '../info/Head'
import Testmoni from '../info/Testmoni'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowIcon from '../../assets/facvicons/left.png';

function Testmonials() {
      const testmonials=[
           {title:'Ehab Reda',date:'September 14, 2016',name:'E'},
           {title:'Ahmed Mohammed',date:'Oct 14, 2021',name:'A'},
           {title:'Mohammed Nady',date:'Jun 14, 2020',name:'M'},
           {title:'Keroles Monsef',date:'Nov 11, 2018',name:'Ke'},
           {title:'Salem Attia',date:'feb 19, 2006',name:'Sa'},
           {title:'Sellim Khaled',date:'Mar 25, 2008',name:'Se'},
           {title:'Salma Mhsen',date:'Dec 1, 2020',name:'Sm'},
           {title:'Rahf Monsef',date:'Nov 11, 2018',name:'Rk'},
           {title:'Mohsen Reda',date:'feb 19, 2006',name:'Mr'},
           {title:'Ehab Mostaf',date:'Mar 25, 2008',name:'Em'},
           {title:'Mohamed Atef',date:'Dec 1, 2020',name:'Ma'},
      ]

      return (
         <div className="testmonial">
                <Container>
                     <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                          <Grid item md={5} xs={12}>

                               <Head head="Trusted by Thousands of Happy Customer"
                                    text="These are the stories of our customers who have joined us with great pleasure when using this crazy feature."
                                    align="center" />
                          </Grid>
                          <Grid item xs={12}>        
                              <CarouselProvider naturalSlideWidth={100} 
                              naturalSlideHeight={125} totalSlides={11} infinite={0}>
                                   <Slider>
                                   {
                                        React.Children.toArray(testmonials.map(
                                             (item,index)=>(<Grid item md={4} xs={12}>    
                                                  <Slide index={index}>
                                                       <Testmoni name={item.name} date={item.date} title={item.title}/>
                                                  </Slide>
                                                 </Grid>)
                                                 )
                                        )
                                   }
                                   </Slider>
                                  <div className="direction">
                                   <ButtonBack>
                                        <img src={ArrowIcon} alt="arrow left"/>
                                   </ButtonBack>
                                   <ButtonNext>
                                       <img className="arrowRight" src={ArrowIcon} alt="arrow right"/>
                                   </ButtonNext>
                                        
                                   </div>                             
                          </CarouselProvider>
                          </Grid>
                     </Grid>
                </Container>
         </div>
      )
 }
 
 export default Testmonials
 