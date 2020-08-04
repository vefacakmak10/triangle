import React from 'react';
import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap'
import seven from '../images/seven.jpg' 
import django from '../images/django.jpg' 
import piyanist from '../images/piyanist.jpg' 
import {Link} from 'react-router-dom'
const initialState={ 
    showResults: false ,
    showResults1: false , 
    showResults2:false,}

class Coffees extends React.Component {
    state= initialState ;
    fieldCagir= (e) => {
        e.preventDefault();
        this.setState({
          showResults1:false,
          showResults2:false,
          showResults: true 
      
        });
      
      };
      fieldCagir1= (e) => {
        e.preventDefault();
        this.setState({
          showResults:false,
          showResults2:false,
          showResults1: true 
      
        });
      
      };
      fieldCagir2= (e) => {
        e.preventDefault();
        this.setState({
          showResults:false,
          showResults1:false,
          showResults2:true , 
      
        });
      
      };
    render () {
        return (
  <div className="title">
    <h2 className="pull-left">
        <span className="title-border">
        <i className="icon icon-star" />
        </span>
        Fimler
    </h2>
   
    <div >
    <Button  type="button" onClick={this.fieldCagir}>
                Aksiyon
                </Button>
                <Button type="button" onClick={this.fieldCagir1}>
                Dram
                </Button>
                <Button type="button" onClick={this.fieldCagir2}>
                Macera
                </Button>
                </div>
               
                <div style={{borderTop:"1px solid"}}>
                <fieldset style={{ display: this.state.showResults ? "block" : "none" }}  >
                <Card style={{ width: '18rem' }}  >
                    <Card.Img variant="top" src={seven }  width="200" height="200" / >
                    <Card.Body>
                        <Card.Title>SEVEN</Card.Title>
                        <Card.Text>
                        Yedi, seri cinayetler işleyen bir katilin peşine düşen iki polis dedektifinin hikayesini anlatıyor. Bir seri katil 7 ölümcül günahı işleyenleri kendi yöntemleriyle öldürmektedir. Yedi Ölümcül Günah, Hıristiyanlık inançlarına göre Kibir, Açgözlülük, Şehvet Düşkünlüğü,Kıskançlık, Oburluk,Yıkıcılık ve Tembellik'tir. 
                        </Card.Text>
                        <Link to="../movies/seven">
                        <Button variant="primary">Filme git</Button>
                        </Link>
                    </Card.Body>
                    </Card>
                </fieldset>
                <fieldset style={{ display: this.state.showResults1 ? "block" : "none" }}  >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={django}  width="200" height="200" / >
                    <Card.Body>
                    <Card.Title>DJANGO</Card.Title>
                    <Card.Text>
                    Zincirsiz, Köle Django’nun Alman asıllı ödül avcısı Dr. King Schultz ile yolunun kesişmesiyle başlıyor.
                    </Card.Text>
                    <Link to="../movies/django">
                    <Button variant="primary">Filme git</Button>
                    </Link>
                    </Card.Body>
                    </Card>
              
                </fieldset>
                <fieldset style={{ display: this.state.showResults2 ? "block" : "none" }}  >
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={piyanist}  width="200" height="200" / >
                <Card.Body>
                <Card.Title>DJANGO</Card.Title>
                <Card.Text>
                Piyanist, İkinci Dünya Savaşı sırasında yaşanan gerçek bir dramı konu alır.Varoşlarda tam anlamıyla sefil bir hayat süren müzisyen, diğer halkla birlikte, kıtlığa ve aşağılanmalara maruz kalsa da kahramanca mücadele edecektir
                </Card.Text>
                <Link to="../movies/piyanist">
                <Button variant="primary">Filme git</Button>
                </Link>
                </Card.Body>
                </Card>
                </fieldset>
                </div>
    


    


  

</div>


        )
    }
}

export default Coffees;
