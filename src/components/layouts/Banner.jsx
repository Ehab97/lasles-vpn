import { Grid,Container } from '@material-ui/core'
import React from 'react'
import banner from '../../assets/background/banner.png'
import BigButton from '../ui-elements/BigButton'
import './layouts.scss'
function Banner() {
     return (
          <div className="banner">
                    <Container>
                         <Grid container spacing={3}>
                              <Grid item md={6} xs={12}>
                                   <h1>Want anything to be easy with <strong>LaslesVPN</strong>.</h1>
                                   <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                                   <BigButton text="Get Started" link="/pricing" />
                              </Grid>
                              <Grid item md={6} xs={12}>
                                   <img src={banner} alt="somen one googling"/>
                              </Grid>
                         </Grid>
                    </Container>
          </div>
     )
}

export default Banner
