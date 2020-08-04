import React, { Component } from 'react'
import video  from '../videos/seven.mp4' 
import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap'
import axios from 'axios';
const initialState={
    name: "seven",
    number:"5",
   


};

class seven extends Component {
    state= initialState ;
    handleChange= (e) => {
        this.setState({
        [e.target.name] : e.target.value ,
        })
    };
    componentDidMount = () => {
        this.setMovie();
        
        
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
                Yedi, seri cinayetler işleyen bir katilin peşine düşen iki polis dedektifinin hikayesini anlatıyor. Bir seri katil 7 ölümcül günahı işleyenleri kendi yöntemleriyle öldürmektedir. Yedi Ölümcül Günah, Hıristiyanlık inançlarına göre Kibir, Açgözlülük, Şehvet Düşkünlüğü,Kıskançlık, Oburluk,Yıkıcılık ve Tembellik'tir. İki polis dedektifi bu seri katilin peşindedir. Film, Amerika'da gösterime girdiği hafta 14.000.000 dolar gelir elde etmişti. Yönetmen David Fincher imzalı film,sürükleyici konusu ve oyuncuların performanslarıyla tüm dünyada gişede büyük başarı yakalamıştı. Başrollerde Brad Pitt, Morgan Freeman, Gywneth Paltrow var. En iyi kurgu dalında 1996’da ödüle aday olan film bu ödülü alamamıştı. Özellikle sürpriz ve çarpıcı finali ile şimdiden sinema tarihinde bir klasik olarak yerini aldı.
                </p>
                </div>
                <div>
                    <h2>
                    Film Detayları
                    </h2>
                    <p>
                    Vizyon tarihi belirsiz / 2s 10dk /
                    <br/> Polisiye, Gerilim
                    <br/>
                    Yönetmen David Fincher
                    <br/>
                    Oyuncular: Brad Pitt, Morgan Freeman, Gwyneth Paltrow
                    <br/>
                    Ülke ABD
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
export default  seven ;

