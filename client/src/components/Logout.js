import React, { Component } from 'react'
import { Modal, Button, Input } from 'antd';
import axios from 'axios';

const initialState={
    email:"",
    password:"",
    loggedInStatus: "",
  
  
  };


 class Logout extends Component {
    state = initialState ; 

    componentDidMount = () => {
        this.getUser();
      };

    setUser = () => {
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            email:"",
            password:"",
            
          });
    } 
    validate = () => {
        
        
    } 



      getUser = () => {
        axios.get('http://localhost:8080/api/loggedin/')
        .then((response) => {
    
                let loggedInStatus;
                
                const data = response.data;
                loggedInStatus = data.map(data => data.loggedInStatus );
               
                this.setState({loggedInStatus}) ;
                
                console.log('veriler alındı!!');
                console.log(loggedInStatus);    
                
        })
        .catch(() => {
          alert('hata var');
        });
      }
      
    
    render() {
        return (
            <div>
           
            <button onClick={this.setUser}>
            Çıkış Yap
            </button>
        
                
            </div>
        )
    }
}
export default Logout  ;

