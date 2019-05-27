import React, { Component } from 'react';
import logo from './images/logo.jpg';
import MenuIcons from './MenuIcons';
import menuItems from './menu-items';
import IMenuItem from '../../redux/interfaces/IMenuItem';
import { activateMenuItem } from '../../redux/actions/menuActions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from '../pages/Contact';

import './Menu.scss';

interface IMenuProps {
  activateMenuItem(menuItem: IMenuItem): any;
}

class Menu extends Component<IMenuProps> {
  state = {
    activeMenuItemIndex: 0,
    galleries: []
  };

  /* ************************************************** */

  constructor(props: IMenuProps) {
    super(props);
    this.setActiveMenuIndex = this.setActiveMenuIndex.bind(this);
  }

  /* ************************************************** */

  setActiveMenuIndex(index: number) {
    this.props.activateMenuItem(menuItems[index]);

    this.setState({
      activeMenuItemIndex: index
    });
  }

  /* ************************************************** */

  renderMenuItems() {
    const getCSSClassName = (index: number) => {
      return index === this.state.activeMenuItemIndex ? 'link active' : 'link';
    };

    let menuItemsJSX = menuItems.map((menuItem, index) => (
      <li key={`li-${menuItem.name}`}>
        <Link
          to={menuItem.url}
          onClick={() => this.setActiveMenuIndex(index)}
          className={getCSSClassName(index)}
        >
          {menuItem.name}
        </Link>
      </li>
    ));

    return menuItemsJSX;
  }

  /* ************************************************** */

  render() {
    return (
      <Router>
        <div className="Menu">
          <div className="logo-container">
            <img src={logo} className="logo-img" alt="Lilit Grigoryants" />
          </div>
          <h1 className="menu-title">
            Lilit
            <span>Grigoryants</span>
          </h1>
          <nav className="menu-items">
            <ul>{this.renderMenuItems()}</ul>
          </nav>
          <MenuIcons />
        </div>
        <Route path="/contact/" component={Contact} />
      </Router>
    );
  }
}

/* ************************************************** */

export default connect(
  null,
  { activateMenuItem }
)(Menu);
