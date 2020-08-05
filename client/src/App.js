import React from 'react';
import Home from './components/Home.js';
import Movies from './components/Movies.js';
import TvShows from './components/TvShows.js';
import AboutUs from './components/AboutUs.js';
import Login from './components/Login.js';
import UploadMovie from './components/UploadMovie.js';
import Logout from './components/Logout.js';
import Signup from './components/Signup.js';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import {Menu} from 'antd';
import 'antd/dist/antd.css';
import seven from './movies/seven.js';
import gangs from './movies/gangs.js';
import sherlock from './movies/sherlock.js';
import got from './movies/got.js';
import piyanist from './movies/piyanist.js';
import django from './movies/django.js';
import movieOrder from './components/movieOrder.js';



function App() {
  
 
  
  return (
    <HashRouter>
        <div className="layout">
          <ul className="header">
          <h1>Film Sitesi</h1>
          
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><NavLink to="/component/movieOrder">Anasayfa</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to="/component/Movies">Filmler</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to="/component/TvShows">Diziler</NavLink></Menu.Item>
            <Menu.Item key="4"><NavLink to="/component/AboutUs">Hakkimizda</NavLink></Menu.Item>
            <Menu.Item key="8"><NavLink to="/component/UploadMovie">Movie</NavLink></Menu.Item>
           

            <Menu.Item key="5"><Login/></Menu.Item>
            <Menu.Item key="6"><Signup/></Menu.Item>
            <Menu.Item key="7"><Logout/></Menu.Item>

          
            </Menu>
          
          <div className="content">
            <Route path="/component/Home" component={Home}/>
            <Route path="/component/Movies" component={Movies}/>
            <Route path="/component/TvShows" component={TvShows}/>
            <Route path="/component/AboutUs" component={AboutUs}/>
            <Route path="/movies/seven" component={seven}/>
            <Route path="/movies/gangs" component={gangs}/>
            <Route path="/movies/django" component={django}/>
            <Route path="/movies/got" component={got}/>
            <Route path="/movies/sherlock" component={sherlock}/>
            <Route path="/movies/piyanist" component={piyanist}/>
            <Route path="/component/UploadMovie" component={UploadMovie}/>
            <Route path="/component/movieOrder" component={movieOrder}/>


          </div>
          </ul>
        </div>
      </HashRouter>
  );
}

export default App;

