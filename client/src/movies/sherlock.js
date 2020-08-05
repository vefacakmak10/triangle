import React, { Component } from 'react'
import video  from '../videos/sherlock.mp4' 
import axios from 'axios';
const initialState={
    name: "sherlock",
    number:"6",
   


};


class sherlock extends Component {
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
            Modern bir Sherlock Holmes uyarlaması.. Bu kez Sherlock günümüz Londra'sında, günümüz şartlarında çözüyor davaları. Yanında yine Doktor Watson, en büyük düşmanı yine Moriarty. Adresi yine Baker Street..
            Değişen tek şey, cep telefonları, mesajlar, mailler, bloglar yani teknoloji. Ama Sherlock hala kendi tarzında ilerliyor..            </p>
            </div> 
            <div>
            <h2>
            Film Detayları
            </h2>
            <p>
            2010 - 2017 / 90Dak. /
            <br/> Macera, Dram, Polisiye
            <br/>
                Yönetmen Steven Moffat, Mark Gatiss
                <br/>
                Oyuncular: Benedict Cumberbatch, Martin Freeman, Amanda Abbington
                <br/>
                Ülke İngiltere
                <br/>
                Orijinal kanal BBC
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
export default  sherlock ;
