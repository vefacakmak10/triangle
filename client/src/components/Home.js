import React from 'react';
import {Carousel} from 'antd';
import logo2 from './logo2.png';
import './Home.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap';
import seven from '../images/seven.jpg' ;
import django from '../images/django.jpg' ;
import piyanist from '../images/piyanist.jpg' ;
import sherlock from '../images/sherlock.jpg' ;
import gangs from '../images/gangs.jpg' ;
import got from '../images/got.jpg' ;

const initialState={
  nameDB: [],
  numberDB:[],

};
const largest = 0 ;

class Home extends React.Component {
  state= initialState ;
  

  componentDidMount = () => {
    this.getMovie();
    
        
        
  };
  validate = (numberDB) => {
    for (const i=0; i<=largest;i++){
      if (numberDB[i]>largest) {
          var largest=numberDB[i];
      }
  }

  
  } ;
  getMovie = () => {
    axios.get('http://localhost:8080/api/movie/')
    .then((response) => {

            let nameDB;
            let numberDB;
            const data = response.data;
            nameDB = data.map(data => data.name );
            numberDB = data.map(data => data.number);
            this.setState({nameDB}) ;
            this.setState({numberDB}) ;
            console.log('veriler alındı!!');
            console.log(nameDB);    
            console.log(numberDB);
    })
    .catch(() => {
      alert('hata var');
    });
  };
 


  




    render() {
        return (
            
          <div>
            <div>
            <h3>
            En Son Eklenen 
            </h3>
            <div>
            <Card style={{ width: '18rem' }}  >
            <Card.Img variant="top" src={got }  width="200" height="200" / >
            <Card.Body>
                <Card.Title>GAME OF THRONES</Card.Title>
                <Card.Text>
                Krallık dediğin savaşsız olur mu? En güçlü krallığı kurup, huzuru sağlamış olsan bile bu gücü elinde nasıl koruyacaksın? Burada yanlış yapana yer yok, affetmek yok. 
                </Card.Text>
                <Link to="../movies/got">
                <Button variant="primary">Diziye git</Button>
                </Link>
            </Card.Body>
            </Card>
            </div>
            </div>


            <div>
            <h3>
            En Çok İzlenen
            </h3>
            </div>
          
          </div>
        )
    }
}

export default Home;







