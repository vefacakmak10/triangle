import React from 'react';
import seven from '../images/seven.jpg' ;
import django from '../images/django.jpg' ;
import piyanist from '../images/piyanist.jpg' ;
import sherlock from '../images/sherlock.jpg' ;
import gangs from '../images/gangs.jpg' ;
import got from '../images/got.jpg' ;
import {Link} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap';

class movieOrder extends React.Component{
    render () {
        return (
            <div>
            <h3>
            En Son Eklenen 
            </h3>
            <div>
            <Card style={{ width: '18rem' }}  >
            <Card.Img variant="top" src={django }  width="200" height="200" />
            <Card.Body>
                <Card.Title>Django</Card.Title>
                <Card.Text>
                Zincirsiz, Köle Django’nun Alman asıllı ödül avcısı Dr. King Schultz ile yolunun kesişmesiyle başlıyor.
                </Card.Text>
                <Link to="../movies/django">
                <Button variant="primary">Diziye git</Button>
                </Link>
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }}  >
            <Card.Img variant="top" src={gangs }  width="200" height="200" />
            <Card.Body>
                <Card.Title>Gangs of London</Card.Title>
                <Card.Text>
                Finn Wallace, Londra’nın en güçlü suç ailesinin başındaki isimdir. Ancak Finn Wallace’ın bir suikast sonucu öldürülmesi, bir iktidar boşluğunun oluşmasına neden olur. 
                </Card.Text>
                <Link to="../movies/gangs">
                <Button variant="primary">Diziye git</Button>
                </Link>
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }}  >
            <Card.Img variant="top" src={got }  width="200" height="200" />
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
            </div>
            <div>
            <Card style={{ width: '18rem' }}  >
            <Card.Img variant="top" src={piyanist }  width="200" height="200" />
            <Card.Body>
                <Card.Title>Piyanist</Card.Title>
                <Card.Text>
                Piyanist, İkinci Dünya Savaşı sırasında yaşanan gerçek bir dramı konu alır.Varoşlarda tam anlamıyla sefil bir hayat süren müzisyen, diğer halkla birlikte, kıtlığa ve aşağılanmalara maruz kalsa da kahramanca mücadele edecektir
                </Card.Text>
                <Link to="../movies/piyanist">
                <Button variant="primary">Diziye git</Button>
                </Link>
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }}  >
            <Card.Img variant="top" src={seven }  width="200" height="200" />
            <Card.Body>
                <Card.Title>Seven</Card.Title>
                <Card.Text>
                Yedi, seri cinayetler işleyen bir katilin peşine düşen iki polis dedektifinin hikayesini anlatıyor. Bir seri katil 7 ölümcül günahı işleyenleri kendi yöntemleriyle öldürmektedir. Yedi Ölümcül Günah, Hıristiyanlık inançlarına göre Kibir, Açgözlülük, Şehvet Düşkünlüğü,Kıskançlık, Oburluk,Yıkıcılık ve Tembellik'tir. 
                </Card.Text>
                <Link to="../movies/seven">
                <Button variant="primary">Diziye git</Button>
                </Link>
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }}  >
            <Card.Img variant="top" src={sherlock }  width="200" height="200" />
            <Card.Body>
                <Card.Title>Sherlock Holmes</Card.Title>
                <Card.Text>
                Modern bir Sherlock Holmes uyarlaması.. Bu kez Sherlock günümüz Londra'sında, günümüz şartlarında çözüyor davaları.

                </Card.Text>
                <Link to="../movies/sherlock">
                <Button variant="primary">Diziye git</Button>
                </Link>
            </Card.Body>
            </Card>
            </div>

            </div>

        )
    }
}

export default movieOrder;