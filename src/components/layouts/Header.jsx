import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Navbar from './Navbar'
import banner from '../../assets/background/banner.png'
import BigButton from '../ui-elements/BigButton'
import './layouts.scss'
import Banner from './Banner'
function Header({banner,navbar}) {
     return (
          <header>
               {navbar&&<Navbar/>}
               {banner&&<Banner />}
          </header>
     )
}

export default Header
