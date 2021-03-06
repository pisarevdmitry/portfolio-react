import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../styles/Map.module.scss";

export default class Map extends Component {
  static propTypes = {
    zoom: PropTypes.number.isRequired,
    styles: PropTypes.arrayOf(PropTypes.object).isRequired,
    markers: PropTypes.arrayOf(PropTypes.object).isRequired,
    center: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }).isRequired
  }
  constructor() {
    super();
    this.map = React.createRef();
    this.gmap = null;
    this.screenWidth = document.documentElement.clientWidth;
  }
   componentDidMount() {
    console.log(this.map.current);
    window.addEventListener("resize",this.resize)
    this.loadMap();
    this.setMarkers()
    this.setMap();
  } 
  componentWillUnmount() {
    window.removeEventListener('resize',this.resize)
  }
  resize = () => {
      console.log('resize')
       this.screenWidth = document.documentElement.clientWidth;
       this.setMap()
  }
  loadMap = () => {
    const { center, zoom, styles } = this.props;
    const map = new window.google.maps.Map(this.map.current, {
      center,
      zoom,
      styles
    });
    this.gmap = map;
  };
  setMarkers =  () => {
    const {markers } = this.props;
    markers.forEach(marker => {
        const mapMarker = new window.google.maps.Marker({
            position: marker.position,
            icon: {
                url: marker.icon.url,
                size: new window.google.maps.Size(marker.icon.size[0], marker.icon.size[1]),
                origin: new window.google.maps.Point(marker.icon.origin[0], marker.icon.origin[1]),
            }
        });
        mapMarker.setMap(this.gmap)
    })
    }
 setMap = () => {
    if (this.screenWidth > 780) {
      this.gmap.setCenter({ lat: 55.64566662, lng: 37.7236551 });
    } else if (this.screenWidth <= 780 && this.screenWidth > 560) {
      this.gmap.setCenter({ lat: 55.64611464, lng: 37.72957742 });
    } else if (this.screenWidth <= 560) {
      this.gmap.setCenter({ lat: 55.64612675, lng: 37.73675501 });
    }
  };
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <section className={styles["map"]} >
        <div className={styles["google-map"] } ref={this.map}/>
        {this.props.children}
      </section>
    );
  }
}
