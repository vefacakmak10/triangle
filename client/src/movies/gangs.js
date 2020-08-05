import React, { Component } from 'react'
import video  from '../videos/gangs.mp4' 
import axios from 'axios';
import joe from '../images/joe.jpg'
import michelle from '../images/michelle.jpg'
import colm from '../images/colm.jpg'
const initialState={
    name: "gangs",
    number:"2",
   


};


class gangs extends Component {
    state= initialState ;
    handleChange= (e) => {
        this.setState({
        [e.target.name] : e.target.value ,
        })
    };
    componentDidMount = () => {
        
        
    };
    setMovie = () => {
        axios({
            url:'http://localhost:8080/api/movie',
            method:'POST',
            data:this.state,
          })
          .then(() =>{
            console.log('Veri kaydedildi', )
          })
          .catch(() =>{
            console.log('Hata' )
          });
        }
    render() {
        return (
            <div>
            <div>
            <h2 id="film_ozet_baslik">Filmin Konusu</h2>
            <p>
            Finn Wallace, Londra’nın en güçlü suç ailesinin başındaki isimdir. Ancak Finn Wallace’ın bir suikast sonucu öldürülmesi, bir iktidar boşluğunun oluşmasına neden olur. Bu durum Londra’daki çetelerin pamuk ipliğine bağlı olan barış durumunu da tehdit eder. Sean Wallace, Dumani ailesinin de desteğini alarak babası Finn Wallace’ın yerine geçmeye karar verir. Sean, suç dünyasında kontrolü ele geçirmek ve babasının ölümünden sorumlu olan kişileri bulmak için harekete geçer.
            </p>
            </div>
            <div>
            <h2>
            Film Detayları
            </h2>
            <p>
            Başlangıç Tarihi: 2020 / 60Dak. / 
            <br/>
            Dram, Gerilim
            <br/>
            Yönetmen Gareth Evans, Matt Flannery
            <br/>
            Oyuncular: Joe Cole, Michelle Fairley, Colm Meaney
            <br/>
            <img src={joe} width="100px"  height="100px"/>
            <img src={michelle} width="100px"  height="100px"/>
            <img src={colm} width="100px"  height="100px"/>
            <br/>
            Ülke İngiltere
            <br/>
            Orijinal kanal Sky Atlantic
                        </p>
            </div>
            <div>
            <video width="750" height="500" controls >
            <source src={video} type="video/mp4"/>
            </video>
            </div>
                
            </div>
        )
    }
}
export default  gangs ; 
