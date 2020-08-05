import React, { Component } from 'react'
import video  from '../videos/piyanist.mp4' 

import axios from 'axios';
import thomas from '../images/thomas.jpg'
import emilia from '../images/emilia.jpg'
import brody from '../images/brody.jpg'
const initialState={
    name: "piyanist",
    number:"4",
   


};


 class piyanist extends Component {
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
            Piyanist, İkinci Dünya Savaşı sırasında yaşanan gerçek bir dramı konu alır. Polonya’lı ünlü piyanist Wladyslaw Szpilman’ın anılarını anlattığı aynı isimli kitaptan sinemaya uyarlanan film, Nazi işgali altındaki Polonya’da yaşamanın imkansızlaştırıldığı bir dönemde, bir şekilde esir kampına gitmekten kurtulan ünlü piyanistin Varşova’nın kenar mahallelerindeki hayatta kalma mücadelesine odaklanır. Varoşlarda tam anlamıyla sefil bir hayat süren müzisyen, diğer halkla birlikte, kıtlığa ve aşağılanmalara maruz kalsa da kahramanca mücadele edecektir. Günü gelip oradan kaçma şansı bulduğundaysa başkentin harabelerine sığınacak, beklemediği bir anda gelen bir yardımla umudunu yeniden kazanacaktır.
            Film, En İyi Erkek Oyuncu dalında Oscar alan Adrien Brody'nin de filmografisinin en güçlü işlerinden biri.            </p>
            </div>
            <div>
            <h2>
            Film Detayları
            </h2>
            <p>
            28 Şubat 2003 / 2s 28dk / 
            <br/>Dram, Tarihi
            <br/>
            Yönetmen Roman Polanski
            <br/>
            Oyuncular: Adrien Brody , Thomas Kretschmann, Emilia Fox
            <br/>
            <img src={brody} width="100px"  height="100px"/>
            <img src={thomas} width="100px"  height="100px"/>
            <img src={emilia} width="100px"  height="100px"/>
            <br/>
            Ülke Fransa, İngiltere, Almanya, Polonya  
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
export default piyanist ;
