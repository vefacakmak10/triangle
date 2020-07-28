import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import axios from 'axios';




class Signup extends React.Component {

    state = { 
      visible: false,
      firstname:'',
      lastname:'',
      email:'',
      password:''
    };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
    [name]:value
    });
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

  submit = (event) => {
    event.preventDefault();

    const payload = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    };

    axios({
      url:'',
      method:'POST',
      data:payload
    })
    .then(() =>{
      console.log('Veri kaydedildi', )
    })
    .catch(() =>{
      console.log('Hata' )
    });;
  };

    render() {

      console.log('State:' , this.state);
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
        >
        <Form onSubmit={this.submit}>

                <div className="form-group">
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

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </Form>
        </Modal>
            </div>
        )
    }
}

export default Signup;