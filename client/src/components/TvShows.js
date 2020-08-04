import React from 'react';
import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap';
import got from '../images/got.jpg' ;
import sherlock from '../images/sherlock.jpg' ;
import gangs from '../images/gangs.jpg' ;
import {Link} from 'react-router-dom';
const initialState={ 
    showResults: false ,
    showResults1: false , 
    showResults2:false,}

class TvShows extends React.Component {
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
        Diziler
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
                    <Card.Img variant="top" src={got }  width="200" height="200" / >
                    <Card.Body>
                        <Card.Title>GAME OF THRONES</Card.Title>
                        <Card.Text>
                        Krallık dediğin savaşsız olur mu? En güçlü krallığı kurup, huzuru sağlamış olsan bile bu gücü elinde nasıl koruyacaksın? Burada yanlış yapana yer yok, affetmek yok. 
                        </Card.Text>
                        <Link to="../movies/got">
                        <Button variant="primary">Diziye git</Button>
                        </Link>
                    </Card.Body>
                    </Card>
                </fieldset>
                <fieldset style={{ display: this.state.showResults1 ? "block" : "none" }}  >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={gangs}  width="200" height="200" / >
                    <Card.Body>
                    <Card.Title>GANGS OF LONDON</Card.Title>
                    <Card.Text>
                    Finn Wallace, Londra’nın en güçlü suç ailesinin başındaki isimdir. Ancak Finn Wallace’ın bir suikast sonucu öldürülmesi, bir iktidar boşluğunun oluşmasına neden olur. 
                    </Card.Text>
                    <Link to="../movies/gangs">
                    <Button variant="primary">Diziye git</Button>
                    </Link>
                    </Card.Body>
                    </Card>
              
                </fieldset>
                <fieldset style={{ display: this.state.showResults2 ? "block" : "none" }}  >
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={sherlock}  width="200" height="200" / >
                <Card.Body>
                <Card.Title>SHERLOCK</Card.Title>
                <Card.Text>
                Modern bir Sherlock Holmes uyarlaması.. Bu kez Sherlock günümüz Londra'sında, günümüz şartlarında çözüyor davaları.
                </Card.Text>
                <Link to="../movies/sherlock">
                <Button variant="primary">Diziye git</Button>
                </Link>
                </Card.Body>
                </Card>
                </fieldset>
                </div>
    


    


  

</div>


        )
    }
}

export default TvShows;
