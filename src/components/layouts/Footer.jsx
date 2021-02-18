import { Container, Grid } from '@material-ui/core'
import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import logo from '../../assets/facvicons/Logo.png'
import FooterLinks from '../info/FooterLinks'
function Footer() {
     const proudct=[
          {text:'Download ',link:'Download '},{text:'Pricing',link:'Pricing'},{text:'Locations',link:'Locations'},{text:'Server',link:'Server'},{text:'Countries',link:'Countries'},{text:'Blog',link:'Blog'},]
     const engage=
     [{text:'LaslesVPN',link:'LaslesVPN'},{text:'FAQ',link:'FAQ'},{text:'Tutorials',link:'Tutorials'},{text:'About Us',link:'About Us'},{text:'Privacy Policy',link:'Privacy Policy'},{text:'Terms of Service',link:'Terms of Service'},]
     const earn=[{text:'Affiliate',link:'Affiliate'},{text:'Become Partner',link:'Become Partner'},]     
          return (
          <footer>
             <Container>
                    <Grid container spacing={3}>
                         <Grid item md={6} xs={12}>
                              <div className="brief">
                                   <div className="logo">
                                        <img src={logo} alt="logo"/>
                                   </div>
                                   <p><strong>LaslesVPN</strong> is a private virtual network that<br/> has unique features and has high security.</p>
                                   <ul className="links">
                                        <li>
                                             <Link to="/"><FaFacebookF /></Link>
                                        </li>
                                        <li>
                                             <Link to="/"><FaTwitter   /></Link>
                                        </li>
                                        <li>
                                             <Link to="/"><FaInstagram /></Link>
                                        </li>
                                   </ul>
                                   <p className="copy">©2021LaslesVPN && Mohammed Reda</p>
                              </div>
                         </Grid>
                         <Grid item md={2} xs={12}>
                              <FooterLinks head="Product" links={proudct} />
                         </Grid>
                         <Grid item md={2} xs={12}>
                               <FooterLinks head="Engage" links={engage} />
                         </Grid>
                         <Grid item md={2} xs={12}>
                               <FooterLinks head="Earn Money" links={earn} />
                         </Grid>
                    </Grid> 
             </Container>  
          </footer>
     )
}

export default Footer
