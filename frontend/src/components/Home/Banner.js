import React, { Component } from 'react'
import HomeCarousel from '../utils/HomeCarousel'
import Banner1 from '../../images/ibsa_cover.jpg'
import Banner2 from '../../images/ibsa_cover2.JPG'

const carousel_content = [
   {
      image:Banner1
   },
   {
      image:Banner2
   }
]

export default class Banner extends Component {
   render() {
      return (
         <HomeCarousel contents={carousel_content}/>
      )
   }
}
