import React from 'react';
import {Carousel} from 'antd';
import logo2 from './logo2.png';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <Carousel autoplay>
            <div>
            <img
      className="d-block w-100"
      src={logo2}
      alt="First slide"
    />
            </div>
            <div>
            <img
      className="d-block w-100"
      src={logo2}
      alt="First slide"
    />
            </div>
            <div>
            <img
      className="d-block w-100"
      src={logo2}
      alt="First slide"
    />
            </div>
            <div>
            <img
      className="d-block w-100"
      src={logo2}
      alt="First slide"
    />
            </div>
  </Carousel>
        )
    }
}

export default Home;







