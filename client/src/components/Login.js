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


};



class Login extends React.Component {

    state = initialState ; 


  componentDidMount = () => {
    this.getUser();
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  
  getUser = () => {
    axios.get('http://localhost:8080/api/user/')
    .then((response) => {

      const data = response.data;
      
      

      this.setState ({users:data});
      console.log('kullanici geldi');
      console.log(this.state.users);

      console.log(this.state.users.map(users => users.email));
      console.log(this.state.users.map(users => users.password));
    })
    .catch(() => {
      alert('hata var');
    });
  }

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
        
  if(!this.state.email || !this.state.users.map(users => users.email) || !this.state.password || !this.state.users.map(users => users.password)){
      console.log("basarısız")
  }
  else {
  if(this.state.email === this.state.users.map(users => users.email) && this.state.password === this.state.users.map(users => users.password)) {
      console.log("giris basarılı") ;
      return true 
  
  }
  else{
      console.log("basarısız ula")
      return false
  }
}
  
};
handleSubmit =(e) => {
  e.preventDefault();
  
  const isValid = this.validate();
  if (isValid)
  {
  
   
  console.log(this.state);
  this.setState(initialState);  }
  
};



    render() {
        return (
            <div>
                <Button style={{ background: "#5B2121", borderColor: "#5B2121"}} type="primary" onClick={this.showModal} icon={<UserOutlined />}>
          Giris Yap
                </Button>
        <Modal
          title="Giris Yap"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <form onSubmit={this.handleSubmit} className="col-md-12 ofset-md-2">

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
                <button type="submit">Giris yap</button>
            </form>
            
        </Modal>
            </div>
        )
    }
}

export default Login;