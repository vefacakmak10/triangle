import React, { Component } from 'react'
import { Modal, Button, Input } from 'antd';
import axios from 'axios';

const initialState={
    email:"",
    password:"",
    isAuthenticated: "",
  
  
  };


 class Logout extends Component {
    state = initialState ; 

    
    setUser = () => {
      
        this.setState({
          isAuthenticated: false,
            email:"",
            password:"",
            
          });
          console.log(this.state);  
          
          
    } ;
    PostControl = () => {
      axios({
        url:'http://localhost:8080/api/loggedin',
        method:'POST',
        data:this.state,
      })
      .then(() =>{
        console.log('Veri kaydedildi', )
     
      })
      .catch(() =>{
        console.log('Hata' )
      });
    } ;
    refreshPage = () => {
      window.location.reload(false);
    }

   


     
    
    render() {
        return (
            <div>
           
            <button onClick={this.PostControl,this.refreshPage} onMouseOver={this.setUser} >
            Çıkış Yap
            </button>
        
                
            </div>
        )
    }
}
export default Logout  ;

