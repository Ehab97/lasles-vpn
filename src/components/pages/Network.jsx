import { Container, Grid } from '@material-ui/core'
import React from 'react'
import map from'../../assets/background/Huge Global.png'
import Head from '../info/Head'
import {SiNetflix}from 'react-icons/si'
import {FaRedditAlien,FaAmazon,FaSpotify,FaDiscord} from 'react-icons/fa'
import './pages.scss'
function Network() {
     return (
          <div className="network">
               <Container>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
                         <Grid item md={5} xs={12}>

                              <Head head="Huge Global Network of Fast VPN"
                                   text="See LaslesVPN everywhere to make it easier for you when you move locations."
                                   align="center" />
                         </Grid>
                         <Grid item xs={12}>
                              <img className="map__image" src={map} alt="map using world" />
                         </Grid>
                         <Grid item>
                              <div className="sponsor__icon">
                                   <SiNetflix />
                              </div>
                         </Grid>
                         <Grid item>
                              <div className="sponsor__icon">
                                   <FaRedditAlien className="sponsor__icon" />
                              </div>
                         </Grid>
                         <Grid item>
                              <div className="sponsor__icon">
                                   <FaAmazon className="sponsor__icon" />
                              </div>
                         </Grid>
                         <Grid item>
                              <div className="sponsor__icon">
                                   <FaSpotify className="sponsor__icon" />
                              </div>
                         </Grid>
                         <Grid item>
                              <div className="sponsor__icon">
                                   <FaDiscord className="sponsor__icon" />
                              </div>
                         </Grid>
                    </Grid>
               </Container>
          </div>
     )
}

export default Network
