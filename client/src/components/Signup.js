import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import {UserOutlined} from '@ant-design/icons';




class Signup extends React.Component {

    state = { 
      visible: false,
      firstname:'',
      lastname:'',
      email:'',
      password:''
    };

  handleChange = (event) => {

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
        >
        <Form>

                <div className="form-group">
                    <label>First name</label>
                    <Input type="text" className="form-control" placeholder="First name" value={this.state.firstname} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <Input type="text" className="form-control" placeholder="Last name" value={this.state.lastname} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <Input type="email" className="form-control" placeholder="Enter email" value={this.state.email} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <Input type="password" className="form-control" placeholder="Enter password" value={this.state.password} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </Form>
        </Modal>
            </div>
        )
    }
}

export default Signup;