import React,{Fragment} from 'react'
import {Helmet} from "react-helmet";
import Map from './Map';
import mapStyle from '../config/mapStyles'
import mapMarkers from '../config/mapMarkers';
import Contacts from './Contacts'
import About from './About'
const AboutPage = () => {
  return (
    <Fragment>
        <Helmet>
          <title>Обо мне</title>
        </Helmet>
        <About/>
        <Map center={{
            lat: 55.64566662,
            lng: 37.7236551
        }}
            zoom={15}
            styles={mapStyle}
            markers={mapMarkers}
        >
            <Contacts/>
        </Map>
    </Fragment>
  )
}

export default AboutPage
