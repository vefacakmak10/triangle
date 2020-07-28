import React from 'react';
import Home from './components/Home.js';
import Coffees from './components/Coffees.js';
import Blog from './components/Blog.js';
import AboutUs from './components/AboutUs.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import {Menu} from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <HashRouter>
        <div className="layout">
          <ul className="header">
          <h1>Coffee Code</h1>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><NavLink to="/component/Home">Anasayfa</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to="/component/Coffees">Urunler</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to="/component/Blog">Blog</NavLink></Menu.Item>
            <Menu.Item key="4"><NavLink to="/component/AboutUs">Hakkimizda</NavLink></Menu.Item>
            <Menu.Item key="5"><Login/></Menu.Item>
            <Menu.Item key="6"><Signup/></Menu.Item>
            </Menu>
          
          <div className="content">
            <Route path="/component/Home" component={Home}/>
            <Route path="/component/Coffees" component={Coffees}/>
            <Route path="/component/Blog" component={Blog}/>
            <Route path="/component/AboutUs" component={AboutUs}/>
          </div>
          </ul>
        </div>
      </HashRouter>
  );
}

export default App;

