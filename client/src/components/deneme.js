import React from 'react';
import axios from 'axios';

const initialState={
    firstname:"",
    lastname:"",
    email:"",
    password:"",


};

class Deneme extends React.Component {

    state = initialState;

    handleChange= (e) => {
      this.setState({
         [e.target.name] : e.target.value ,
      })
  };
  handleSubmit =(e) => {
    e.preventDefault();
    
    console.log(this.state);
    this.setState(initialState); 
  
    axios({
      url:'http://localhost:8080/api/user',
      method:'POST',
      data:this.state,
    })
    .then(() =>{
      console.log('Veri kaydedildi', )
    })
    .catch(() =>{
      console.log('Hata' )
    });
  
  
  };

    render(){
        return (
            <div className="Form">
                <form onSubmit={this.handleSubmit} className="col-md-12 ofset-md-2">
                    <div>
                        <input type="text" name="firstname" value={this.state.username}  onChange={ this.handleChange }/>
                    </div>
                    <div>
                        <input type="text" name="lastname" value={this.state.lastname}  onChange={ this.handleChange }/>
                    </div>
                    <div>
                        <input type="email" name="email" value={this.state.email}  onChange={ this.handleChange }/>
                    </div>
                    <div>
                        <input type="password" name="password" value={this.state.password}  onChange={ this.handleChange }/>
                    </div>
                    <div>
                        <button onSubmit={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Deneme;