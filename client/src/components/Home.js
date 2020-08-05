import React from 'react';
import {Carousel} from 'antd';
import logo2 from './logo2.png';
import './Home.css';
import axios from 'axios';
import movieOrder from '../components/movieOrder.js';


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
            console.log(numberDB.sort())

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
            
            <movieOrder/>
            
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







