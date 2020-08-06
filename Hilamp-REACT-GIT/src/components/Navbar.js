import React from 'react';
import Logo from "../logoeducat.svg";

import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Garagem from '../pages/Garagem'
import PrimeiroAndar from '../pages/PrimeiroAndar'
import CaixadAgua from '../pages/CaixadAgua'
import SegundoAndar from '../pages/SegundoAndar'
import TerceiroAndar from '../pages/TerceiroAndar'
import QuartoAndar from '../pages/QuartoAndar'



const NavBar = ({ }) => {
    return (
        <Route>
            <Navbar className="navbar"  >
                <Navbar.Brand href="/index">
                    <img    
                        src={Logo}
                        width="180"
                        alt="Logo"
                        className="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link  href="/index"><b>Página Inicial</b></Nav.Link>
                        <Nav.Link href="/garagem"><b>Garagem</b></Nav.Link>
                        <Nav.Link href="/"><b>Caixa d'Água</b></Nav.Link>
                        <NavDropdown title="Andares" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/PrimeiroAndar"><b>1 Andar</b></NavDropdown.Item>
                            <NavDropdown.Item href="/SegundoAndar"><b>2 Andar</b></NavDropdown.Item>
                            <NavDropdown.Item href="/TerceiroAndar"><b>3 Andar</b></NavDropdown.Item>
                            <NavDropdown.Item href="/QuartoAndar"><b>4 Andar</b></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route path='/index' component={Index} />
                <Route path='/garagem' component={Garagem} />
                
                <Route path='/PrimeiroAndar' component={PrimeiroAndar} />
                <Route path='/SegundoAndar' component={SegundoAndar} />
                <Route path='/TerceiroAndar' component={TerceiroAndar} />
                <Route path='/QuartoAndar' component={QuartoAndar} />
            </Switch>
        </Route>
    )
}


export default NavBar;