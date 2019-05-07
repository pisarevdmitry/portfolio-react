import React,{Fragment} from 'react'
import Map from './Map';
import mapStyle from '../config/mapStyles'
import mapMarkers from '../config/mapMarkers';
import Contacts from './Contacts'
import About from './About'
const AboutPage = () => {
  return (
    <Fragment>
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
