import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Badge } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
  render() {
    return (
      <div>
        <div>
            <Navbar color="faded" light toggleable>
                <NavbarToggler right onClick={this.toggle} />
                <NavbarBrand href="/index"><h1>Layout - Header</h1></NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/add-item">Add-item</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/shinminchang/MyPlayground/tree/master/Study/REACT/source/reactfrontend-master">Github</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        <div>
          <h1>{this.props.title}</h1>
          {this.props.children}
        </div>
          <Navbar color="faded" light toggleable>
              <NavbarToggler right onClick={this.toggle} />
              <NavbarBrand href="/index"><h1>Layout - Footer</h1></NavbarBrand>
              <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                  </Nav>
              </Collapse>
          </Navbar>

          <div>
          <img src={require('./loading.gif')} />
        </div>
      </div>
    );
  }
}


export default Header;
