import React from 'react';
import {Carousel} from 'antd';
import logo2 from './logo2.png';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <Carousel width="1280px" autoplay>
            <div>
            <img
            width="1280" height="700"
      className="d-block w-100"
      src={logo2}
      alt="First slide"
    />
            </div>
            <div>
            <img
            width="1280" height="700"
      className="d-block w-100"
      src={logo2}
      alt="First slide"
    />
            </div>
            <div>
            <img
            width="1280" height="700"
      className="d-block w-100"
      src={logo2}
      alt="First slide"
    />
            </div>
            <div>
            <img
            width="1280" height="700"
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







