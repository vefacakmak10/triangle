import React from 'react';
import axios from 'axios';
import { Modal, Button, Input } from 'antd';
import {UserOutlined} from '@ant-design/icons';

const initialState={
  email:"",
  password:"",
  visible:false ,
  users: [],
  emailDB:[],
  passwordDB:[],
  isAuthenticated: false,
  visibility :'visible' ,  
  id:"", 


};



class Login extends React.Component {
    
  

    state = initialState;  
      
    
    

    


  componentDidMount = () => {
    this.getUser();
    this.getId();
    
    };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  
  getUser = () => {
    axios.get('http://localhost:8080/api/user/')
    .then((response) => {

            let emailDB;
            let passwordDB;
          
            const data = response.data;
            emailDB = data.map(data => data.email );
            passwordDB = data.map(data => data.password);
            
            this.setState({emailDB}) ;
            this.setState({passwordDB}) ;
            
            console.log('veriler alındı!!');
            console.log(emailDB);    
            console.log(passwordDB);
            

    })
    .catch(() => {
      alert('hata var');
    });
  };

  getId = () => {
    axios.get('http://localhost:8080/api/loggedin/')
    .then((response) => {

           
            let id ;
            const data = response.data;
          
            id = data.map(data => data._id);
        
            this.setState({id}) ;
            console.log('veriler alındı!!');
          
            console.log(id);

    })
    .catch(() => {
      alert('hata var');
    });
  };
 

  

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      
    });
  };

  handleChange= (e) => {
    this.setState({
       [e.target.name] : e.target.value ,
    })
};

validate = () => {
        
  if(!this.state.email || !this.state.emailDB || !this.state.password || !this.state.passwordDB  ){
      console.log("basarısız");
      
      
  }
  else { 
    if( this.state.emailDB.includes(this.state.email) && this.state.passwordDB.includes(this.state.password)   ) {
      console.log("giris basarılı") ;
    
      
      return true 
  
  }
  else{
      console.log("basarısız ula") ;
     
    
      return false
  }
}
  
};
handleSubmit =(e) => {
  e.preventDefault();

  const isValid = this.validate();
  if (isValid)
  {
    this.setState({
      
      initialState,
    });



  console.log(this.state);
  this.setState(initialState);  }

};
isLoggedIn = () => {
  this.setState({
    isAuthenticated:true,
  });
};


LoginControl = () => {
  const payload= {
     email : this.state.email,
     password : this.state.password ,
     isAuthenticated : this.state.isAuthenticated,
     
   }
  axios({
    url:"http://localhost:8080/api/loggedin/5f297b19a03fc21b1cf391ba" , 
    method:'PUT',
    data:payload,
  })
  .then(() =>{
    console.log('Veri kaydedildi', )
    this.setState({visibility: 'hidden'})

    
 
  })
  .catch(() =>{
    console.log('Hata' )
    alert("Hosgeldin " +  this.state.email)   ;
  });
} ;






    render() {
        return (
            <div>
                <Button style={{ background: "#5B2121", borderColor: "#5B2121" ,   visibility: this.state.visibility }}  type="primary" onClick={this.showModal} icon={<UserOutlined />}>
          Giris Yap
                </Button>
        <Modal
          title="Giris Yap"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <form onSubmit={this.handleSubmit}  className="col-md-12 ofset-md-2">

                <div className="form-group">
                    <label>Email address</label>
                    <Input type="email" name="email"  onChange={ this.handleChange }  value={this.state.email}  placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <Input type="password" name="password" onChange={ this.handleChange } value={this.state.password}  placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Beni hatirla</label>
                    </div>
                </div>
                
                <button onClick={this.LoginControl} onMouseOver={this.isLoggedIn}  type="submit">Giris yap</button>
                
            </form>
            
        </Modal>
            </div>
        )
    }
}

export default Login;