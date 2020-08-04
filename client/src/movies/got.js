import React, { Component } from 'react'
import video  from '../videos/got.mp4' 
import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap'
import axios from 'axios';
const initialState={
    name: "got",
    number:"3",
   


};


class got extends Component {
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
            Krallık dediğin savaşsız olur mu? En güçlü krallığı kurup, huzuru sağlamış olsan bile bu gücü elinde nasıl koruyacaksın? Burada yanlış yapana yer yok, affetmek yok. Kuzey Krallığının hükümdarı Lord Ned Stark, uzun ve zorlu savaşlardan sonra anayurduna dönüp krallığını bütünlük içerisinde tutmayı başarmıştır. Kral Robert Baratheon ile yıllarca omuz omuza çarpışan ve Baratheon'un kral olmasını sağlayan Ned Stark'ın tek istediği kuzey sınırlarını koruyan krallığında ailesiyle ve halkıyla yaşamaktır.
Fakat suyun öte yanında kendi topraklarından ve krallığından kovulduğunu iddia eden Viserys Targaryen , kız kardeşi Daenerys'i barbar kavimlerin başı Han Drogo'ya vererek, güç birliği planları yapmaktadır. Tahtını büyük bir iştahla geri isteyen ama kraliyet oyunlarından habersiz olan Viserys'in planları Kral Baratheon'a ulaşır. Savaş alanında büyük cengaver olan ama ülke ve aile yönetiminde aynı başarıyı tutturamayan Baratheon'un tamamen güvenebileceği ve her yanlış hamlesini arkasından toplayacak yeni bir sağ kola ihtiyacı vardır. Kuzeyin Lordu Ned Stark bu görev için seçilen tek aday isimdir. Kış yaklaşıyor...
Hanedan entrikaları, kapılı kapılar ardında dönen oyunlar, birilerinin kuyusunu kazmak için düşmanın koynuna girmekten çekinmeyen kadınlar, kardeşler arası çekişmeler, dışlanmalar... Hepsi tek bir hedef için: taht kavgası...
            </p>
            </div>
            <div>
            <h2>
            Film Detayları
            </h2>
            <p>
            2011 - 2019 / 52Dak. / 
            <br/>
            Dram, Fantastik
            <br/>
            Yönetmen D.B. Weiss, David Benioff
            <br/>
            Oyuncular: Kit Harington, Peter Dinklage, Emilia Clarke
            <br/>
            Ülke ABD
            <br/>   
            Orijinal kanal HBO
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
export default  got ;
