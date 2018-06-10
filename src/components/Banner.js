import React, {Component} from 'react';
import banner from '../images/banner.png';
import './../styles/Banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
      <img src={banner} className="circle" style={{ maxWidth: '30%' }} />
      </div>
    );
  }
}
export default Banner;