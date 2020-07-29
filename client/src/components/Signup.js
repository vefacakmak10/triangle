import React from 'react';
import { Modal, Button, Input } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import axios from 'axios';

const initialState={
  firstname:"",
  lastname:"",
  email:"",
  password:"",
  visible:false ,


};




class Signup extends React.Component {

    state = initialState;

    handleChange= (e) => {
      this.setState({
         [e.target.name] : e.target.value ,
      })
  };

  showModal = () => {
    this.setState({
      visible: true,
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

    render() {
        return (
            <div>
                <Button style={{ background: "#5B2121", borderColor: "#5B2121"}} type="primary" onClick={this.showModal} icon={<UserOutlined />}>
          Uye Ol
                </Button>
        <Modal
          title="Uye Ol"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          onSubmit={this.submit}
        >
        <form onSubmit={this.handleSubmit}>

                <div className="form-group" >
                    <label>Isim</label>
                    <Input type="text" name="firstname" className="form-control" placeholder="First name" value={this.state.firstname} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Soyisim</label>
                    <Input type="text" name="lastname" className="form-control" placeholder="Last name" value={this.state.lastname} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <Input type="email" name="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Sifre</label>
                    <Input type="password" name="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onSubmit={this.handleSubmit}>Sign Up</button>
            </form>
        </Modal>
            </div>
        )
    }
}

export default Signup;