import React, { Component } from 'react'
import video  from '../videos/django.mp4' 
import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap'
import axios from 'axios';




const initialState={
    name: "django",
    number:"1",
    id:"5f290db1502932243820ee67",
    count: 0,
    countdb:"",
   


};



export default class django extends Component {
    state= initialState ;
  
   
   

    componentDidMount = () => {
      this.getId();
      
      this.LoginControl();
      
      
      
      
        
        
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
    };
    
    LoginControl = () => {
      const payload= {
        name : this.state.name,
        number: this.state.number ,
        count  : this.state.count  , 
        
      }
      
       
      axios({
        url:"http://localhost:8080/api/movie/5f290db1502932243820ee67" , 
        method:'PUT',
        data:payload,
      })
      .then(() =>{
        console.log('Veri kaydedildi', )
        this.setState({ count: this.state.countdb + 1 })
    
        
     
      })
      .catch(() =>{
        console.log('Hata' )
        
      });
    } ;
    getId = () => {
      axios.get('http://localhost:8080/api/movie/5f290db1502932243820ee67')
      .then((response) => {
  
             
              let countdb;
              const data = response.data;
            
              countdb=data.count;
          
              this.setState({countdb}) ;
              
              console.log('veriler alındı!!');
            
              console.log(countdb);
  
      })
      .catch(() => {
        alert('hata var');
      });
    };


  
    
   


        render() {
        return (
            <div>
                
                <div ><h2 id="film_ozet_baslik">Filmin Konusu</h2> <div className="clear" /><article><p>Yönetmenlerin ustası Quentin Tarantino’nun sinema tarihine adını yazdıran son filmi <b>Zincirsiz</b> Django filmi 600 bini aşkın seveni tarafından oylanarak 8.5 değerinde İMDB puanına sahip oldu ve şu an en iyiler arasında 54. sırada yer alıyor. Yönetmenliğini yapan Quentin Tarantino’nun senaryosunu da yazdığı filmin oyuncu kadrosu da çok sağlam bir şekilde karşımıza çıkıyor. Jamie Foxx, Christoph Waltz ve Leonardo DiCaprio gibi birbirinden başarılı isimlerin yer aldığı yapım vahşi batıyı konu alıyor. 2 saat 45 dakika boyunca vahşi batının 1800’lü yıllardaki acımasız yüzünü bizlere anlatan ABD yapımı film 100 Milyon Dolarlık bir harcama ile çekilmiştir ve sadece sinema gişe hasılatı olarak 260 Milyona yakın bir kazanç elde etmiştir.</p><p>Amerika 2 sene önce sivil savaştan çıkmıştır ve güney bölgesinde kölelik devam etmektedir. Siyahi kölelerden sadece biri olan Django köle tacirlerinin elinden Alman King Schultz tarafından kurtarılır.  Doktor King, dişçi kılığında gezen ve devlet adına çalışan bir ödül avcısıdır. Django’yu kurtarma sebebi ise eski efendisinin arananlar listesinde olması ve onu tanıyan en iyi insan olmasıdır. Django hiç bir zaman diğer köleler gibi olmamıştır, çünkü onda bulunan cesaret hiç kimsede yoktu ve doktorda bunu sonradan fark eder. Özgür kalması karşılığında anlaşmaya varan ikili Brittle kardeşlerin peşine düşerler. Bundan sonra birlikte yola koyulan Django ve Schultz görevi başarıyla tamamlarlar. Adamın silahlara karşı olan yeteneğini fark eden doktor artık onu yanından ayırmaz ve birlikte suçluların peşine düşerler. Her geçen gün silahları daha iyi kullanmaya başlayan siyahi genç adam usta bir silahşör olur. Dostlukları günden güne ilerleyen ikili birbirinden tehlikeli olayları başarıyla tamamlayarak yollarına devam ederler. Fakat Django’nun köle olduğu zamanlarda evli olduğu karısı Broomhilda halen köledir ve onu kurtarmak istediğini doktora anlatır. En büyük sorun ise karısının Candland adı verilen bir yerin sahibi Calvin Candie’nin yanında olmasıdır. Kötü şöhreti ile tanınan bu adamın çiftliğine gitmeden önce bir plan kurarlar, ancak olaylar çok farklı gelişir ve kan gövdeyi götürür…</p></article></div>
                <div>
                <video onMouseOver={this.setValue} width="750" height="500" controls >
                <source src={video} type="video/mp4"/>
                </video>
                </div>
                <button onClick={this.setValue}>
                aaaaa
                </button>
                
                <div>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header> <div>
                    <label>
                    Adınız
                    </label>
                    </div>
                    <input type="text" name="username" value={this.state.username} onChange={ this.handleChange}/ ></Card.Header>
                    <Card.Body>
                    
                    <Card.Text>
                    <div>
                    <label>
                    Yorumunuz
                    </label>
                    </div>
                    <input type="text" name="comment" value={this.state.comment} onChange={ this.handleChange}/ > 
                    </Card.Text>
                    <Button variant="primary">Gönder</Button>

                    </Card.Body>
                </Card>
                 
               

                </div>
            </div>
        )
    }
}
